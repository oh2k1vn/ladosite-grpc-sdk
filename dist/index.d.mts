import * as _protobuf_ts_runtime_rpc from '@protobuf-ts/runtime-rpc';
import { ServiceType, RpcOptions, UnaryCall, ServiceInfo, RpcTransport } from '@protobuf-ts/runtime-rpc';
export { RpcError } from '@protobuf-ts/runtime-rpc';
import * as _protobuf_ts_runtime from '@protobuf-ts/runtime';
import { MessageType, JsonWriteOptions, JsonValue, JsonReadOptions, PartialMessage, IBinaryReader, BinaryReadOptions, IBinaryWriter, BinaryWriteOptions } from '@protobuf-ts/runtime';
import { Metadata } from 'next';
import React from 'react';

declare class Timestamp$Type extends MessageType<Timestamp> {
    constructor();
    /**
     * Creates a new `Timestamp` for the current time.
     */
    now(): Timestamp;
    /**
     * Converts a `Timestamp` to a JavaScript Date.
     */
    toDate(message: Timestamp): Date;
    /**
     * Converts a JavaScript Date to a `Timestamp`.
     */
    fromDate(date: Date): Timestamp;
    /**
     * In JSON format, the `Timestamp` type is encoded as a string
     * in the RFC 3339 format.
     */
    internalJsonWrite(message: Timestamp, options: JsonWriteOptions): JsonValue;
    /**
     * In JSON format, the `Timestamp` type is encoded as a string
     * in the RFC 3339 format.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: Timestamp): Timestamp;
    create(value?: PartialMessage<Timestamp>): Timestamp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Timestamp): Timestamp;
    internalBinaryWrite(message: Timestamp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * A Timestamp represents a point in time independent of any time zone or local
 * calendar, encoded as a count of seconds and fractions of seconds at
 * nanosecond resolution. The count is relative to an epoch at UTC midnight on
 * January 1, 1970, in the proleptic Gregorian calendar which extends the
 * Gregorian calendar backwards to year one.
 *
 * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
 * second table is needed for interpretation, using a [24-hour linear
 * smear](https://developers.google.com/time/smear).
 *
 * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
 * restricting to that range, we ensure that we can convert to and from [RFC
 * 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
 *
 * # Examples
 *
 * Example 1: Compute Timestamp from POSIX `time()`.
 *
 *     Timestamp timestamp;
 *     timestamp.set_seconds(time(NULL));
 *     timestamp.set_nanos(0);
 *
 * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
 *
 *     struct timeval tv;
 *     gettimeofday(&tv, NULL);
 *
 *     Timestamp timestamp;
 *     timestamp.set_seconds(tv.tv_sec);
 *     timestamp.set_nanos(tv.tv_usec * 1000);
 *
 * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
 *
 *     FILETIME ft;
 *     GetSystemTimeAsFileTime(&ft);
 *     UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
 *
 *     // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
 *     // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
 *     Timestamp timestamp;
 *     timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
 *     timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
 *
 * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
 *
 *     long millis = System.currentTimeMillis();
 *
 *     Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
 *         .setNanos((int) ((millis % 1000) * 1000000)).build();
 *
 * Example 5: Compute Timestamp from Java `Instant.now()`.
 *
 *     Instant now = Instant.now();
 *
 *     Timestamp timestamp =
 *         Timestamp.newBuilder().setSeconds(now.getEpochSecond())
 *             .setNanos(now.getNano()).build();
 *
 * Example 6: Compute Timestamp from current time in Python.
 *
 *     timestamp = Timestamp()
 *     timestamp.GetCurrentTime()
 *
 * # JSON Mapping
 *
 * In JSON format, the Timestamp type is encoded as a string in the
 * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the
 * format is "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z"
 * where {year} is always expressed using four digits while {month}, {day},
 * {hour}, {min}, and {sec} are zero-padded to two digits each. The fractional
 * seconds, which can go up to 9 digits (i.e. up to 1 nanosecond resolution),
 * are optional. The "Z" suffix indicates the timezone ("UTC"); the timezone
 * is required. A proto3 JSON serializer should always use UTC (as indicated by
 * "Z") when printing the Timestamp type and a proto3 JSON parser should be
 * able to accept both UTC and other timezones (as indicated by an offset).
 *
 * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past
 * 01:30 UTC on January 15, 2017.
 *
 * In JavaScript, one can convert a Date object to this format using the
 * standard
 * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
 * method. In Python, a standard `datetime.datetime` object can be converted
 * to this format using
 * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with
 * the time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use
 * the Joda Time's [`ISODateTimeFormat.dateTime()`](
 * http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()
 * ) to obtain a formatter capable of generating timestamps in this format.
 *
 *
 * @generated from protobuf message google.protobuf.Timestamp
 */
interface Timestamp {
    /**
     * Represents seconds of UTC time since Unix epoch
     * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     * 9999-12-31T23:59:59Z inclusive.
     *
     * @generated from protobuf field: int64 seconds = 1
     */
    seconds: bigint;
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative
     * second values with fractions must still have non-negative nanos values
     * that count forward in time. Must be from 0 to 999,999,999
     * inclusive.
     *
     * @generated from protobuf field: int32 nanos = 2
     */
    nanos: number;
}
/**
 * @generated MessageType for protobuf message google.protobuf.Timestamp
 */
declare const Timestamp: Timestamp$Type;

declare class LoginRequest$Type extends MessageType<LoginRequest> {
    constructor();
    create(value?: PartialMessage<LoginRequest>): LoginRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginRequest): LoginRequest;
    internalBinaryWrite(message: LoginRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message auth.LoginRequest
 */
interface LoginRequest {
    /**
     * @generated from protobuf field: string email = 1
     */
    email: string;
    /**
     * @generated from protobuf field: string password = 2
     */
    password: string;
    /**
     * @generated from protobuf field: bool is_firebase_auth = 3
     */
    isFirebaseAuth: boolean;
    /**
     * @generated from protobuf field: string firebase_user_json = 4
     */
    firebaseUserJson: string;
}
/**
 * @generated MessageType for protobuf message auth.LoginRequest
 */
declare const LoginRequest: LoginRequest$Type;
declare class LoginResponse$Type extends MessageType<LoginResponse> {
    constructor();
    create(value?: PartialMessage<LoginResponse>): LoginResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginResponse): LoginResponse;
    internalBinaryWrite(message: LoginResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message auth.LoginResponse
 */
interface LoginResponse {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: auth.LoginData data = 3
     */
    data?: LoginData;
}
/**
 * @generated MessageType for protobuf message auth.LoginResponse
 */
declare const LoginResponse: LoginResponse$Type;
declare class LoginData$Type extends MessageType<LoginData> {
    constructor();
    create(value?: PartialMessage<LoginData>): LoginData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginData): LoginData;
    internalBinaryWrite(message: LoginData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message auth.LoginData
 */
interface LoginData {
    /**
     * @generated from protobuf field: string token = 1
     */
    token: string;
    /**
     * @generated from protobuf field: auth.UserAccount user = 2
     */
    user?: UserAccount;
    /**
     * @generated from protobuf field: repeated string permissions = 3
     */
    permissions: string[];
    /**
     * @generated from protobuf field: string org_id = 4
     */
    orgId: string;
}
/**
 * @generated MessageType for protobuf message auth.LoginData
 */
declare const LoginData: LoginData$Type;
declare class UserAccount$Type extends MessageType<UserAccount> {
    constructor();
    create(value?: PartialMessage<UserAccount>): UserAccount;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserAccount): UserAccount;
    internalBinaryWrite(message: UserAccount, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message auth.UserAccount
 */
interface UserAccount {
    /**
     * @generated from protobuf field: string id = 1
     */
    id: string;
    /**
     * @generated from protobuf field: string email = 2
     */
    email: string;
    /**
     * @generated from protobuf field: string display_name = 3
     */
    displayName: string;
    /**
     * @generated from protobuf field: string avatar_url = 4
     */
    avatarUrl: string;
    /**
     * @generated from protobuf field: string phone_number = 5
     */
    phoneNumber: string;
    /**
     * @generated from protobuf field: string status = 6
     */
    status: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 7
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 8
     */
    updatedAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expired_at = 9
     */
    expiredAt?: Timestamp;
    /**
     * @generated from protobuf field: string org_id = 10
     */
    orgId: string;
    /**
     * @generated from protobuf field: string created_by = 11
     */
    createdBy: string;
    /**
     * @generated from protobuf field: string updated_by = 12
     */
    updatedBy: string;
}
/**
 * @generated MessageType for protobuf message auth.UserAccount
 */
declare const UserAccount: UserAccount$Type;
/**
 * @generated ServiceType for protobuf service auth.AuthService
 */
declare const AuthService: ServiceType;

/**
 * @generated from protobuf service auth.AuthService
 */
interface IAuthServiceClient {
    /**
     * @generated from protobuf rpc: Login
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse>;
}
/**
 * @generated from protobuf service auth.AuthService
 */
declare class AuthServiceClient implements IAuthServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: _protobuf_ts_runtime_rpc.MethodInfo<any, any>[];
    options: {
        [extensionName: string]: _protobuf_ts_runtime.JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: Login
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse>;
}

declare class Empty$Type extends MessageType<Empty> {
    constructor();
    create(value?: PartialMessage<Empty>): Empty;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Empty): Empty;
    internalBinaryWrite(message: Empty, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message common.Empty
 */
interface Empty {
}
/**
 * @generated MessageType for protobuf message common.Empty
 */
declare const Empty: Empty$Type;
declare class PageRequest$Type extends MessageType<PageRequest> {
    constructor();
    create(value?: PartialMessage<PageRequest>): PageRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PageRequest): PageRequest;
    internalBinaryWrite(message: PageRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message common.PageRequest
 */
interface PageRequest {
    /**
     * @generated from protobuf field: int32 page = 1
     */
    page: number;
    /**
     * @generated from protobuf field: int32 page_size = 2
     */
    pageSize: number;
    /**
     * @generated from protobuf field: string sort_by = 3
     */
    sortBy: string;
    /**
     * @generated from protobuf field: bool descending = 4
     */
    descending: boolean;
}
/**
 * @generated MessageType for protobuf message common.PageRequest
 */
declare const PageRequest: PageRequest$Type;
declare class PageResponse$Type extends MessageType<PageResponse> {
    constructor();
    create(value?: PartialMessage<PageResponse>): PageResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PageResponse): PageResponse;
    internalBinaryWrite(message: PageResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message common.PageResponse
 */
interface PageResponse {
    /**
     * @generated from protobuf field: int32 total_count = 1
     */
    totalCount: number;
    /**
     * @generated from protobuf field: int32 page = 2
     */
    page: number;
    /**
     * @generated from protobuf field: int32 page_size = 3
     */
    pageSize: number;
    /**
     * @generated from protobuf field: int32 total_pages = 4
     */
    totalPages: number;
}
/**
 * @generated MessageType for protobuf message common.PageResponse
 */
declare const PageResponse: PageResponse$Type;
declare class StringValue$Type extends MessageType<StringValue> {
    constructor();
    create(value?: PartialMessage<StringValue>): StringValue;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StringValue): StringValue;
    internalBinaryWrite(message: StringValue, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message common.StringValue
 */
interface StringValue {
    /**
     * @generated from protobuf field: string value = 1
     */
    value: string;
}
/**
 * @generated MessageType for protobuf message common.StringValue
 */
declare const StringValue: StringValue$Type;
declare class IdRequest$Type extends MessageType<IdRequest> {
    constructor();
    create(value?: PartialMessage<IdRequest>): IdRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IdRequest): IdRequest;
    internalBinaryWrite(message: IdRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message common.IdRequest
 */
interface IdRequest {
    /**
     * @generated from protobuf field: string id = 1
     */
    id: string;
}
/**
 * @generated MessageType for protobuf message common.IdRequest
 */
declare const IdRequest: IdRequest$Type;
declare class OperationResult$Type extends MessageType<OperationResult> {
    constructor();
    create(value?: PartialMessage<OperationResult>): OperationResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OperationResult): OperationResult;
    internalBinaryWrite(message: OperationResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message common.OperationResult
 */
interface OperationResult {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: string id = 3
     */
    id: string;
}
/**
 * @generated MessageType for protobuf message common.OperationResult
 */
declare const OperationResult: OperationResult$Type;
declare class CommonQuery$Type extends MessageType<CommonQuery> {
    constructor();
    create(value?: PartialMessage<CommonQuery>): CommonQuery;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommonQuery): CommonQuery;
    internalBinaryWrite(message: CommonQuery, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message common.CommonQuery
 */
interface CommonQuery {
    /**
     * @generated from protobuf field: int32 page_number = 1
     */
    pageNumber: number;
    /**
     * @generated from protobuf field: int32 page_size = 2
     */
    pageSize: number;
    /**
     * @generated from protobuf field: repeated common.CommonCriteria criteria = 3
     */
    criteria: CommonCriteria[];
    /**
     * @generated from protobuf field: common.CommonSort sort = 4
     */
    sort?: CommonSort;
    /**
     * @generated from protobuf field: string operator = 5
     */
    operator: string;
}
/**
 * @generated MessageType for protobuf message common.CommonQuery
 */
declare const CommonQuery: CommonQuery$Type;
declare class CommonCriteria$Type extends MessageType<CommonCriteria> {
    constructor();
    create(value?: PartialMessage<CommonCriteria>): CommonCriteria;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommonCriteria): CommonCriteria;
    internalBinaryWrite(message: CommonCriteria, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message common.CommonCriteria
 */
interface CommonCriteria {
    /**
     * @generated from protobuf field: string field = 1
     */
    field: string;
    /**
     * @generated from protobuf field: string value = 2
     */
    value: string;
    /**
     * @generated from protobuf field: string type = 3
     */
    type: string;
}
/**
 * @generated MessageType for protobuf message common.CommonCriteria
 */
declare const CommonCriteria: CommonCriteria$Type;
declare class CommonSort$Type extends MessageType<CommonSort> {
    constructor();
    create(value?: PartialMessage<CommonSort>): CommonSort;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommonSort): CommonSort;
    internalBinaryWrite(message: CommonSort, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message common.CommonSort
 */
interface CommonSort {
    /**
     * @generated from protobuf field: string field = 1
     */
    field: string;
    /**
     * @generated from protobuf field: string order = 2
     */
    order: string;
}
/**
 * @generated MessageType for protobuf message common.CommonSort
 */
declare const CommonSort: CommonSort$Type;
declare class CommonDataSourceMeta$Type extends MessageType<CommonDataSourceMeta> {
    constructor();
    create(value?: PartialMessage<CommonDataSourceMeta>): CommonDataSourceMeta;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommonDataSourceMeta): CommonDataSourceMeta;
    internalBinaryWrite(message: CommonDataSourceMeta, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message common.CommonDataSourceMeta
 */
interface CommonDataSourceMeta {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: int32 total = 2
     */
    total: number;
    /**
     * @generated from protobuf field: int32 page_number = 3
     */
    pageNumber: number;
    /**
     * @generated from protobuf field: int32 page_size = 4
     */
    pageSize: number;
    /**
     * @generated from protobuf field: string message = 5
     */
    message: string;
}
/**
 * @generated MessageType for protobuf message common.CommonDataSourceMeta
 */
declare const CommonDataSourceMeta: CommonDataSourceMeta$Type;
declare class GetBySlugPagedRequest$Type extends MessageType<GetBySlugPagedRequest> {
    constructor();
    create(value?: PartialMessage<GetBySlugPagedRequest>): GetBySlugPagedRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBySlugPagedRequest): GetBySlugPagedRequest;
    internalBinaryWrite(message: GetBySlugPagedRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message common.GetBySlugPagedRequest
 */
interface GetBySlugPagedRequest {
    /**
     * @generated from protobuf field: string slug = 1
     */
    slug: string;
    /**
     * @generated from protobuf field: int32 page_number = 2
     */
    pageNumber: number;
    /**
     * @generated from protobuf field: int32 page_size = 3
     */
    pageSize: number;
}
/**
 * @generated MessageType for protobuf message common.GetBySlugPagedRequest
 */
declare const GetBySlugPagedRequest: GetBySlugPagedRequest$Type;
declare class GetBySlugRequest$Type extends MessageType<GetBySlugRequest> {
    constructor();
    create(value?: PartialMessage<GetBySlugRequest>): GetBySlugRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBySlugRequest): GetBySlugRequest;
    internalBinaryWrite(message: GetBySlugRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message common.GetBySlugRequest
 */
interface GetBySlugRequest {
    /**
     * @generated from protobuf field: string slug = 1
     */
    slug: string;
}
/**
 * @generated MessageType for protobuf message common.GetBySlugRequest
 */
declare const GetBySlugRequest: GetBySlugRequest$Type;

declare class BlogResponse$Type extends MessageType<BlogResponse> {
    constructor();
    create(value?: PartialMessage<BlogResponse>): BlogResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BlogResponse): BlogResponse;
    private binaryReadMap24;
    internalBinaryWrite(message: BlogResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message blog.BlogResponse
 */
interface BlogResponse {
    /**
     * @generated from protobuf field: string id = 1
     */
    id: string;
    /**
     * @generated from protobuf field: string title = 2
     */
    title: string;
    /**
     * @generated from protobuf field: string slug = 3
     */
    slug: string;
    /**
     * @generated from protobuf field: string img_url = 4
     */
    imgUrl: string;
    /**
     * @generated from protobuf field: string short_description = 5
     */
    shortDescription: string;
    /**
     * @generated from protobuf field: string content = 6
     */
    content: string;
    /**
     * @generated from protobuf field: string author = 7
     */
    author: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 8
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 9
     */
    updatedAt?: Timestamp;
    /**
     * @generated from protobuf field: repeated string tags = 10
     */
    tags: string[];
    /**
     * @generated from protobuf field: string status = 11
     */
    status: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp published_at = 12
     */
    publishedAt?: Timestamp;
    /**
     * @generated from protobuf field: int32 views = 13
     */
    views: number;
    /**
     * @generated from protobuf field: string image_alt = 14
     */
    imageAlt: string;
    /**
     * @generated from protobuf field: string blog_group_id = 18
     */
    blogGroupId: string;
    /**
     * @generated from protobuf field: string type = 19
     */
    type: string;
    /**
     * @generated from protobuf field: string template = 20
     */
    template: string;
    /**
     * @generated from protobuf field: string org_id = 21
     */
    orgId: string;
    /**
     * @generated from protobuf field: string created_by = 22
     */
    createdBy: string;
    /**
     * @generated from protobuf field: string updated_by = 23
     */
    updatedBy: string;
    /**
     * @generated from protobuf field: map<string, string> extend_object = 24
     */
    extendObject: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: string package_index = 25
     */
    packageIndex: string;
}
/**
 * @generated MessageType for protobuf message blog.BlogResponse
 */
declare const BlogResponse: BlogResponse$Type;
declare class BlogGroupResponse$Type extends MessageType<BlogGroupResponse> {
    constructor();
    create(value?: PartialMessage<BlogGroupResponse>): BlogGroupResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BlogGroupResponse): BlogGroupResponse;
    private binaryReadMap13;
    internalBinaryWrite(message: BlogGroupResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message blog.BlogGroupResponse
 */
interface BlogGroupResponse {
    /**
     * @generated from protobuf field: string id = 1
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2
     */
    name: string;
    /**
     * @generated from protobuf field: string url = 3
     */
    url: string;
    /**
     * @generated from protobuf field: string description = 4
     */
    description: string;
    /**
     * @generated from protobuf field: string content = 5
     */
    content: string;
    /**
     * @generated from protobuf field: string status = 6
     */
    status: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 7
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 8
     */
    updatedAt?: Timestamp;
    /**
     * @generated from protobuf field: string org_id = 9
     */
    orgId: string;
    /**
     * @generated from protobuf field: repeated blog.BlogResponse blogs = 10
     */
    blogs: BlogResponse[];
    /**
     * @generated from protobuf field: string created_by = 11
     */
    createdBy: string;
    /**
     * @generated from protobuf field: string updated_by = 12
     */
    updatedBy: string;
    /**
     * @generated from protobuf field: map<string, string> extend_object = 13
     */
    extendObject: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: repeated string blog_ids = 14
     */
    blogIds: string[];
    /**
     * @generated from protobuf field: string group_by = 15
     */
    groupBy: string;
    /**
     * @generated from protobuf field: string operator = 16
     */
    operator: string;
    /**
     * @generated from protobuf field: repeated common.CommonCriteria criteria = 17
     */
    criteria: CommonCriteria[];
    /**
     * @generated from protobuf field: string package_index = 18
     */
    packageIndex: string;
}
/**
 * @generated MessageType for protobuf message blog.BlogGroupResponse
 */
declare const BlogGroupResponse: BlogGroupResponse$Type;
declare class BlogDataSourceResponse$Type extends MessageType<BlogDataSourceResponse> {
    constructor();
    create(value?: PartialMessage<BlogDataSourceResponse>): BlogDataSourceResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BlogDataSourceResponse): BlogDataSourceResponse;
    internalBinaryWrite(message: BlogDataSourceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message blog.BlogDataSourceResponse
 */
interface BlogDataSourceResponse {
    /**
     * @generated from protobuf field: common.CommonDataSourceMeta meta = 1
     */
    meta?: CommonDataSourceMeta;
    /**
     * @generated from protobuf field: repeated blog.BlogResponse data = 2
     */
    data: BlogResponse[];
}
/**
 * @generated MessageType for protobuf message blog.BlogDataSourceResponse
 */
declare const BlogDataSourceResponse: BlogDataSourceResponse$Type;
declare class BlogGroupDataSourceResponse$Type extends MessageType<BlogGroupDataSourceResponse> {
    constructor();
    create(value?: PartialMessage<BlogGroupDataSourceResponse>): BlogGroupDataSourceResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BlogGroupDataSourceResponse): BlogGroupDataSourceResponse;
    internalBinaryWrite(message: BlogGroupDataSourceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message blog.BlogGroupDataSourceResponse
 */
interface BlogGroupDataSourceResponse {
    /**
     * @generated from protobuf field: common.CommonDataSourceMeta meta = 1
     */
    meta?: CommonDataSourceMeta;
    /**
     * @generated from protobuf field: repeated blog.BlogGroupResponse data = 2
     */
    data: BlogGroupResponse[];
}
/**
 * @generated MessageType for protobuf message blog.BlogGroupDataSourceResponse
 */
declare const BlogGroupDataSourceResponse: BlogGroupDataSourceResponse$Type;
declare class BlogResponseWrapped$Type extends MessageType<BlogResponseWrapped> {
    constructor();
    create(value?: PartialMessage<BlogResponseWrapped>): BlogResponseWrapped;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BlogResponseWrapped): BlogResponseWrapped;
    internalBinaryWrite(message: BlogResponseWrapped, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message blog.BlogResponseWrapped
 */
interface BlogResponseWrapped {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: blog.BlogResponse data = 3
     */
    data?: BlogResponse;
}
/**
 * @generated MessageType for protobuf message blog.BlogResponseWrapped
 */
declare const BlogResponseWrapped: BlogResponseWrapped$Type;
declare class BlogGroupResponseWrapped$Type extends MessageType<BlogGroupResponseWrapped> {
    constructor();
    create(value?: PartialMessage<BlogGroupResponseWrapped>): BlogGroupResponseWrapped;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BlogGroupResponseWrapped): BlogGroupResponseWrapped;
    internalBinaryWrite(message: BlogGroupResponseWrapped, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message blog.BlogGroupResponseWrapped
 */
interface BlogGroupResponseWrapped {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: blog.BlogGroupResponse data = 3
     */
    data?: BlogGroupResponse;
}
/**
 * @generated MessageType for protobuf message blog.BlogGroupResponseWrapped
 */
declare const BlogGroupResponseWrapped: BlogGroupResponseWrapped$Type;
/**
 * @generated ServiceType for protobuf service blog.BlogService
 */
declare const BlogService: ServiceType;

/**
 * @generated from protobuf service blog.BlogService
 */
interface IBlogServiceClient {
    /**
     * @generated from protobuf rpc: GetBlogsByQuery
     */
    getBlogsByQuery(input: CommonQuery, options?: RpcOptions): UnaryCall<CommonQuery, BlogDataSourceResponse>;
    /**
     * @generated from protobuf rpc: GetBlogDetail
     */
    getBlogDetail(input: GetBySlugRequest, options?: RpcOptions): UnaryCall<GetBySlugRequest, BlogResponseWrapped>;
    /**
     * @generated from protobuf rpc: GetBlogsByBlogGroupSlug
     */
    getBlogsByBlogGroupSlug(input: GetBySlugPagedRequest, options?: RpcOptions): UnaryCall<GetBySlugPagedRequest, BlogDataSourceResponse>;
    /**
     * @generated from protobuf rpc: GetBlogGroupsByQuery
     */
    getBlogGroupsByQuery(input: CommonQuery, options?: RpcOptions): UnaryCall<CommonQuery, BlogGroupDataSourceResponse>;
    /**
     * @generated from protobuf rpc: GetBlogGroupsBySlug
     */
    getBlogGroupsBySlug(input: GetBySlugRequest, options?: RpcOptions): UnaryCall<GetBySlugRequest, BlogGroupResponseWrapped>;
}
/**
 * @generated from protobuf service blog.BlogService
 */
declare class BlogServiceClient implements IBlogServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: _protobuf_ts_runtime_rpc.MethodInfo<any, any>[];
    options: {
        [extensionName: string]: _protobuf_ts_runtime.JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: GetBlogsByQuery
     */
    getBlogsByQuery(input: CommonQuery, options?: RpcOptions): UnaryCall<CommonQuery, BlogDataSourceResponse>;
    /**
     * @generated from protobuf rpc: GetBlogDetail
     */
    getBlogDetail(input: GetBySlugRequest, options?: RpcOptions): UnaryCall<GetBySlugRequest, BlogResponseWrapped>;
    /**
     * @generated from protobuf rpc: GetBlogsByBlogGroupSlug
     */
    getBlogsByBlogGroupSlug(input: GetBySlugPagedRequest, options?: RpcOptions): UnaryCall<GetBySlugPagedRequest, BlogDataSourceResponse>;
    /**
     * @generated from protobuf rpc: GetBlogGroupsByQuery
     */
    getBlogGroupsByQuery(input: CommonQuery, options?: RpcOptions): UnaryCall<CommonQuery, BlogGroupDataSourceResponse>;
    /**
     * @generated from protobuf rpc: GetBlogGroupsBySlug
     */
    getBlogGroupsBySlug(input: GetBySlugRequest, options?: RpcOptions): UnaryCall<GetBySlugRequest, BlogGroupResponseWrapped>;
}

declare class CreateCommentRequest$Type extends MessageType<CreateCommentRequest> {
    constructor();
    create(value?: PartialMessage<CreateCommentRequest>): CreateCommentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateCommentRequest): CreateCommentRequest;
    internalBinaryWrite(message: CreateCommentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message comment.CreateCommentRequest
 */
interface CreateCommentRequest {
    /**
     * @generated from protobuf field: string ref_id = 1
     */
    refId: string;
    /**
     * @generated from protobuf field: string ref_type = 2
     */
    refType: string;
    /**
     * @generated from protobuf field: string content = 3
     */
    content: string;
}
/**
 * @generated MessageType for protobuf message comment.CreateCommentRequest
 */
declare const CreateCommentRequest: CreateCommentRequest$Type;
declare class CreateCommentResponse$Type extends MessageType<CreateCommentResponse> {
    constructor();
    create(value?: PartialMessage<CreateCommentResponse>): CreateCommentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateCommentResponse): CreateCommentResponse;
    internalBinaryWrite(message: CreateCommentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message comment.CreateCommentResponse
 */
interface CreateCommentResponse {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: comment.CommentData data = 3
     */
    data?: CommentData;
}
/**
 * @generated MessageType for protobuf message comment.CreateCommentResponse
 */
declare const CreateCommentResponse: CreateCommentResponse$Type;
declare class GetCommentsByRefRequest$Type extends MessageType<GetCommentsByRefRequest> {
    constructor();
    create(value?: PartialMessage<GetCommentsByRefRequest>): GetCommentsByRefRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCommentsByRefRequest): GetCommentsByRefRequest;
    internalBinaryWrite(message: GetCommentsByRefRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message comment.GetCommentsByRefRequest
 */
interface GetCommentsByRefRequest {
    /**
     * @generated from protobuf field: string ref_id = 1
     */
    refId: string;
    /**
     * @generated from protobuf field: string ref_type = 2
     */
    refType: string;
    /**
     * @generated from protobuf field: int32 page_number = 3
     */
    pageNumber: number;
    /**
     * @generated from protobuf field: int32 page_size = 4
     */
    pageSize: number;
}
/**
 * @generated MessageType for protobuf message comment.GetCommentsByRefRequest
 */
declare const GetCommentsByRefRequest: GetCommentsByRefRequest$Type;
declare class GetCommentsByRefResponse$Type extends MessageType<GetCommentsByRefResponse> {
    constructor();
    create(value?: PartialMessage<GetCommentsByRefResponse>): GetCommentsByRefResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCommentsByRefResponse): GetCommentsByRefResponse;
    internalBinaryWrite(message: GetCommentsByRefResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message comment.GetCommentsByRefResponse
 */
interface GetCommentsByRefResponse {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: repeated comment.CommentData data = 3
     */
    data: CommentData[];
}
/**
 * @generated MessageType for protobuf message comment.GetCommentsByRefResponse
 */
declare const GetCommentsByRefResponse: GetCommentsByRefResponse$Type;
declare class CommentData$Type extends MessageType<CommentData> {
    constructor();
    create(value?: PartialMessage<CommentData>): CommentData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommentData): CommentData;
    internalBinaryWrite(message: CommentData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message comment.CommentData
 */
interface CommentData {
    /**
     * @generated from protobuf field: string id = 1
     */
    id: string;
    /**
     * @generated from protobuf field: string ref_id = 2
     */
    refId: string;
    /**
     * @generated from protobuf field: string ref_type = 3
     */
    refType: string;
    /**
     * @generated from protobuf field: string user_id = 4
     */
    userId: string;
    /**
     * @generated from protobuf field: string user_display_name = 5
     */
    userDisplayName: string;
    /**
     * @generated from protobuf field: string user_avatar_url = 6
     */
    userAvatarUrl: string;
    /**
     * @generated from protobuf field: string content = 7
     */
    content: string;
    /**
     * @generated from protobuf field: string status = 8
     */
    status: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 9
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: string rejection_reason = 10
     */
    rejectionReason: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 11
     */
    updatedAt?: Timestamp;
    /**
     * @generated from protobuf field: string org_id = 12
     */
    orgId: string;
    /**
     * @generated from protobuf field: string created_by = 13
     */
    createdBy: string;
    /**
     * @generated from protobuf field: string updated_by = 14
     */
    updatedBy: string;
}
/**
 * @generated MessageType for protobuf message comment.CommentData
 */
declare const CommentData: CommentData$Type;
/**
 * @generated ServiceType for protobuf service comment.CommentService
 */
declare const CommentService: ServiceType;

/**
 * @generated from protobuf service comment.CommentService
 */
interface ICommentServiceClient {
    /**
     * @generated from protobuf rpc: CreateComment
     */
    createComment(input: CreateCommentRequest, options?: RpcOptions): UnaryCall<CreateCommentRequest, CreateCommentResponse>;
    /**
     * @generated from protobuf rpc: GetCommentsByRef
     */
    getCommentsByRef(input: GetCommentsByRefRequest, options?: RpcOptions): UnaryCall<GetCommentsByRefRequest, GetCommentsByRefResponse>;
}
/**
 * @generated from protobuf service comment.CommentService
 */
declare class CommentServiceClient implements ICommentServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: _protobuf_ts_runtime_rpc.MethodInfo<any, any>[];
    options: {
        [extensionName: string]: _protobuf_ts_runtime.JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: CreateComment
     */
    createComment(input: CreateCommentRequest, options?: RpcOptions): UnaryCall<CreateCommentRequest, CreateCommentResponse>;
    /**
     * @generated from protobuf rpc: GetCommentsByRef
     */
    getCommentsByRef(input: GetCommentsByRefRequest, options?: RpcOptions): UnaryCall<GetCommentsByRefRequest, GetCommentsByRefResponse>;
}

declare class PlaceOrderRequest$Type extends MessageType<PlaceOrderRequest> {
    constructor();
    create(value?: PartialMessage<PlaceOrderRequest>): PlaceOrderRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlaceOrderRequest): PlaceOrderRequest;
    internalBinaryWrite(message: PlaceOrderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message order.PlaceOrderRequest
 */
interface PlaceOrderRequest {
    /**
     * @generated from protobuf field: string customer_name = 1
     */
    customerName: string;
    /**
     * @generated from protobuf field: string email = 2
     */
    email: string;
    /**
     * @generated from protobuf field: string phone = 3
     */
    phone: string;
    /**
     * @generated from protobuf field: string shipping_address = 4
     */
    shippingAddress: string;
    /**
     * @generated from protobuf field: string payment_method = 5
     */
    paymentMethod: string;
    /**
     * @generated from protobuf field: string note = 6
     */
    note: string;
    /**
     * @generated from protobuf field: string session_id = 7
     */
    sessionId: string;
    /**
     * @generated from protobuf field: repeated order.OrderItemInput items = 10
     */
    items: OrderItemInput[];
    /**
     * @generated from protobuf field: string voucher_code = 11
     */
    voucherCode: string;
    /**
     * @generated from protobuf field: double shipping_fee = 12
     */
    shippingFee: number;
    /**
     * @generated from protobuf field: string shipping_carrier_pref = 13
     */
    shippingCarrierPref: string;
}
/**
 * @generated MessageType for protobuf message order.PlaceOrderRequest
 */
declare const PlaceOrderRequest: PlaceOrderRequest$Type;
declare class OrderItemInput$Type extends MessageType<OrderItemInput> {
    constructor();
    create(value?: PartialMessage<OrderItemInput>): OrderItemInput;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OrderItemInput): OrderItemInput;
    internalBinaryWrite(message: OrderItemInput, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message order.OrderItemInput
 */
interface OrderItemInput {
    /**
     * @generated from protobuf field: string product_id = 1
     */
    productId: string;
    /**
     * @generated from protobuf field: string variant_id = 2
     */
    variantId: string;
    /**
     * @generated from protobuf field: int32 qty = 3
     */
    qty: number;
}
/**
 * @generated MessageType for protobuf message order.OrderItemInput
 */
declare const OrderItemInput: OrderItemInput$Type;
declare class GetOrdersResponse$Type extends MessageType<GetOrdersResponse> {
    constructor();
    create(value?: PartialMessage<GetOrdersResponse>): GetOrdersResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOrdersResponse): GetOrdersResponse;
    internalBinaryWrite(message: GetOrdersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message order.GetOrdersResponse
 */
interface GetOrdersResponse {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: int32 total = 3
     */
    total: number;
    /**
     * @generated from protobuf field: repeated order.OrderResponse data = 4
     */
    data: OrderResponse[];
}
/**
 * @generated MessageType for protobuf message order.GetOrdersResponse
 */
declare const GetOrdersResponse: GetOrdersResponse$Type;
declare class OrderResponse$Type extends MessageType<OrderResponse> {
    constructor();
    create(value?: PartialMessage<OrderResponse>): OrderResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OrderResponse): OrderResponse;
    internalBinaryWrite(message: OrderResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message order.OrderResponse
 */
interface OrderResponse {
    /**
     * @generated from protobuf field: string id = 1
     */
    id: string;
    /**
     * @generated from protobuf field: string order_code = 2
     */
    orderCode: string;
    /**
     * @generated from protobuf field: string customer_name = 3
     */
    customerName: string;
    /**
     * @generated from protobuf field: string email = 4
     */
    email: string;
    /**
     * @generated from protobuf field: string phone = 5
     */
    phone: string;
    /**
     * @generated from protobuf field: string status = 6
     */
    status: string;
    /**
     * @generated from protobuf field: string payment_status = 7
     */
    paymentStatus: string;
    /**
     * @generated from protobuf field: double total_amount = 8
     */
    totalAmount: number;
    /**
     * @generated from protobuf field: int64 created_at = 9
     */
    createdAt: bigint;
    /**
     * @generated from protobuf field: string shipping_address = 10
     */
    shippingAddress: string;
    /**
     * @generated from protobuf field: string shipping_carrier = 11
     */
    shippingCarrier: string;
    /**
     * @generated from protobuf field: string tracking_code = 12
     */
    trackingCode: string;
    /**
     * @generated from protobuf field: int64 estimated_delivery_from = 13
     */
    estimatedDeliveryFrom: bigint;
    /**
     * @generated from protobuf field: int64 estimated_delivery_to = 14
     */
    estimatedDeliveryTo: bigint;
    /**
     * @generated from protobuf field: int64 shipped_at = 15
     */
    shippedAt: bigint;
    /**
     * @generated from protobuf field: int64 delivered_at = 16
     */
    deliveredAt: bigint;
    /**
     * TIKTOK STYLE FIELDS
     *
     * @generated from protobuf field: string shop_name = 17
     */
    shopName: string;
    /**
     * @generated from protobuf field: string payment_method_label = 18
     */
    paymentMethodLabel: string;
    /**
     * @generated from protobuf field: string payment_method_logo = 19
     */
    paymentMethodLogo: string;
    /**
     * @generated from protobuf field: double shipping_fee = 20
     */
    shippingFee: number;
    /**
     * @generated from protobuf field: double discount_amount = 21
     */
    discountAmount: number;
    /**
     * @generated from protobuf field: double original_total_amount = 22
     */
    originalTotalAmount: number;
    /**
     * @generated from protobuf field: int64 paid_at = 23
     */
    paidAt: bigint;
    /**
     * @generated from protobuf field: string shop_logo_url = 24
     */
    shopLogoUrl: string;
    /**
     * @generated from protobuf field: string status_label = 25
     */
    statusLabel: string;
    /**
     * @generated from protobuf field: string status_emoji = 26
     */
    statusEmoji: string;
    /**
     * @generated from protobuf field: string shop_id = 27
     */
    shopId: string;
    /**
     * @generated from protobuf field: int64 expected_delivery_date = 28
     */
    expectedDeliveryDate: bigint;
    /**
     * @generated from protobuf field: string payment_method = 29
     */
    paymentMethod: string;
    /**
     * @generated from protobuf field: string note = 30
     */
    note: string;
    /**
     * @generated from protobuf field: string voucher_code = 31
     */
    voucherCode: string;
    /**
     * @generated from protobuf field: string cancel_reason = 32
     */
    cancelReason: string;
    /**
     * @generated from protobuf field: string cancelled_by = 33
     */
    cancelledBy: string;
    /**
     * @generated from protobuf field: int64 cancelled_at = 34
     */
    cancelledAt: bigint;
    /**
     * @generated from protobuf field: string tracking_url = 35
     */
    trackingUrl: string;
    /**
     * @generated from protobuf field: double tax_amount = 36
     */
    taxAmount: number;
}
/**
 * @generated MessageType for protobuf message order.OrderResponse
 */
declare const OrderResponse: OrderResponse$Type;
declare class CancelOrderRequest$Type extends MessageType<CancelOrderRequest> {
    constructor();
    create(value?: PartialMessage<CancelOrderRequest>): CancelOrderRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CancelOrderRequest): CancelOrderRequest;
    internalBinaryWrite(message: CancelOrderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message order.CancelOrderRequest
 */
interface CancelOrderRequest {
    /**
     * @generated from protobuf field: string order_code = 1
     */
    orderCode: string;
    /**
     * @generated from protobuf field: string reason = 2
     */
    reason: string;
    /**
     * @generated from protobuf field: string session_id = 3
     */
    sessionId: string;
}
/**
 * @generated MessageType for protobuf message order.CancelOrderRequest
 */
declare const CancelOrderRequest: CancelOrderRequest$Type;
declare class GetOrderRequest$Type extends MessageType<GetOrderRequest> {
    constructor();
    create(value?: PartialMessage<GetOrderRequest>): GetOrderRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOrderRequest): GetOrderRequest;
    internalBinaryWrite(message: GetOrderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message order.GetOrderRequest
 */
interface GetOrderRequest {
    /**
     * @generated from protobuf field: string slug = 1
     */
    slug: string;
    /**
     * @generated from protobuf field: string session_id = 2
     */
    sessionId: string;
}
/**
 * @generated MessageType for protobuf message order.GetOrderRequest
 */
declare const GetOrderRequest: GetOrderRequest$Type;
declare class GetOrderTrackingResponse$Type extends MessageType<GetOrderTrackingResponse> {
    constructor();
    create(value?: PartialMessage<GetOrderTrackingResponse>): GetOrderTrackingResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOrderTrackingResponse): GetOrderTrackingResponse;
    internalBinaryWrite(message: GetOrderTrackingResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message order.GetOrderTrackingResponse
 */
interface GetOrderTrackingResponse {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string tracking_code = 2
     */
    trackingCode: string;
    /**
     * @generated from protobuf field: string carrier = 3
     */
    carrier: string;
    /**
     * @generated from protobuf field: string carrier_url = 4
     */
    carrierUrl: string;
    /**
     * @generated from protobuf field: int64 estimated_from = 5
     */
    estimatedFrom: bigint;
    /**
     * @generated from protobuf field: int64 estimated_to = 6
     */
    estimatedTo: bigint;
    /**
     * @generated from protobuf field: repeated order.TrackingEvent events = 7
     */
    events: TrackingEvent[];
    /**
     * @generated from protobuf field: string message = 8
     */
    message: string;
}
/**
 * @generated MessageType for protobuf message order.GetOrderTrackingResponse
 */
declare const GetOrderTrackingResponse: GetOrderTrackingResponse$Type;
declare class TrackingEvent$Type extends MessageType<TrackingEvent> {
    constructor();
    create(value?: PartialMessage<TrackingEvent>): TrackingEvent;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TrackingEvent): TrackingEvent;
    internalBinaryWrite(message: TrackingEvent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message order.TrackingEvent
 */
interface TrackingEvent {
    /**
     * @generated from protobuf field: int64 event_time = 1
     */
    eventTime: bigint;
    /**
     * @generated from protobuf field: string location = 2
     */
    location: string;
    /**
     * @generated from protobuf field: string description = 3
     */
    description: string;
    /**
     * @generated from protobuf field: string status = 4
     */
    status: string;
    /**
     * @generated from protobuf field: bool is_current = 5
     */
    isCurrent: boolean;
}
/**
 * @generated MessageType for protobuf message order.TrackingEvent
 */
declare const TrackingEvent: TrackingEvent$Type;
declare class OrderDetailResponse$Type extends MessageType<OrderDetailResponse> {
    constructor();
    create(value?: PartialMessage<OrderDetailResponse>): OrderDetailResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OrderDetailResponse): OrderDetailResponse;
    internalBinaryWrite(message: OrderDetailResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message order.OrderDetailResponse
 */
interface OrderDetailResponse {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: order.OrderResponse order = 3
     */
    order?: OrderResponse;
    /**
     * @generated from protobuf field: repeated order.OrderItemResponse items = 4
     */
    items: OrderItemResponse[];
}
/**
 * @generated MessageType for protobuf message order.OrderDetailResponse
 */
declare const OrderDetailResponse: OrderDetailResponse$Type;
declare class OrderItemResponse$Type extends MessageType<OrderItemResponse> {
    constructor();
    create(value?: PartialMessage<OrderItemResponse>): OrderItemResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OrderItemResponse): OrderItemResponse;
    internalBinaryWrite(message: OrderItemResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message order.OrderItemResponse
 */
interface OrderItemResponse {
    /**
     * @generated from protobuf field: string product_name = 1
     */
    productName: string;
    /**
     * @generated from protobuf field: string variant_name = 2
     */
    variantName: string;
    /**
     * @generated from protobuf field: double price = 3
     */
    price: number;
    /**
     * @generated from protobuf field: int32 qty = 4
     */
    qty: number;
    /**
     * @generated from protobuf field: string image_url = 5
     */
    imageUrl: string;
    /**
     * @generated from protobuf field: double sub_total = 6
     */
    subTotal: number;
}
/**
 * @generated MessageType for protobuf message order.OrderItemResponse
 */
declare const OrderItemResponse: OrderItemResponse$Type;
declare class RequestRefundRequest$Type extends MessageType<RequestRefundRequest> {
    constructor();
    create(value?: PartialMessage<RequestRefundRequest>): RequestRefundRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RequestRefundRequest): RequestRefundRequest;
    internalBinaryWrite(message: RequestRefundRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message order.RequestRefundRequest
 */
interface RequestRefundRequest {
    /**
     * @generated from protobuf field: string order_code = 1
     */
    orderCode: string;
    /**
     * @generated from protobuf field: string reason = 2
     */
    reason: string;
    /**
     * @generated from protobuf field: string refund_type = 3
     */
    refundType: string;
    /**
     * @generated from protobuf field: double amount = 4
     */
    amount: number;
    /**
     * @generated from protobuf field: repeated string evidence_urls = 5
     */
    evidenceUrls: string[];
    /**
     * @generated from protobuf field: string session_id = 6
     */
    sessionId: string;
}
/**
 * @generated MessageType for protobuf message order.RequestRefundRequest
 */
declare const RequestRefundRequest: RequestRefundRequest$Type;
declare class SubmitReviewRequest$Type extends MessageType<SubmitReviewRequest> {
    constructor();
    create(value?: PartialMessage<SubmitReviewRequest>): SubmitReviewRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubmitReviewRequest): SubmitReviewRequest;
    internalBinaryWrite(message: SubmitReviewRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message order.SubmitReviewRequest
 */
interface SubmitReviewRequest {
    /**
     * @generated from protobuf field: string order_id = 1
     */
    orderId: string;
    /**
     * @generated from protobuf field: string order_item_id = 2
     */
    orderItemId: string;
    /**
     * @generated from protobuf field: int32 rating = 3
     */
    rating: number;
    /**
     * @generated from protobuf field: string comment = 4
     */
    comment: string;
    /**
     * @generated from protobuf field: repeated string media_urls = 5
     */
    mediaUrls: string[];
    /**
     * @generated from protobuf field: bool is_anonymous = 6
     */
    isAnonymous: boolean;
    /**
     * @generated from protobuf field: string session_id = 7
     */
    sessionId: string;
}
/**
 * @generated MessageType for protobuf message order.SubmitReviewRequest
 */
declare const SubmitReviewRequest: SubmitReviewRequest$Type;
/**
 * @generated ServiceType for protobuf service order.OrderService
 */
declare const OrderService: ServiceType;

/**
 * @generated from protobuf service order.OrderService
 */
interface IOrderServiceClient {
    /**
     * @generated from protobuf rpc: PlaceOrder
     */
    placeOrder(input: PlaceOrderRequest, options?: RpcOptions): UnaryCall<PlaceOrderRequest, OperationResult>;
    /**
     * @generated from protobuf rpc: GetMyOrders
     */
    getMyOrders(input: CommonQuery, options?: RpcOptions): UnaryCall<CommonQuery, GetOrdersResponse>;
    /**
     * @generated from protobuf rpc: GetOrderDetail
     */
    getOrderDetail(input: GetOrderRequest, options?: RpcOptions): UnaryCall<GetOrderRequest, OrderDetailResponse>;
    /**
     * @generated from protobuf rpc: CancelOrder
     */
    cancelOrder(input: CancelOrderRequest, options?: RpcOptions): UnaryCall<CancelOrderRequest, OperationResult>;
    /**
     * @generated from protobuf rpc: GetOrderTracking
     */
    getOrderTracking(input: GetOrderRequest, options?: RpcOptions): UnaryCall<GetOrderRequest, GetOrderTrackingResponse>;
    /**
     * @generated from protobuf rpc: RequestRefund
     */
    requestRefund(input: RequestRefundRequest, options?: RpcOptions): UnaryCall<RequestRefundRequest, OperationResult>;
    /**
     * @generated from protobuf rpc: SubmitReview
     */
    submitReview(input: SubmitReviewRequest, options?: RpcOptions): UnaryCall<SubmitReviewRequest, OperationResult>;
}
/**
 * @generated from protobuf service order.OrderService
 */
declare class OrderServiceClient implements IOrderServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: _protobuf_ts_runtime_rpc.MethodInfo<any, any>[];
    options: {
        [extensionName: string]: _protobuf_ts_runtime.JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: PlaceOrder
     */
    placeOrder(input: PlaceOrderRequest, options?: RpcOptions): UnaryCall<PlaceOrderRequest, OperationResult>;
    /**
     * @generated from protobuf rpc: GetMyOrders
     */
    getMyOrders(input: CommonQuery, options?: RpcOptions): UnaryCall<CommonQuery, GetOrdersResponse>;
    /**
     * @generated from protobuf rpc: GetOrderDetail
     */
    getOrderDetail(input: GetOrderRequest, options?: RpcOptions): UnaryCall<GetOrderRequest, OrderDetailResponse>;
    /**
     * @generated from protobuf rpc: CancelOrder
     */
    cancelOrder(input: CancelOrderRequest, options?: RpcOptions): UnaryCall<CancelOrderRequest, OperationResult>;
    /**
     * @generated from protobuf rpc: GetOrderTracking
     */
    getOrderTracking(input: GetOrderRequest, options?: RpcOptions): UnaryCall<GetOrderRequest, GetOrderTrackingResponse>;
    /**
     * @generated from protobuf rpc: RequestRefund
     */
    requestRefund(input: RequestRefundRequest, options?: RpcOptions): UnaryCall<RequestRefundRequest, OperationResult>;
    /**
     * @generated from protobuf rpc: SubmitReview
     */
    submitReview(input: SubmitReviewRequest, options?: RpcOptions): UnaryCall<SubmitReviewRequest, OperationResult>;
}

declare class GetPageViewRequest$Type extends MessageType<GetPageViewRequest> {
    constructor();
    create(value?: PartialMessage<GetPageViewRequest>): GetPageViewRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPageViewRequest): GetPageViewRequest;
    internalBinaryWrite(message: GetPageViewRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message page_view.GetPageViewRequest
 */
interface GetPageViewRequest {
    /**
     * @generated from protobuf field: string ref = 1
     */
    ref: string;
}
/**
 * @generated MessageType for protobuf message page_view.GetPageViewRequest
 */
declare const GetPageViewRequest: GetPageViewRequest$Type;
declare class PageViewResponse$Type extends MessageType<PageViewResponse> {
    constructor();
    create(value?: PartialMessage<PageViewResponse>): PageViewResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PageViewResponse): PageViewResponse;
    internalBinaryWrite(message: PageViewResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message page_view.PageViewResponse
 */
interface PageViewResponse {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: page_view.PageViewData data = 3
     */
    data?: PageViewData;
}
/**
 * @generated MessageType for protobuf message page_view.PageViewResponse
 */
declare const PageViewResponse: PageViewResponse$Type;
declare class PageViewData$Type extends MessageType<PageViewData> {
    constructor();
    create(value?: PartialMessage<PageViewData>): PageViewData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PageViewData): PageViewData;
    internalBinaryWrite(message: PageViewData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message page_view.PageViewData
 */
interface PageViewData {
    /**
     * @generated from protobuf field: string id = 1
     */
    id: string;
    /**
     * @generated from protobuf field: repeated string ref_id = 2
     */
    refId: string[];
    /**
     * @generated from protobuf field: repeated string ref_slug = 3
     */
    refSlug: string[];
    /**
     * @generated from protobuf field: string config = 4
     */
    config: string;
}
/**
 * @generated MessageType for protobuf message page_view.PageViewData
 */
declare const PageViewData: PageViewData$Type;
/**
 * @generated ServiceType for protobuf service page_view.PageViewService
 */
declare const PageViewService: ServiceType;

/**
 * @generated from protobuf service page_view.PageViewService
 */
interface IPageViewServiceClient {
    /**
     * @generated from protobuf rpc: GetPageView
     */
    getPageView(input: GetPageViewRequest, options?: RpcOptions): UnaryCall<GetPageViewRequest, PageViewResponse>;
}
/**
 * @generated from protobuf service page_view.PageViewService
 */
declare class PageViewServiceClient implements IPageViewServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: _protobuf_ts_runtime_rpc.MethodInfo<any, any>[];
    options: {
        [extensionName: string]: _protobuf_ts_runtime.JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: GetPageView
     */
    getPageView(input: GetPageViewRequest, options?: RpcOptions): UnaryCall<GetPageViewRequest, PageViewResponse>;
}

declare class ProductResponseWrapped$Type extends MessageType<ProductResponseWrapped> {
    constructor();
    create(value?: PartialMessage<ProductResponseWrapped>): ProductResponseWrapped;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProductResponseWrapped): ProductResponseWrapped;
    internalBinaryWrite(message: ProductResponseWrapped, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message product.ProductResponseWrapped
 */
interface ProductResponseWrapped {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: product.ProductResponse data = 3
     */
    data?: ProductResponse;
}
/**
 * @generated MessageType for protobuf message product.ProductResponseWrapped
 */
declare const ProductResponseWrapped: ProductResponseWrapped$Type;
declare class ProductDataSourceResponse$Type extends MessageType<ProductDataSourceResponse> {
    constructor();
    create(value?: PartialMessage<ProductDataSourceResponse>): ProductDataSourceResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProductDataSourceResponse): ProductDataSourceResponse;
    internalBinaryWrite(message: ProductDataSourceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message product.ProductDataSourceResponse
 */
interface ProductDataSourceResponse {
    /**
     * @generated from protobuf field: common.CommonDataSourceMeta meta = 1
     */
    meta?: CommonDataSourceMeta;
    /**
     * @generated from protobuf field: repeated product.ProductResponse data = 2
     */
    data: ProductResponse[];
}
/**
 * @generated MessageType for protobuf message product.ProductDataSourceResponse
 */
declare const ProductDataSourceResponse: ProductDataSourceResponse$Type;
declare class ProductGroupResponseWrapped$Type extends MessageType<ProductGroupResponseWrapped> {
    constructor();
    create(value?: PartialMessage<ProductGroupResponseWrapped>): ProductGroupResponseWrapped;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProductGroupResponseWrapped): ProductGroupResponseWrapped;
    internalBinaryWrite(message: ProductGroupResponseWrapped, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message product.ProductGroupResponseWrapped
 */
interface ProductGroupResponseWrapped {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: product.ProductGroupResponse data = 3
     */
    data?: ProductGroupResponse;
}
/**
 * @generated MessageType for protobuf message product.ProductGroupResponseWrapped
 */
declare const ProductGroupResponseWrapped: ProductGroupResponseWrapped$Type;
declare class ProductGroupDataSourceResponse$Type extends MessageType<ProductGroupDataSourceResponse> {
    constructor();
    create(value?: PartialMessage<ProductGroupDataSourceResponse>): ProductGroupDataSourceResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProductGroupDataSourceResponse): ProductGroupDataSourceResponse;
    internalBinaryWrite(message: ProductGroupDataSourceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message product.ProductGroupDataSourceResponse
 */
interface ProductGroupDataSourceResponse {
    /**
     * @generated from protobuf field: common.CommonDataSourceMeta meta = 1
     */
    meta?: CommonDataSourceMeta;
    /**
     * @generated from protobuf field: repeated product.ProductGroupResponse data = 2
     */
    data: ProductGroupResponse[];
}
/**
 * @generated MessageType for protobuf message product.ProductGroupDataSourceResponse
 */
declare const ProductGroupDataSourceResponse: ProductGroupDataSourceResponse$Type;
declare class ProductVariantResponse$Type extends MessageType<ProductVariantResponse> {
    constructor();
    create(value?: PartialMessage<ProductVariantResponse>): ProductVariantResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProductVariantResponse): ProductVariantResponse;
    internalBinaryWrite(message: ProductVariantResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message product.ProductVariantResponse
 */
interface ProductVariantResponse {
    /**
     * @generated from protobuf field: string id = 1
     */
    id: string;
    /**
     * @generated from protobuf field: string sku = 2
     */
    sku: string;
    /**
     * @generated from protobuf field: string barcode = 3
     */
    barcode: string;
    /**
     * @generated from protobuf field: double price = 4
     */
    price: number;
    /**
     * @generated from protobuf field: double compare_price = 5
     */
    comparePrice: number;
    /**
     * @generated from protobuf field: int32 stock = 6
     */
    stock: number;
    /**
     * @generated from protobuf field: string attributes_name1 = 7
     */
    attributesName1: string;
    /**
     * @generated from protobuf field: string attributes_value1 = 8
     */
    attributesValue1: string;
    /**
     * @generated from protobuf field: string attributes_name2 = 9
     */
    attributesName2: string;
    /**
     * @generated from protobuf field: string attributes_value2 = 10
     */
    attributesValue2: string;
    /**
     * @generated from protobuf field: string attributes_name3 = 11
     */
    attributesName3: string;
    /**
     * @generated from protobuf field: string attributes_value3 = 12
     */
    attributesValue3: string;
    /**
     * @generated from protobuf field: string image = 13
     */
    image: string;
    /**
     * @generated from protobuf field: string product_sku = 14
     */
    productSku: string;
    /**
     * @generated from protobuf field: string product_id = 15
     */
    productId: string;
    /**
     * @generated from protobuf field: string variant_name = 16
     */
    variantName: string;
}
/**
 * @generated MessageType for protobuf message product.ProductVariantResponse
 */
declare const ProductVariantResponse: ProductVariantResponse$Type;
declare class ProductVariantConfigResponse$Type extends MessageType<ProductVariantConfigResponse> {
    constructor();
    create(value?: PartialMessage<ProductVariantConfigResponse>): ProductVariantConfigResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProductVariantConfigResponse): ProductVariantConfigResponse;
    internalBinaryWrite(message: ProductVariantConfigResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message product.ProductVariantConfigResponse
 */
interface ProductVariantConfigResponse {
    /**
     * @generated from protobuf field: string name = 1
     */
    name: string;
    /**
     * @generated from protobuf field: repeated string values = 2
     */
    values: string[];
}
/**
 * @generated MessageType for protobuf message product.ProductVariantConfigResponse
 */
declare const ProductVariantConfigResponse: ProductVariantConfigResponse$Type;
declare class ProductResponse$Type extends MessageType<ProductResponse> {
    constructor();
    create(value?: PartialMessage<ProductResponse>): ProductResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProductResponse): ProductResponse;
    private binaryReadMap31;
    internalBinaryWrite(message: ProductResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message product.ProductResponse
 */
interface ProductResponse {
    /**
     * @generated from protobuf field: string id = 1
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2
     */
    name: string;
    /**
     * @generated from protobuf field: string description = 3
     */
    description: string;
    /**
     * @generated from protobuf field: double price = 4
     */
    price: number;
    /**
     * @generated from protobuf field: int32 stock = 5
     */
    stock: number;
    /**
     * @generated from protobuf field: string category_id = 6
     */
    categoryId: string;
    /**
     * @generated from protobuf field: string category_name = 7
     */
    categoryName: string;
    /**
     * @generated from protobuf field: bool is_active = 8
     */
    isActive: boolean;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 9
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 10
     */
    updatedAt?: Timestamp;
    /**
     * @generated from protobuf field: string img_url = 11
     */
    imgUrl: string;
    /**
     * @generated from protobuf field: string slug = 12
     */
    slug: string;
    /**
     * @generated from protobuf field: repeated string image_urls = 13
     */
    imageUrls: string[];
    /**
     * @generated from protobuf field: string sku = 14
     */
    sku: string;
    /**
     * @generated from protobuf field: string barcode = 15
     */
    barcode: string;
    /**
     * @generated from protobuf field: string classify = 16
     */
    classify: string;
    /**
     * @generated from protobuf field: double compare_price = 17
     */
    comparePrice: number;
    /**
     * @generated from protobuf field: double weight = 18
     */
    weight: number;
    /**
     * @generated from protobuf field: bool tax_included = 19
     */
    taxIncluded: boolean;
    /**
     * @generated from protobuf field: bool track_inventory = 20
     */
    trackInventory: boolean;
    /**
     * @generated from protobuf field: string brand = 21
     */
    brand: string;
    /**
     * @generated from protobuf field: string product_spec = 22
     */
    productSpec: string;
    /**
     * @generated from protobuf field: repeated product.ProductVariantResponse variants = 26
     */
    variants: ProductVariantResponse[];
    /**
     * @generated from protobuf field: repeated product.ProductVariantConfigResponse variant_config = 27
     */
    variantConfig: ProductVariantConfigResponse[];
    /**
     * @generated from protobuf field: string org_id = 28
     */
    orgId: string;
    /**
     * @generated from protobuf field: string created_by = 29
     */
    createdBy: string;
    /**
     * @generated from protobuf field: string updated_by = 30
     */
    updatedBy: string;
    /**
     * @generated from protobuf field: map<string, string> extend_object = 31
     */
    extendObject: {
        [key: string]: string;
    };
}
/**
 * @generated MessageType for protobuf message product.ProductResponse
 */
declare const ProductResponse: ProductResponse$Type;
declare class ProductGroupResponse$Type extends MessageType<ProductGroupResponse> {
    constructor();
    create(value?: PartialMessage<ProductGroupResponse>): ProductGroupResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProductGroupResponse): ProductGroupResponse;
    private binaryReadMap16;
    internalBinaryWrite(message: ProductGroupResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message product.ProductGroupResponse
 */
interface ProductGroupResponse {
    /**
     * @generated from protobuf field: string id = 1
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2
     */
    name: string;
    /**
     * @generated from protobuf field: string slug = 3
     */
    slug: string;
    /**
     * @generated from protobuf field: string description = 4
     */
    description: string;
    /**
     * @generated from protobuf field: string image = 5
     */
    image: string;
    /**
     * @generated from protobuf field: string group_by = 6
     */
    groupBy: string;
    /**
     * @generated from protobuf field: string operator = 7
     */
    operator: string;
    /**
     * @generated from protobuf field: string status = 8
     */
    status: string;
    /**
     * @generated from protobuf field: repeated string product_ids = 9
     */
    productIds: string[];
    /**
     * @generated from protobuf field: repeated product.ProductResponse products = 10
     */
    products: ProductResponse[];
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 11
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 12
     */
    updatedAt?: Timestamp;
    /**
     * @generated from protobuf field: string org_id = 13
     */
    orgId: string;
    /**
     * @generated from protobuf field: string created_by = 14
     */
    createdBy: string;
    /**
     * @generated from protobuf field: string updated_by = 15
     */
    updatedBy: string;
    /**
     * @generated from protobuf field: map<string, string> extend_object = 16
     */
    extendObject: {
        [key: string]: string;
    };
}
/**
 * @generated MessageType for protobuf message product.ProductGroupResponse
 */
declare const ProductGroupResponse: ProductGroupResponse$Type;
/**
 * @generated ServiceType for protobuf service product.ProductService
 */
declare const ProductService: ServiceType;

/**
 * @generated from protobuf service product.ProductService
 */
interface IProductServiceClient {
    /**
     * @generated from protobuf rpc: GetProductsByQuery
     */
    getProductsByQuery(input: CommonQuery, options?: RpcOptions): UnaryCall<CommonQuery, ProductDataSourceResponse>;
    /**
     * @generated from protobuf rpc: GetProductDetail
     */
    getProductDetail(input: GetBySlugRequest, options?: RpcOptions): UnaryCall<GetBySlugRequest, ProductResponseWrapped>;
    /**
     * @generated from protobuf rpc: GetProductsByProductGroupSlug
     */
    getProductsByProductGroupSlug(input: GetBySlugPagedRequest, options?: RpcOptions): UnaryCall<GetBySlugPagedRequest, ProductDataSourceResponse>;
    /**
     * @generated from protobuf rpc: GetProductGroupsBySlug
     */
    getProductGroupsBySlug(input: GetBySlugRequest, options?: RpcOptions): UnaryCall<GetBySlugRequest, ProductGroupResponseWrapped>;
    /**
     * @generated from protobuf rpc: GetProductGroupsByQuery
     */
    getProductGroupsByQuery(input: CommonQuery, options?: RpcOptions): UnaryCall<CommonQuery, ProductGroupDataSourceResponse>;
}
/**
 * @generated from protobuf service product.ProductService
 */
declare class ProductServiceClient implements IProductServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: _protobuf_ts_runtime_rpc.MethodInfo<any, any>[];
    options: {
        [extensionName: string]: _protobuf_ts_runtime.JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: GetProductsByQuery
     */
    getProductsByQuery(input: CommonQuery, options?: RpcOptions): UnaryCall<CommonQuery, ProductDataSourceResponse>;
    /**
     * @generated from protobuf rpc: GetProductDetail
     */
    getProductDetail(input: GetBySlugRequest, options?: RpcOptions): UnaryCall<GetBySlugRequest, ProductResponseWrapped>;
    /**
     * @generated from protobuf rpc: GetProductsByProductGroupSlug
     */
    getProductsByProductGroupSlug(input: GetBySlugPagedRequest, options?: RpcOptions): UnaryCall<GetBySlugPagedRequest, ProductDataSourceResponse>;
    /**
     * @generated from protobuf rpc: GetProductGroupsBySlug
     */
    getProductGroupsBySlug(input: GetBySlugRequest, options?: RpcOptions): UnaryCall<GetBySlugRequest, ProductGroupResponseWrapped>;
    /**
     * @generated from protobuf rpc: GetProductGroupsByQuery
     */
    getProductGroupsByQuery(input: CommonQuery, options?: RpcOptions): UnaryCall<CommonQuery, ProductGroupDataSourceResponse>;
}

declare class GetMetaByUrlRequest$Type extends MessageType<GetMetaByUrlRequest> {
    constructor();
    create(value?: PartialMessage<GetMetaByUrlRequest>): GetMetaByUrlRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMetaByUrlRequest): GetMetaByUrlRequest;
    internalBinaryWrite(message: GetMetaByUrlRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message seo.GetMetaByUrlRequest
 */
interface GetMetaByUrlRequest {
    /**
     * @generated from protobuf field: string url = 1
     */
    url: string;
}
/**
 * @generated MessageType for protobuf message seo.GetMetaByUrlRequest
 */
declare const GetMetaByUrlRequest: GetMetaByUrlRequest$Type;
declare class GetSitemapDataRequest$Type extends MessageType<GetSitemapDataRequest> {
    constructor();
    create(value?: PartialMessage<GetSitemapDataRequest>): GetSitemapDataRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSitemapDataRequest): GetSitemapDataRequest;
    internalBinaryWrite(message: GetSitemapDataRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message seo.GetSitemapDataRequest
 */
interface GetSitemapDataRequest {
    /**
     * @generated from protobuf field: string url = 1
     */
    url: string;
}
/**
 * @generated MessageType for protobuf message seo.GetSitemapDataRequest
 */
declare const GetSitemapDataRequest: GetSitemapDataRequest$Type;
declare class SeoGlobalConfigResponse$Type extends MessageType<SeoGlobalConfigResponse> {
    constructor();
    create(value?: PartialMessage<SeoGlobalConfigResponse>): SeoGlobalConfigResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SeoGlobalConfigResponse): SeoGlobalConfigResponse;
    internalBinaryWrite(message: SeoGlobalConfigResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message seo.SeoGlobalConfigResponse
 */
interface SeoGlobalConfigResponse {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: seo.SeoGlobalConfigData data = 3
     */
    data?: SeoGlobalConfigData;
}
/**
 * @generated MessageType for protobuf message seo.SeoGlobalConfigResponse
 */
declare const SeoGlobalConfigResponse: SeoGlobalConfigResponse$Type;
declare class SeoPageConfigResponse$Type extends MessageType<SeoPageConfigResponse> {
    constructor();
    create(value?: PartialMessage<SeoPageConfigResponse>): SeoPageConfigResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SeoPageConfigResponse): SeoPageConfigResponse;
    internalBinaryWrite(message: SeoPageConfigResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message seo.SeoPageConfigResponse
 */
interface SeoPageConfigResponse {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: seo.SeoPageConfigData data = 3
     */
    data?: SeoPageConfigData;
}
/**
 * @generated MessageType for protobuf message seo.SeoPageConfigResponse
 */
declare const SeoPageConfigResponse: SeoPageConfigResponse$Type;
declare class SitemapDataResponse$Type extends MessageType<SitemapDataResponse> {
    constructor();
    create(value?: PartialMessage<SitemapDataResponse>): SitemapDataResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SitemapDataResponse): SitemapDataResponse;
    internalBinaryWrite(message: SitemapDataResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message seo.SitemapDataResponse
 */
interface SitemapDataResponse {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: string xml_content = 3
     */
    xmlContent: string;
}
/**
 * @generated MessageType for protobuf message seo.SitemapDataResponse
 */
declare const SitemapDataResponse: SitemapDataResponse$Type;
declare class SeoGlobalConfigData$Type extends MessageType<SeoGlobalConfigData> {
    constructor();
    create(value?: PartialMessage<SeoGlobalConfigData>): SeoGlobalConfigData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SeoGlobalConfigData): SeoGlobalConfigData;
    private binaryReadMap7;
    internalBinaryWrite(message: SeoGlobalConfigData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * Data Structures matching DTOs
 *
 * @generated from protobuf message seo.SeoGlobalConfigData
 */
interface SeoGlobalConfigData {
    /**
     * @generated from protobuf field: string default_title = 1
     */
    defaultTitle: string;
    /**
     * @generated from protobuf field: string title_template = 2
     */
    titleTemplate: string;
    /**
     * @generated from protobuf field: string default_description = 3
     */
    defaultDescription: string;
    /**
     * @generated from protobuf field: string default_image = 4
     */
    defaultImage: string;
    /**
     * @generated from protobuf field: string robots_txt_content = 5
     */
    robotsTxtContent: string;
    /**
     * @generated from protobuf field: string google_site_verification_id = 6
     */
    googleSiteVerificationId: string;
    /**
     * @generated from protobuf field: map<string, string> social_links = 7
     */
    socialLinks: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: seo.SeoScriptsData scripts = 8
     */
    scripts?: SeoScriptsData;
    /**
     * @generated from protobuf field: string schema_markup = 9
     */
    schemaMarkup: string;
    /**
     * @generated from protobuf field: string locale = 10
     */
    locale: string;
    /**
     * @generated from protobuf field: string site_name = 11
     */
    siteName: string;
    /**
     * @generated from protobuf field: string domain = 12
     */
    domain: string;
    /**
     * @generated from protobuf field: string org_id = 13
     */
    orgId: string;
    /**
     * @generated from protobuf field: string description = 14
     */
    description: string;
    /**
     * @generated from protobuf field: seo.SeoAddressData address = 15
     */
    address?: SeoAddressData;
    /**
     * @generated from protobuf field: string founder = 16
     */
    founder: string;
    /**
     * @generated from protobuf field: string number_of_employees = 17
     */
    numberOfEmployees: string;
    /**
     * @generated from protobuf field: string brand_name = 18
     */
    brandName: string;
    /**
     * @generated from protobuf field: string geo_latitude = 19
     */
    geoLatitude: string;
    /**
     * @generated from protobuf field: string geo_longitude = 20
     */
    geoLongitude: string;
    /**
     * @generated from protobuf field: string google_maps_url = 21
     */
    googleMapsUrl: string;
    /**
     * @generated from protobuf field: repeated seo.SeoContactPointData contact_points = 22
     */
    contactPoints: SeoContactPointData[];
    /**
     * @generated from protobuf field: seo.SeoLogoData logo = 23
     */
    logo?: SeoLogoData;
    /**
     * @generated from protobuf field: seo.SeoOpenGraphData open_graph = 24
     */
    openGraph?: SeoOpenGraphData;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 25
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 26
     */
    updatedAt?: Timestamp;
    /**
     * @generated from protobuf field: string created_by = 27
     */
    createdBy: string;
    /**
     * @generated from protobuf field: string updated_by = 28
     */
    updatedBy: string;
    /**
     * @generated from protobuf field: string theme = 29
     */
    theme: string;
    /**
     * @generated from protobuf field: string layout = 30
     */
    layout: string;
}
/**
 * @generated MessageType for protobuf message seo.SeoGlobalConfigData
 */
declare const SeoGlobalConfigData: SeoGlobalConfigData$Type;
declare class SeoScriptsData$Type extends MessageType<SeoScriptsData> {
    constructor();
    create(value?: PartialMessage<SeoScriptsData>): SeoScriptsData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SeoScriptsData): SeoScriptsData;
    internalBinaryWrite(message: SeoScriptsData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message seo.SeoScriptsData
 */
interface SeoScriptsData {
    /**
     * @generated from protobuf field: string header = 1
     */
    header: string;
    /**
     * @generated from protobuf field: string body_start = 2
     */
    bodyStart: string;
    /**
     * @generated from protobuf field: string body_end = 3
     */
    bodyEnd: string;
}
/**
 * @generated MessageType for protobuf message seo.SeoScriptsData
 */
declare const SeoScriptsData: SeoScriptsData$Type;
declare class SeoPageConfigData$Type extends MessageType<SeoPageConfigData> {
    constructor();
    create(value?: PartialMessage<SeoPageConfigData>): SeoPageConfigData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SeoPageConfigData): SeoPageConfigData;
    internalBinaryWrite(message: SeoPageConfigData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message seo.SeoPageConfigData
 */
interface SeoPageConfigData {
    /**
     * @generated from protobuf field: string route = 1
     */
    route: string;
    /**
     * @generated from protobuf field: string title = 2
     */
    title: string;
    /**
     * @generated from protobuf field: string description = 3
     */
    description: string;
    /**
     * @generated from protobuf field: string canonical_url = 4
     */
    canonicalUrl: string;
    /**
     * @generated from protobuf field: string schema_markup = 5
     */
    schemaMarkup: string;
    /**
     * @generated from protobuf field: bool is_amp_enabled = 6
     */
    isAmpEnabled: boolean;
    /**
     * @generated from protobuf field: seo.SeoRobotsMetaData robots = 7
     */
    robots?: SeoRobotsMetaData;
    /**
     * @generated from protobuf field: seo.SeoOpenGraphData open_graph = 8
     */
    openGraph?: SeoOpenGraphData;
    /**
     * @generated from protobuf field: seo.SeoSitemapConfigData sitemap = 9
     */
    sitemap?: SeoSitemapConfigData;
    /**
     * @generated from protobuf field: string entity_type = 10
     */
    entityType: string;
    /**
     * @generated from protobuf field: string entity_id = 11
     */
    entityId: string;
    /**
     * @generated from protobuf field: string org_id = 12
     */
    orgId: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 13
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 14
     */
    updatedAt?: Timestamp;
    /**
     * @generated from protobuf field: string created_by = 15
     */
    createdBy: string;
    /**
     * @generated from protobuf field: string updated_by = 16
     */
    updatedBy: string;
    /**
     * @generated from protobuf field: repeated string keyword_list = 17
     */
    keywordList: string[];
}
/**
 * @generated MessageType for protobuf message seo.SeoPageConfigData
 */
declare const SeoPageConfigData: SeoPageConfigData$Type;
declare class SeoRobotsMetaData$Type extends MessageType<SeoRobotsMetaData> {
    constructor();
    create(value?: PartialMessage<SeoRobotsMetaData>): SeoRobotsMetaData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SeoRobotsMetaData): SeoRobotsMetaData;
    internalBinaryWrite(message: SeoRobotsMetaData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message seo.SeoRobotsMetaData
 */
interface SeoRobotsMetaData {
    /**
     * @generated from protobuf field: bool index = 1
     */
    index: boolean;
    /**
     * @generated from protobuf field: bool follow = 2
     */
    follow: boolean;
    /**
     * @generated from protobuf field: int32 max_snippet = 3
     */
    maxSnippet: number;
    /**
     * @generated from protobuf field: string max_image_preview = 4
     */
    maxImagePreview: string;
    /**
     * @generated from protobuf field: int32 max_video_preview = 5
     */
    maxVideoPreview: number;
}
/**
 * @generated MessageType for protobuf message seo.SeoRobotsMetaData
 */
declare const SeoRobotsMetaData: SeoRobotsMetaData$Type;
declare class SeoOpenGraphData$Type extends MessageType<SeoOpenGraphData> {
    constructor();
    create(value?: PartialMessage<SeoOpenGraphData>): SeoOpenGraphData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SeoOpenGraphData): SeoOpenGraphData;
    internalBinaryWrite(message: SeoOpenGraphData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message seo.SeoOpenGraphData
 */
interface SeoOpenGraphData {
    /**
     * @generated from protobuf field: string title = 1
     */
    title: string;
    /**
     * @generated from protobuf field: string description = 2
     */
    description: string;
    /**
     * @generated from protobuf field: string image = 3
     */
    image: string;
    /**
     * @generated from protobuf field: string type = 4
     */
    type: string;
    /**
     * @generated from protobuf field: string locale = 5
     */
    locale: string;
    /**
     * @generated from protobuf field: string site_name = 6
     */
    siteName: string;
    /**
     * @generated from protobuf field: string url = 7
     */
    url: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_time = 8
     */
    updatedTime?: Timestamp;
}
/**
 * @generated MessageType for protobuf message seo.SeoOpenGraphData
 */
declare const SeoOpenGraphData: SeoOpenGraphData$Type;
declare class SeoSitemapConfigData$Type extends MessageType<SeoSitemapConfigData> {
    constructor();
    create(value?: PartialMessage<SeoSitemapConfigData>): SeoSitemapConfigData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SeoSitemapConfigData): SeoSitemapConfigData;
    internalBinaryWrite(message: SeoSitemapConfigData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message seo.SeoSitemapConfigData
 */
interface SeoSitemapConfigData {
    /**
     * @generated from protobuf field: bool include = 1
     */
    include: boolean;
    /**
     * @generated from protobuf field: string change_freq = 3
     */
    changeFreq: string;
}
/**
 * @generated MessageType for protobuf message seo.SeoSitemapConfigData
 */
declare const SeoSitemapConfigData: SeoSitemapConfigData$Type;
declare class SeoAddressData$Type extends MessageType<SeoAddressData> {
    constructor();
    create(value?: PartialMessage<SeoAddressData>): SeoAddressData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SeoAddressData): SeoAddressData;
    internalBinaryWrite(message: SeoAddressData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message seo.SeoAddressData
 */
interface SeoAddressData {
    /**
     * @generated from protobuf field: string street_address = 1
     */
    streetAddress: string;
    /**
     * @generated from protobuf field: string address_region = 2
     */
    addressRegion: string;
    /**
     * @generated from protobuf field: string postal_code = 3
     */
    postalCode: string;
    /**
     * @generated from protobuf field: string address_country = 4
     */
    addressCountry: string;
}
/**
 * @generated MessageType for protobuf message seo.SeoAddressData
 */
declare const SeoAddressData: SeoAddressData$Type;
declare class SeoContactPointData$Type extends MessageType<SeoContactPointData> {
    constructor();
    create(value?: PartialMessage<SeoContactPointData>): SeoContactPointData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SeoContactPointData): SeoContactPointData;
    internalBinaryWrite(message: SeoContactPointData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message seo.SeoContactPointData
 */
interface SeoContactPointData {
    /**
     * @generated from protobuf field: string telephone = 1
     */
    telephone: string;
    /**
     * @generated from protobuf field: string contact_type = 2
     */
    contactType: string;
    /**
     * @generated from protobuf field: string email = 3
     */
    email: string;
    /**
     * @generated from protobuf field: string area_served = 4
     */
    areaServed: string;
}
/**
 * @generated MessageType for protobuf message seo.SeoContactPointData
 */
declare const SeoContactPointData: SeoContactPointData$Type;
declare class SeoLogoData$Type extends MessageType<SeoLogoData> {
    constructor();
    create(value?: PartialMessage<SeoLogoData>): SeoLogoData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SeoLogoData): SeoLogoData;
    internalBinaryWrite(message: SeoLogoData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message seo.SeoLogoData
 */
interface SeoLogoData {
    /**
     * @generated from protobuf field: string url = 1
     */
    url: string;
    /**
     * @generated from protobuf field: string caption = 2
     */
    caption: string;
    /**
     * @generated from protobuf field: string width = 3
     */
    width: string;
    /**
     * @generated from protobuf field: string height = 4
     */
    height: string;
}
/**
 * @generated MessageType for protobuf message seo.SeoLogoData
 */
declare const SeoLogoData: SeoLogoData$Type;
/**
 * @generated ServiceType for protobuf service seo.SeoService
 */
declare const SeoService: ServiceType;

/**
 * @generated from protobuf service seo.SeoService
 */
interface ISeoServiceClient {
    /**
     * Global Config
     *
     * @generated from protobuf rpc: GetGlobalConfig
     */
    getGlobalConfig(input: Empty, options?: RpcOptions): UnaryCall<Empty, SeoGlobalConfigResponse>;
    /**
     * Page Config (merged)
     *
     * @generated from protobuf rpc: GetMetaByUrl
     */
    getMetaByUrl(input: GetMetaByUrlRequest, options?: RpcOptions): UnaryCall<GetMetaByUrlRequest, SeoPageConfigResponse>;
    /**
     * Sitemap Data
     *
     * @generated from protobuf rpc: GetSitemapData
     */
    getSitemapData(input: GetSitemapDataRequest, options?: RpcOptions): UnaryCall<GetSitemapDataRequest, SitemapDataResponse>;
}
/**
 * @generated from protobuf service seo.SeoService
 */
declare class SeoServiceClient implements ISeoServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: _protobuf_ts_runtime_rpc.MethodInfo<any, any>[];
    options: {
        [extensionName: string]: _protobuf_ts_runtime.JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Global Config
     *
     * @generated from protobuf rpc: GetGlobalConfig
     */
    getGlobalConfig(input: Empty, options?: RpcOptions): UnaryCall<Empty, SeoGlobalConfigResponse>;
    /**
     * Page Config (merged)
     *
     * @generated from protobuf rpc: GetMetaByUrl
     */
    getMetaByUrl(input: GetMetaByUrlRequest, options?: RpcOptions): UnaryCall<GetMetaByUrlRequest, SeoPageConfigResponse>;
    /**
     * Sitemap Data
     *
     * @generated from protobuf rpc: GetSitemapData
     */
    getSitemapData(input: GetSitemapDataRequest, options?: RpcOptions): UnaryCall<GetSitemapDataRequest, SitemapDataResponse>;
}

declare class UserEventRequest$Type extends MessageType<UserEventRequest> {
    constructor();
    create(value?: PartialMessage<UserEventRequest>): UserEventRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserEventRequest): UserEventRequest;
    internalBinaryWrite(message: UserEventRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message tracking.UserEventRequest
 */
interface UserEventRequest {
    /**
     * @generated from protobuf field: string url = 1
     */
    url: string;
    /**
     * @generated from protobuf field: string action = 2
     */
    action: string;
    /**
     * @generated from protobuf field: string element_id = 3
     */
    elementId: string;
    /**
     * @generated from protobuf field: string session_id = 4
     */
    sessionId: string;
    /**
     * @generated from protobuf field: string user_agent = 5
     */
    userAgent: string;
    /**
     * @generated from protobuf field: string ip_address = 6
     */
    ipAddress: string;
    /**
     * @generated from protobuf field: string referrer = 7
     */
    referrer: string;
    /**
     * @generated from protobuf field: string metadata_json = 8
     */
    metadataJson: string;
}
/**
 * @generated MessageType for protobuf message tracking.UserEventRequest
 */
declare const UserEventRequest: UserEventRequest$Type;
/**
 * @generated ServiceType for protobuf service tracking.TrackingService
 */
declare const TrackingService: ServiceType;

/**
 * @generated from protobuf service tracking.TrackingService
 */
interface ITrackingServiceClient {
    /**
     * @generated from protobuf rpc: IngestEvent
     */
    ingestEvent(input: UserEventRequest, options?: RpcOptions): UnaryCall<UserEventRequest, OperationResult>;
}
/**
 * @generated from protobuf service tracking.TrackingService
 */
declare class TrackingServiceClient implements ITrackingServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: _protobuf_ts_runtime_rpc.MethodInfo<any, any>[];
    options: {
        [extensionName: string]: _protobuf_ts_runtime.JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: IngestEvent
     */
    ingestEvent(input: UserEventRequest, options?: RpcOptions): UnaryCall<UserEventRequest, OperationResult>;
}

declare class SubmitRequest$Type extends MessageType<SubmitRequest> {
    constructor();
    create(value?: PartialMessage<SubmitRequest>): SubmitRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubmitRequest): SubmitRequest;
    internalBinaryWrite(message: SubmitRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message user_submit.SubmitRequest
 */
interface SubmitRequest {
    /**
     * @generated from protobuf field: string full_name = 1
     */
    fullName: string;
    /**
     * @generated from protobuf field: string phone_number = 2
     */
    phoneNumber: string;
    /**
     * @generated from protobuf field: string email = 3
     */
    email: string;
    /**
     * @generated from protobuf field: string topic = 4
     */
    topic: string;
    /**
     * @generated from protobuf field: string content = 5
     */
    content: string;
}
/**
 * @generated MessageType for protobuf message user_submit.SubmitRequest
 */
declare const SubmitRequest: SubmitRequest$Type;
declare class SubmitResponse$Type extends MessageType<SubmitResponse> {
    constructor();
    create(value?: PartialMessage<SubmitResponse>): SubmitResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubmitResponse): SubmitResponse;
    internalBinaryWrite(message: SubmitResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message user_submit.SubmitResponse
 */
interface SubmitResponse {
    /**
     * @generated from protobuf field: bool success = 1
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 2
     */
    message: string;
    /**
     * @generated from protobuf field: string id = 3
     */
    id: string;
}
/**
 * @generated MessageType for protobuf message user_submit.SubmitResponse
 */
declare const SubmitResponse: SubmitResponse$Type;
/**
 * @generated ServiceType for protobuf service user_submit.UserSubmitService
 */
declare const UserSubmitService: ServiceType;

/**
 * @generated from protobuf service user_submit.UserSubmitService
 */
interface IUserSubmitServiceClient {
    /**
     * @generated from protobuf rpc: Submit
     */
    submit(input: SubmitRequest, options?: RpcOptions): UnaryCall<SubmitRequest, SubmitResponse>;
}
/**
 * @generated from protobuf service user_submit.UserSubmitService
 */
declare class UserSubmitServiceClient implements IUserSubmitServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: _protobuf_ts_runtime_rpc.MethodInfo<any, any>[];
    options: {
        [extensionName: string]: _protobuf_ts_runtime.JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: Submit
     */
    submit(input: SubmitRequest, options?: RpcOptions): UnaryCall<SubmitRequest, SubmitResponse>;
}

type UnwrapUnaryCall<T> = T extends (...args: any[]) => UnaryCall<any, infer O> ? O : never;
declare class WrappedAuthServiceClient {
    private readonly client;
    constructor(client: AuthServiceClient);
    login(input: Parameters<AuthServiceClient['login']>[0], options?: Parameters<AuthServiceClient['login']>[1]): Promise<UnwrapUnaryCall<AuthServiceClient['login']>>;
}
declare class WrappedBlogServiceClient {
    private readonly client;
    constructor(client: BlogServiceClient);
    getBlogsByQuery(input: Parameters<BlogServiceClient['getBlogsByQuery']>[0], options?: Parameters<BlogServiceClient['getBlogsByQuery']>[1]): Promise<UnwrapUnaryCall<BlogServiceClient['getBlogsByQuery']>>;
    getBlogDetail(input: Parameters<BlogServiceClient['getBlogDetail']>[0], options?: Parameters<BlogServiceClient['getBlogDetail']>[1]): Promise<UnwrapUnaryCall<BlogServiceClient['getBlogDetail']>>;
    getBlogsByBlogGroupSlug(input: Parameters<BlogServiceClient['getBlogsByBlogGroupSlug']>[0], options?: Parameters<BlogServiceClient['getBlogsByBlogGroupSlug']>[1]): Promise<UnwrapUnaryCall<BlogServiceClient['getBlogsByBlogGroupSlug']>>;
    getBlogGroupsByQuery(input: Parameters<BlogServiceClient['getBlogGroupsByQuery']>[0], options?: Parameters<BlogServiceClient['getBlogGroupsByQuery']>[1]): Promise<UnwrapUnaryCall<BlogServiceClient['getBlogGroupsByQuery']>>;
    getBlogGroupsBySlug(input: Parameters<BlogServiceClient['getBlogGroupsBySlug']>[0], options?: Parameters<BlogServiceClient['getBlogGroupsBySlug']>[1]): Promise<UnwrapUnaryCall<BlogServiceClient['getBlogGroupsBySlug']>>;
    getByQuery(input: Parameters<BlogServiceClient['getBlogsByQuery']>[0], options?: Parameters<BlogServiceClient['getBlogsByQuery']>[1]): Promise<UnwrapUnaryCall<BlogServiceClient['getBlogsByQuery']>>;
    getBySlug(input: Parameters<BlogServiceClient['getBlogDetail']>[0], options?: Parameters<BlogServiceClient['getBlogDetail']>[1]): Promise<UnwrapUnaryCall<BlogServiceClient['getBlogDetail']>>;
}
declare class WrappedCommentServiceClient {
    private readonly client;
    constructor(client: CommentServiceClient);
    createComment(input: Parameters<CommentServiceClient['createComment']>[0], options?: Parameters<CommentServiceClient['createComment']>[1]): Promise<UnwrapUnaryCall<CommentServiceClient['createComment']>>;
    getCommentsByRef(input: Parameters<CommentServiceClient['getCommentsByRef']>[0], options?: Parameters<CommentServiceClient['getCommentsByRef']>[1]): Promise<UnwrapUnaryCall<CommentServiceClient['getCommentsByRef']>>;
}
declare class WrappedOrderServiceClient {
    private readonly client;
    constructor(client: OrderServiceClient);
    placeOrder(input: Parameters<OrderServiceClient['placeOrder']>[0], options?: Parameters<OrderServiceClient['placeOrder']>[1]): Promise<UnwrapUnaryCall<OrderServiceClient['placeOrder']>>;
    getMyOrders(input: Parameters<OrderServiceClient['getMyOrders']>[0], options?: Parameters<OrderServiceClient['getMyOrders']>[1]): Promise<UnwrapUnaryCall<OrderServiceClient['getMyOrders']>>;
    getOrderDetail(input: Parameters<OrderServiceClient['getOrderDetail']>[0], options?: Parameters<OrderServiceClient['getOrderDetail']>[1]): Promise<UnwrapUnaryCall<OrderServiceClient['getOrderDetail']>>;
    cancelOrder(input: Parameters<OrderServiceClient['cancelOrder']>[0], options?: Parameters<OrderServiceClient['cancelOrder']>[1]): Promise<UnwrapUnaryCall<OrderServiceClient['cancelOrder']>>;
    getOrderTracking(input: Parameters<OrderServiceClient['getOrderTracking']>[0], options?: Parameters<OrderServiceClient['getOrderTracking']>[1]): Promise<UnwrapUnaryCall<OrderServiceClient['getOrderTracking']>>;
    requestRefund(input: Parameters<OrderServiceClient['requestRefund']>[0], options?: Parameters<OrderServiceClient['requestRefund']>[1]): Promise<UnwrapUnaryCall<OrderServiceClient['requestRefund']>>;
    submitReview(input: Parameters<OrderServiceClient['submitReview']>[0], options?: Parameters<OrderServiceClient['submitReview']>[1]): Promise<UnwrapUnaryCall<OrderServiceClient['submitReview']>>;
}
declare class WrappedPageViewServiceClient {
    private readonly client;
    constructor(client: PageViewServiceClient);
    getPageView(input: Parameters<PageViewServiceClient['getPageView']>[0], options?: Parameters<PageViewServiceClient['getPageView']>[1]): Promise<UnwrapUnaryCall<PageViewServiceClient['getPageView']>>;
}
declare class WrappedProductServiceClient {
    private readonly client;
    constructor(client: ProductServiceClient);
    getProductsByQuery(input: Parameters<ProductServiceClient['getProductsByQuery']>[0], options?: Parameters<ProductServiceClient['getProductsByQuery']>[1]): Promise<UnwrapUnaryCall<ProductServiceClient['getProductsByQuery']>>;
    getProductDetail(input: Parameters<ProductServiceClient['getProductDetail']>[0], options?: Parameters<ProductServiceClient['getProductDetail']>[1]): Promise<UnwrapUnaryCall<ProductServiceClient['getProductDetail']>>;
    getProductsByProductGroupSlug(input: Parameters<ProductServiceClient['getProductsByProductGroupSlug']>[0], options?: Parameters<ProductServiceClient['getProductsByProductGroupSlug']>[1]): Promise<UnwrapUnaryCall<ProductServiceClient['getProductsByProductGroupSlug']>>;
    getProductGroupsBySlug(input: Parameters<ProductServiceClient['getProductGroupsBySlug']>[0], options?: Parameters<ProductServiceClient['getProductGroupsBySlug']>[1]): Promise<UnwrapUnaryCall<ProductServiceClient['getProductGroupsBySlug']>>;
    getProductGroupsByQuery(input: Parameters<ProductServiceClient['getProductGroupsByQuery']>[0], options?: Parameters<ProductServiceClient['getProductGroupsByQuery']>[1]): Promise<UnwrapUnaryCall<ProductServiceClient['getProductGroupsByQuery']>>;
    getByQuery(input: Parameters<ProductServiceClient['getProductsByQuery']>[0], options?: Parameters<ProductServiceClient['getProductsByQuery']>[1]): Promise<UnwrapUnaryCall<ProductServiceClient['getProductsByQuery']>>;
    getBySlug(input: Parameters<ProductServiceClient['getProductDetail']>[0], options?: Parameters<ProductServiceClient['getProductDetail']>[1]): Promise<UnwrapUnaryCall<ProductServiceClient['getProductDetail']>>;
}
declare class WrappedSeoServiceClient {
    private readonly client;
    constructor(client: SeoServiceClient);
    getGlobalConfig(input: Parameters<SeoServiceClient['getGlobalConfig']>[0], options?: Parameters<SeoServiceClient['getGlobalConfig']>[1]): Promise<UnwrapUnaryCall<SeoServiceClient['getGlobalConfig']>>;
    getMetaByUrl(input: Parameters<SeoServiceClient['getMetaByUrl']>[0], options?: Parameters<SeoServiceClient['getMetaByUrl']>[1]): Promise<UnwrapUnaryCall<SeoServiceClient['getMetaByUrl']>>;
    getSitemapData(input: Parameters<SeoServiceClient['getSitemapData']>[0], options?: Parameters<SeoServiceClient['getSitemapData']>[1]): Promise<UnwrapUnaryCall<SeoServiceClient['getSitemapData']>>;
}
declare class WrappedTrackingServiceClient {
    private readonly client;
    constructor(client: TrackingServiceClient);
    ingestEvent(input: Parameters<TrackingServiceClient['ingestEvent']>[0], options?: Parameters<TrackingServiceClient['ingestEvent']>[1]): Promise<UnwrapUnaryCall<TrackingServiceClient['ingestEvent']>>;
}
declare class WrappedUserSubmitServiceClient {
    private readonly client;
    constructor(client: UserSubmitServiceClient);
    submit(input: Parameters<UserSubmitServiceClient['submit']>[0], options?: Parameters<UserSubmitServiceClient['submit']>[1]): Promise<UnwrapUnaryCall<UserSubmitServiceClient['submit']>>;
}

interface GrpcSDKConfig {
    baseUrl?: string;
    orgId: string;
    userName?: string;
    userId?: string;
    displayName?: string;
    userAgent?: string;
    publicKey?: string;
    debug?: boolean;
    token?: string | (() => string | null | undefined | Promise<string | null | undefined>);
}
type WrappedClient<T, _M = Record<string, unknown>> = T;
declare class OptiFlowGrpcSDK {
    private readonly transport;
    private config;
    private token;
    private tokenGetter?;
    readonly auth: WrappedAuthServiceClient;
    readonly blog: WrappedBlogServiceClient;
    readonly comment: WrappedCommentServiceClient;
    readonly order: WrappedOrderServiceClient;
    readonly pageView: WrappedPageViewServiceClient;
    readonly product: WrappedProductServiceClient;
    readonly seo: WrappedSeoServiceClient;
    readonly tracking: WrappedTrackingServiceClient;
    readonly userSubmit: WrappedUserSubmitServiceClient;
    constructor(config: GrpcSDKConfig);
    /**
     * Set authentication token dynamically on the fly
     */
    setToken(token: string): void;
    /**
     * Clear the active authentication token
     */
    clearToken(): void;
    /**
     * Check whether an authentication token is currently available.
     * Returns true if a static token is set or a tokenGetter returns a truthy value.
     */
    hasToken(): boolean | Promise<boolean>;
    /**
     * Returns the header/metadata configuration object generated for API requests (synchronously).
     * Maps to lines 134-143 configuration logic.
     */
    getRequestMetadata(extraMeta?: Record<string, string>): Record<string, string>;
    /**
     * Returns the header/metadata configuration object asynchronously, resolving tokenGetter if it returns a Promise.
     */
    getRequestMetadataAsync(extraMeta?: Record<string, string>): Promise<Record<string, string>>;
}
/**
 * Helper factory function to instantiate the OptiFlow gRPC SDK without using 'new'
 */
declare const grpcSDK: (config: GrpcSDKConfig) => OptiFlowGrpcSDK;

/**
 * Supported criteria filter types/comparison operators
 */
type CriteriaType = 'equal' | 'notequal' | 'gt' | 'lt' | 'includes' | 'startswith' | 'endswith' | 'dateRange';
/**
 * Filter criteria item representation
 */
interface Criteria {
    field: string;
    value: string;
    type: CriteriaType;
}
/**
 * Sorting representation
 */
interface Sort {
    field: string;
    order: 'asc' | 'desc' | 'ascending' | 'descending';
}
/**
 * Common query parameters for search list APIs
 */
interface Query {
    pageNumber?: number;
    pageSize?: number;
    criteria?: Criteria[];
    sort?: Sort;
    operator?: 'and' | 'or' | string;
}

interface FetchSeoOptions {
    /**
     * Instance của OptiFlowGrpcSDK.
     */
    sdk?: OptiFlowGrpcSDK;
    /**
     * Instance của WrappedSeoServiceClient (ví dụ: sdk.seo).
     */
    seoClient?: WrappedSeoServiceClient;
    /**
     * Đường dẫn URL của trang hiện tại (dùng để tự động fetch Page SEO).
     * Ví dụ: "/products/laptop-lenovo" hoặc "https://ladosite.vn/products/laptop-lenovo".
     */
    url?: string;
    /**
     * Dữ liệu Global SEO đã fetch sẵn (nếu có).
     */
    global?: SeoGlobalConfigResponse | SeoGlobalConfigData;
    /**
     * Dữ liệu Page SEO đã fetch sẵn (nếu có).
     */
    page?: SeoPageConfigResponse | SeoPageConfigData;
    /**
     * Tiêu đề dự phòng khi API SEO lỗi hoặc chưa có dữ liệu.
     */
    fallbackTitle?: string;
}
interface FetchSeoDataResult {
    global?: SeoGlobalConfigData;
    page?: SeoPageConfigData;
    metadata: Metadata;
}
/**
 * Xóa cache Global SEO trong bộ nhớ SDK
 */
declare function clearGlobalSeoCache(): void;
/**
 * Hàm helper tự động fetch SEO từ gRPC API và trả về Next.js Metadata chuẩn.
 * Tự động bọc try-catch an toàn (Zero Crash) - Không làm sập ứng dụng khi gRPC API gặp sự cố.
 */
declare function fetchSeoMetadata(options?: FetchSeoOptions): Promise<Metadata>;
/**
 * Tự động hóa fetch đầy đủ dữ liệu SEO (Global + Page + Metadata) từ gRPC SDK.
 * Có sẵn bộ nhớ cache (TTL 10 phút) cho Global SEO để giảm tải gRPC request.
 * Bọc try-catch tuyệt đối an toàn, chạy bất đồng bộ song song (Promise.allSettled) để tối ưu tốc độ.
 */
declare function fetchSeoData(options?: FetchSeoOptions): Promise<FetchSeoDataResult>;
/**
 * Helper bóc tách và giải mã Public Domain chuẩn từ Request Headers (x-forwarded-host, host, x-forwarded-proto)
 * hoặc từ Option / Environment variables để tránh bị dính IP 0.0.0.0 / localhost khi chạy trong Docker/Reverse Proxy.
 */
declare function resolvePublicUrl(urlOption?: string, request?: Request, domainOption?: string): {
    targetUrl: string;
    originDomain: string;
};
interface FetchRobotsOptions {
    /**
     * Instance của OptiFlowGrpcSDK.
     */
    sdk?: OptiFlowGrpcSDK;
    /**
     * Instance của WrappedSeoServiceClient (ví dụ: sdk.seo).
     */
    seoClient?: WrappedSeoServiceClient;
    /**
     * Dữ liệu Global SEO đã fetch sẵn (nếu có).
     */
    global?: SeoGlobalConfigResponse | SeoGlobalConfigData;
    /**
     * Đường dẫn URL đầy đủ (tùy chọn).
     */
    url?: string;
    /**
     * Tùy chọn truyền Domain chính thức để override.
     */
    domain?: string;
    /**
     * Request object trong Route Handler của Next.js (nếu có).
     */
    request?: Request;
}
/**
 * Fetch nội dung robots.txt từ gRPC Global SEO Config với cơ chế try-catch an toàn tuyệt đối.
 * Nếu API gặp sự cố, trả về nội dung robots.txt mặc định an toàn.
 */
declare function fetchRobotsTxt(options?: FetchRobotsOptions): Promise<string>;
/**
 * Helper tạo Web Standard Response (chuẩn text/plain) cho Next.js Route Handler (`app/robots.txt/route.ts`).
 * Hỗ trợ nhận trực tiếp Request object hoặc FetchRobotsOptions object.
 */
declare function handleRobotsTxtRequest(optionsOrRequest?: FetchRobotsOptions | Request, extraOptions?: FetchRobotsOptions): Promise<Response>;
interface FetchSitemapOptions {
    /**
     * Instance của OptiFlowGrpcSDK.
     */
    sdk?: OptiFlowGrpcSDK;
    /**
     * Instance của WrappedSeoServiceClient (ví dụ: sdk.seo).
     */
    seoClient?: WrappedSeoServiceClient;
    /**
     * Đường dẫn URL đầy đủ (ví dụ: "https://optiflow.vn/sitemap.xml" hoặc "/sitemap.xml").
     */
    url?: string;
    /**
     * Tùy chọn truyền Domain chính thức để override.
     */
    domain?: string;
    /**
     * Request object trong Route Handler của Next.js (nếu có).
     */
    request?: Request;
}
/**
 * Fetch XML Sitemap từ gRPC SEO Service với cơ chế try-catch an toàn tuyệt đối.
 * Trả về chuỗi XML sitemap thô (hoặc chuỗi rỗng nếu không tìm thấy / lỗi).
 */
declare function fetchSitemapXml(options?: FetchSitemapOptions): Promise<string>;
/**
 * Alias tên ngắn gọn cho `fetchSitemapXml`.
 */
declare const fetchSitemap: typeof fetchSitemapXml;
/**
 * Helper tạo Web Standard Response (chuẩn application/xml) cho Next.js Route Handler (`app/sitemap.xml/route.ts`).
 */
declare function handleSitemapRequest(optionsOrRequest?: FetchSitemapOptions | Request, extraOptions?: FetchSitemapOptions): Promise<Response>;

interface SitemapFetcherParams {
    url: string;
}
interface SitemapFetcherResult {
    xmlContent?: string | null;
}
interface HandleSitemapOptions {
    /**
     * Request object từ Next.js Route Handler
     */
    request: Request;
    /**
     * Params từ Next.js Dynamic Route (ví dụ: context.params)
     * Nếu truyền params và slug không kết thúc bằng `.xml`, tự động gọi notFound()
     */
    params?: Promise<{
        slug?: string;
    }> | {
        slug?: string;
    };
    /**
     * Hàm fetch sitemap từ gRPC hoặc API Client của bạn
     */
    fetcher: (params: SitemapFetcherParams) => Promise<SitemapFetcherResult | null | undefined>;
    /**
     * Cấu hình Header Cache-Control (tùy chọn)
     * @default 'public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400'
     */
    cacheControl?: string;
    /**
     * Ghi đè domain public (tùy chọn)
     */
    domain?: string;
}
/**
 * Trích xuất URL public chính xác từ Request Headers (x-forwarded-host, host, x-forwarded-proto)
 * Đảm bảo không bị dính localhost / 127.0.0.1 khi ứng dụng chạy sau Reverse Proxy (Nginx, Cloudflare, Docker).
 */
declare function extractPublicUrl(request: Request, overrideDomain?: string): string;
/**
 * Helper hoàn chỉnh chuẩn SEO phục vụ Next.js Route Handlers (`app/[slug]/route.ts`, `app/sitemap.xml/route.ts`).
 */
declare function handleDynamicSitemap({ request, params, fetcher, cacheControl, domain, }: HandleSitemapOptions): Promise<Response>;

interface SeoOptions {
    global?: SeoGlobalConfigResponse | SeoGlobalConfigData;
    page?: SeoPageConfigResponse | SeoPageConfigData;
}
declare function generateMetadata(input?: SeoOptions): Metadata;

interface SeoScriptsProps {
    scripts?: SeoScriptsData;
    schemaMarkup?: string | object;
    global?: SeoGlobalConfigResponse | SeoGlobalConfigData;
    page?: SeoPageConfigResponse | SeoPageConfigData;
}
declare function SeoScripts(props: SeoScriptsProps): React.JSX.Element | null;

export { AuthService, AuthServiceClient, BlogDataSourceResponse, BlogGroupDataSourceResponse, BlogGroupResponse, BlogGroupResponseWrapped, BlogResponse, BlogResponseWrapped, BlogService, BlogServiceClient, CancelOrderRequest, CommentData, CommentService, CommentServiceClient, CommonCriteria, CommonDataSourceMeta, CommonQuery, CommonSort, CreateCommentRequest, CreateCommentResponse, type Criteria, type CriteriaType, Empty, type FetchRobotsOptions, type FetchSeoDataResult, type FetchSeoOptions, type FetchSitemapOptions, GetBySlugPagedRequest, GetBySlugRequest, GetCommentsByRefRequest, GetCommentsByRefResponse, GetMetaByUrlRequest, GetOrderRequest, GetOrderTrackingResponse, GetOrdersResponse, GetPageViewRequest, GetSitemapDataRequest, type GrpcSDKConfig, type HandleSitemapOptions, type IAuthServiceClient, type IBlogServiceClient, type ICommentServiceClient, type IOrderServiceClient, type IPageViewServiceClient, type IProductServiceClient, type ISeoServiceClient, type ITrackingServiceClient, type IUserSubmitServiceClient, IdRequest, LoginData, LoginRequest, LoginResponse, OperationResult, OptiFlowGrpcSDK, OrderDetailResponse, OrderItemInput, OrderItemResponse, OrderResponse, OrderService, OrderServiceClient, PageRequest, PageResponse, PageViewData, PageViewResponse, PageViewService, PageViewServiceClient, PlaceOrderRequest, ProductDataSourceResponse, ProductGroupDataSourceResponse, ProductGroupResponse, ProductGroupResponseWrapped, ProductResponse, ProductResponseWrapped, ProductService, ProductServiceClient, ProductVariantConfigResponse, ProductVariantResponse, type Query, RequestRefundRequest, SeoAddressData, SeoContactPointData, SeoGlobalConfigData, SeoGlobalConfigResponse, SeoLogoData, SeoOpenGraphData, type SeoOptions, SeoPageConfigData, SeoPageConfigResponse, SeoRobotsMetaData, SeoScripts, SeoScriptsData, type SeoScriptsProps, SeoService, SeoServiceClient, SeoSitemapConfigData, SitemapDataResponse, type SitemapFetcherParams, type SitemapFetcherResult, type Sort, StringValue, SubmitRequest, SubmitResponse, SubmitReviewRequest, TrackingEvent, TrackingService, TrackingServiceClient, UserAccount, UserEventRequest, UserSubmitService, UserSubmitServiceClient, WrappedAuthServiceClient, WrappedBlogServiceClient, type WrappedClient, WrappedCommentServiceClient, WrappedOrderServiceClient, WrappedPageViewServiceClient, WrappedProductServiceClient, WrappedSeoServiceClient, WrappedTrackingServiceClient, WrappedUserSubmitServiceClient, clearGlobalSeoCache, extractPublicUrl, fetchRobotsTxt, fetchSeoData, fetchSeoMetadata, fetchSitemap, fetchSitemapXml, generateMetadata, grpcSDK, handleDynamicSitemap, handleRobotsTxtRequest, handleSitemapRequest, resolvePublicUrl };
