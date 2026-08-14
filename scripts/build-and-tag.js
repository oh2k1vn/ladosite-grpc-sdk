const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');
const packageJsonPath = path.join(rootDir, 'package.json');

/**
 * Tăng version tự động theo quy tắc 0-9 (base 10 rollover):
 * Ví dụ:
 *   0.1.3 -> 0.1.4
 *   0.1.9 -> 0.2.0
 *   0.9.9 -> 1.0.0
 */
function bumpVersion(currentVersion) {
  const parts = currentVersion.split('.').map(Number);
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) {
    throw new Error(`Version không hợp lệ: ${currentVersion}`);
  }

  let [major, minor, patch] = parts;

  if (patch < 9) {
    patch += 1;
  } else {
    patch = 0;
    if (minor < 9) {
      minor += 1;
    } else {
      minor = 0;
      major += 1;
    }
  }

  return `${major}.${minor}.${patch}`;
}

function runCommand(cmd, ignoreError = false) {
  try {
    console.log(`\n> ${cmd}`);
    execSync(cmd, { cwd: rootDir, stdio: 'inherit' });
    return true;
  } catch (err) {
    if (!ignoreError) {
      console.error(`❌ Lỗi thực thi lệnh: ${cmd}`);
      throw err;
    }
    return false;
  }
}

async function main() {
  console.log('==================================================');
  console.log('🚀 Bắt Đầu Tiến Trình Build & Release Git Tag SDK');
  console.log('==================================================');

  // 1. Kiểm tra mã nguồn & Build dự án
  console.log('\n🔍 Step 1: Typecheck & Building distribution...');
  runCommand('npm run typecheck');
  runCommand('npm run build');

  // 2. Đọc package.json & tăng version (hoặc nhận version từ CLI argument)
  console.log('\n🔢 Step 2: Cập nhật version trong package.json...');
  const pkgStr = fs.readFileSync(packageJsonPath, 'utf-8');
  const pkg = JSON.parse(pkgStr);

  const oldVersion = pkg.version || '0.0.0';
  const customVersion = process.argv[2]; // Nhận version thủ công nếu có: node scripts/build-and-tag.js 0.2.0
  const newVersion = customVersion || bumpVersion(oldVersion);

  pkg.version = newVersion;
  fs.writeFileSync(
    packageJsonPath,
    `${JSON.stringify(pkg, null, 2)}\n`,
    'utf-8'
  );
  console.log(`✅ Version: ${oldVersion} ➔ ${newVersion}`);

  // 3. Git Stage, Commit, Tag & Push
  console.log('\n🏷️ Step 3: Git Staging dist, Commit, Tag & Push...');
  try {
    // Stage toàn bộ thay đổi bao gồm cả thư mục dist/ đã build
    runCommand('git add -A');
    runCommand(`git commit -m "chore(release): v${newVersion}"`, true);

    // Tạo Git Tag an toàn (force tag nếu tag đã tồn tại cục bộ)
    runCommand(`git tag -f v${newVersion}`);

    // Push code và Push Tag lên GitHub
    runCommand('git push origin HEAD');
    runCommand(`git push origin v${newVersion} --force`);

    console.log('\n==================================================');
    console.log(
      `🎉 THÀNH CÔNG! Đã phát hành SDK phiên bản v${newVersion} lên GitHub!`
    );
    console.log(
      `📌 Đường dẫn cài đặt dự án con:\n   "dependencies": {\n     "@ladosite/grpc-sdk": "git+https://github.com/oh2k1vn/ladosite-grpc-sdk.git#v${newVersion}"\n   }`
    );
    console.log('==================================================');
  } catch (gitErr) {
    console.warn(
      '\n⚠️ Cảnh báo Git Push: Vui lòng kiểm tra quyền truy cập repository hoặc kết nối mạng.'
    );
    console.log(`✅ Đã cập nhật xong package.json lên version ${newVersion}`);
  }
}

main().catch((err) => {
  console.error('\n❌ Thất bại tiến trình Release:', err.message);
  process.exit(1);
});

