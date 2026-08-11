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
      console.error(`❌ Command failed: ${cmd}`);
      throw err;
    }
    return false;
  }
}

async function main() {
  console.log('--------------------------------------------------');
  console.log('🚀 Bắt đầu quá trình Build & Tag Version Mới');
  console.log('--------------------------------------------------');

  // 1. Chạy Build dự án trước
  console.log('\n📦 Step 1: Executing npm run build...');
  runCommand('npm run build');

  // 2. Đọc package.json & tăng version
  console.log('\n🔢 Step 2: Auto-incrementing version (0-9 rollover rule)...');
  const pkgStr = fs.readFileSync(packageJsonPath, 'utf-8');
  const pkg = JSON.parse(pkgStr);

  const oldVersion = pkg.version || '0.0.0';
  const newVersion = bumpVersion(oldVersion);

  pkg.version = newVersion;
  fs.writeFileSync(packageJsonPath, `${JSON.stringify(pkg, null, 2)}\n`, 'utf-8');
  console.log(`✅ Version updated in package.json: ${oldVersion} -> ${newVersion}`);

  // 3. Git Add, Commit, Tag & Push
  console.log('\n🏷️ Step 3: Git Commit, Tag & Push to GitHub...');
  try {
    runCommand('git add .');
    runCommand(`git commit -m "chore(release): v${newVersion}"`, true);
    runCommand(`git tag v${newVersion}`);
    runCommand('git push');
    runCommand(`git push origin v${newVersion}`);

    console.log('--------------------------------------------------');
    console.log(`🎉 Thành công! Đã build, tag & đẩy v${newVersion} lên GitHub!`);
    console.log('--------------------------------------------------');
  } catch (gitErr) {
    console.warn('\n⚠️ Cảnh báo Git Tag/Push: Kiểm tra kết nối hoặc quyền push repository.');
    console.log(`✅ Đã hoàn tất cập nhật package.json sang version ${newVersion}`);
  }
}

main().catch((err) => {
  console.error('\n❌ Lỗi tiến trình Build & Tag Version:', err.message);
  process.exit(1);
});
