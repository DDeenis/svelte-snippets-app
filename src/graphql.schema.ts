/* tslint:disable */
/* eslint-disable */
import type { GraphQLResolveInfo, GraphQLScalarType } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface GQLSnippet {
	id: string;
	name: string;
	code?: string;
	Language: GQLLanguage;
	User: GQLUser;
}

export interface GQLLanguage {
	id: string;
	name: string;
}

export interface GQLUser {
	id: string;
	userId?: string;
	firstName?: string;
	lastName?: string;
	snippets?: Array<GQLSnippet | null>;
	snippetsAggregate?: GQLSnippetAggregateResult;
}

/**
 * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
 * Int64 can represent values in range [-(2^63),(2^63 - 1)].
 */
export type GQLInt64 = any;

/**
 * The DateTime scalar type represents date and time as a string in RFC3339 format.
 * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
 */
export type GQLDateTime = any;

export interface GQLIntRange {
	min: number;
	max: number;
}

export interface GQLFloatRange {
	min: number;
	max: number;
}

export interface GQLInt64Range {
	min: GQLInt64;
	max: GQLInt64;
}

export interface GQLDateTimeRange {
	min: GQLDateTime;
	max: GQLDateTime;
}

export interface GQLStringRange {
	min: string;
	max: string;
}

export enum GQLDgraphIndex {
	int = 'int',
	int64 = 'int64',
	float = 'float',
	bool = 'bool',
	hash = 'hash',
	exact = 'exact',
	term = 'term',
	fulltext = 'fulltext',
	trigram = 'trigram',
	regexp = 'regexp',
	year = 'year',
	month = 'month',
	day = 'day',
	hour = 'hour',
	geo = 'geo',
}

export interface GQLAuthRule {
	and?: Array<GQLAuthRule | null>;
	or?: Array<GQLAuthRule | null>;
	not?: GQLAuthRule;
	rule?: string;
}

export enum GQLHTTPMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
}

export enum GQLMode {
	BATCH = 'BATCH',
	SINGLE = 'SINGLE',
}

export interface GQLCustomHTTP {
	url: string;
	method: GQLHTTPMethod;
	body?: string;
	graphql?: string;
	mode?: GQLMode;
	forwardHeaders?: Array<string>;
	secretHeaders?: Array<string>;
	introspectionHeaders?: Array<string>;
	skipIntrospection?: boolean;
}

export interface GQLPoint {
	longitude: number;
	latitude: number;
}

export interface GQLPointRef {
	longitude: number;
	latitude: number;
}

export interface GQLNearFilter {
	distance: number;
	coordinate: GQLPointRef;
}

export interface GQLPointGeoFilter {
	near?: GQLNearFilter;
	within?: GQLWithinFilter;
}

export interface GQLPointList {
	points: Array<GQLPoint>;
}

export interface GQLPointListRef {
	points: Array<GQLPointRef>;
}

export interface GQLPolygon {
	coordinates: Array<GQLPointList>;
}

export interface GQLPolygonRef {
	coordinates: Array<GQLPointListRef>;
}

export interface GQLMultiPolygon {
	polygons: Array<GQLPolygon>;
}

export interface GQLMultiPolygonRef {
	polygons: Array<GQLPolygonRef>;
}

export interface GQLWithinFilter {
	polygon: GQLPolygonRef;
}

export interface GQLContainsFilter {
	point?: GQLPointRef;
	polygon?: GQLPolygonRef;
}

export interface GQLIntersectsFilter {
	polygon?: GQLPolygonRef;
	multiPolygon?: GQLMultiPolygonRef;
}

export interface GQLPolygonGeoFilter {
	near?: GQLNearFilter;
	within?: GQLWithinFilter;
	contains?: GQLContainsFilter;
	intersects?: GQLIntersectsFilter;
}

export interface GQLGenerateQueryParams {
	get?: boolean;
	query?: boolean;
	password?: boolean;
	aggregate?: boolean;
}

export interface GQLGenerateMutationParams {
	add?: boolean;
	update?: boolean;
	delete?: boolean;
}

export interface GQLIntFilter {
	eq?: number;
	in?: Array<number | null>;
	le?: number;
	lt?: number;
	ge?: number;
	gt?: number;
	between?: GQLIntRange;
}

export interface GQLInt64Filter {
	eq?: GQLInt64;
	in?: Array<GQLInt64 | null>;
	le?: GQLInt64;
	lt?: GQLInt64;
	ge?: GQLInt64;
	gt?: GQLInt64;
	between?: GQLInt64Range;
}

export interface GQLFloatFilter {
	eq?: number;
	in?: Array<number | null>;
	le?: number;
	lt?: number;
	ge?: number;
	gt?: number;
	between?: GQLFloatRange;
}

export interface GQLDateTimeFilter {
	eq?: GQLDateTime;
	in?: Array<GQLDateTime | null>;
	le?: GQLDateTime;
	lt?: GQLDateTime;
	ge?: GQLDateTime;
	gt?: GQLDateTime;
	between?: GQLDateTimeRange;
}

export interface GQLStringTermFilter {
	allofterms?: string;
	anyofterms?: string;
}

export interface GQLStringRegExpFilter {
	regexp?: string;
}

export interface GQLStringFullTextFilter {
	alloftext?: string;
	anyoftext?: string;
}

export interface GQLStringExactFilter {
	eq?: string;
	in?: Array<string | null>;
	le?: string;
	lt?: string;
	ge?: string;
	gt?: string;
	between?: GQLStringRange;
}

export interface GQLStringHashFilter {
	eq?: string;
	in?: Array<string | null>;
}

export interface GQLAddLanguagePayload {
	language?: Array<GQLLanguage | null>;
	numUids?: number;
}

export interface GQLAddSnippetPayload {
	snippet?: Array<GQLSnippet | null>;
	numUids?: number;
}

export interface GQLAddUserPayload {
	user?: Array<GQLUser | null>;
	numUids?: number;
}

export interface GQLDeleteLanguagePayload {
	language?: Array<GQLLanguage | null>;
	msg?: string;
	numUids?: number;
}

export interface GQLDeleteSnippetPayload {
	snippet?: Array<GQLSnippet | null>;
	msg?: string;
	numUids?: number;
}

export interface GQLDeleteUserPayload {
	user?: Array<GQLUser | null>;
	msg?: string;
	numUids?: number;
}

export interface GQLLanguageAggregateResult {
	count?: number;
	nameMin?: string;
	nameMax?: string;
}

export interface GQLSnippetAggregateResult {
	count?: number;
	nameMin?: string;
	nameMax?: string;
	codeMin?: string;
	codeMax?: string;
}

export interface GQLUpdateLanguagePayload {
	language?: Array<GQLLanguage | null>;
	numUids?: number;
}

export interface GQLUpdateSnippetPayload {
	snippet?: Array<GQLSnippet | null>;
	numUids?: number;
}

export interface GQLUpdateUserPayload {
	user?: Array<GQLUser | null>;
	numUids?: number;
}

export interface GQLUserAggregateResult {
	count?: number;
	userIdMin?: string;
	userIdMax?: string;
	firstNameMin?: string;
	firstNameMax?: string;
	lastNameMin?: string;
	lastNameMax?: string;
}

export enum GQLLanguageHasFilter {
	name = 'name',
}

export enum GQLLanguageOrderable {
	name = 'name',
}

export enum GQLSnippetHasFilter {
	name = 'name',
	code = 'code',
	Language = 'Language',
	User = 'User',
}

export enum GQLSnippetOrderable {
	name = 'name',
	code = 'code',
}

export enum GQLUserHasFilter {
	userId = 'userId',
	firstName = 'firstName',
	lastName = 'lastName',
	snippets = 'snippets',
}

export enum GQLUserOrderable {
	userId = 'userId',
	firstName = 'firstName',
	lastName = 'lastName',
}

export interface GQLAddLanguageInput {
	name: string;
}

export interface GQLAddSnippetInput {
	name: string;
	code?: string;
	Language: GQLLanguageRef;
	User: GQLUserRef;
}

export interface GQLAddUserInput {
	userId?: string;
	firstName?: string;
	lastName?: string;
	snippets?: Array<GQLSnippetRef | null>;
}

export interface GQLLanguageFilter {
	id?: Array<string>;
	has?: Array<GQLLanguageHasFilter | null>;
	and?: Array<GQLLanguageFilter | null>;
	or?: Array<GQLLanguageFilter | null>;
	not?: GQLLanguageFilter;
}

export interface GQLLanguageOrder {
	asc?: GQLLanguageOrderable;
	desc?: GQLLanguageOrderable;
	then?: GQLLanguageOrder;
}

export interface GQLLanguagePatch {
	name?: string;
}

export interface GQLLanguageRef {
	id?: string;
	name?: string;
}

export interface GQLSnippetFilter {
	id?: Array<string>;
	has?: Array<GQLSnippetHasFilter | null>;
	and?: Array<GQLSnippetFilter | null>;
	or?: Array<GQLSnippetFilter | null>;
	not?: GQLSnippetFilter;
}

export interface GQLSnippetOrder {
	asc?: GQLSnippetOrderable;
	desc?: GQLSnippetOrderable;
	then?: GQLSnippetOrder;
}

export interface GQLSnippetPatch {
	name?: string;
	code?: string;
	Language?: GQLLanguageRef;
	User?: GQLUserRef;
}

export interface GQLSnippetRef {
	id?: string;
	name?: string;
	code?: string;
	Language?: GQLLanguageRef;
	User?: GQLUserRef;
}

export interface GQLUpdateLanguageInput {
	filter: GQLLanguageFilter;
	set?: GQLLanguagePatch;
	remove?: GQLLanguagePatch;
}

export interface GQLUpdateSnippetInput {
	filter: GQLSnippetFilter;
	set?: GQLSnippetPatch;
	remove?: GQLSnippetPatch;
}

export interface GQLUpdateUserInput {
	filter: GQLUserFilter;
	set?: GQLUserPatch;
	remove?: GQLUserPatch;
}

export interface GQLUserFilter {
	id?: Array<string>;
	userId?: GQLStringExactFilter;
	has?: Array<GQLUserHasFilter | null>;
	and?: Array<GQLUserFilter | null>;
	or?: Array<GQLUserFilter | null>;
	not?: GQLUserFilter;
}

export interface GQLUserOrder {
	asc?: GQLUserOrderable;
	desc?: GQLUserOrderable;
	then?: GQLUserOrder;
}

export interface GQLUserPatch {
	userId?: string;
	firstName?: string;
	lastName?: string;
	snippets?: Array<GQLSnippetRef | null>;
}

export interface GQLUserRef {
	id?: string;
	userId?: string;
	firstName?: string;
	lastName?: string;
	snippets?: Array<GQLSnippetRef | null>;
}

export interface GQLQuery {
	getSnippet?: GQLSnippet;
	querySnippet?: Array<GQLSnippet | null>;
	aggregateSnippet?: GQLSnippetAggregateResult;
	getLanguage?: GQLLanguage;
	queryLanguage?: Array<GQLLanguage | null>;
	aggregateLanguage?: GQLLanguageAggregateResult;
	getUser?: GQLUser;
	queryUser?: Array<GQLUser | null>;
	aggregateUser?: GQLUserAggregateResult;
}

export interface GQLMutation {
	addSnippet?: GQLAddSnippetPayload;
	updateSnippet?: GQLUpdateSnippetPayload;
	deleteSnippet?: GQLDeleteSnippetPayload;
	addLanguage?: GQLAddLanguagePayload;
	updateLanguage?: GQLUpdateLanguagePayload;
	deleteLanguage?: GQLDeleteLanguagePayload;
	addUser?: GQLAddUserPayload;
	updateUser?: GQLUpdateUserPayload;
	deleteUser?: GQLDeleteUserPayload;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface GQLResolver {
	Snippet?: GQLSnippetTypeResolver;
	Language?: GQLLanguageTypeResolver;
	User?: GQLUserTypeResolver;
	Int64?: GraphQLScalarType;
	DateTime?: GraphQLScalarType;
	Point?: GQLPointTypeResolver;
	PointList?: GQLPointListTypeResolver;
	Polygon?: GQLPolygonTypeResolver;
	MultiPolygon?: GQLMultiPolygonTypeResolver;
	AddLanguagePayload?: GQLAddLanguagePayloadTypeResolver;
	AddSnippetPayload?: GQLAddSnippetPayloadTypeResolver;
	AddUserPayload?: GQLAddUserPayloadTypeResolver;
	DeleteLanguagePayload?: GQLDeleteLanguagePayloadTypeResolver;
	DeleteSnippetPayload?: GQLDeleteSnippetPayloadTypeResolver;
	DeleteUserPayload?: GQLDeleteUserPayloadTypeResolver;
	LanguageAggregateResult?: GQLLanguageAggregateResultTypeResolver;
	SnippetAggregateResult?: GQLSnippetAggregateResultTypeResolver;
	UpdateLanguagePayload?: GQLUpdateLanguagePayloadTypeResolver;
	UpdateSnippetPayload?: GQLUpdateSnippetPayloadTypeResolver;
	UpdateUserPayload?: GQLUpdateUserPayloadTypeResolver;
	UserAggregateResult?: GQLUserAggregateResultTypeResolver;
	Query?: GQLQueryTypeResolver;
	Mutation?: GQLMutationTypeResolver;
}
export interface GQLSnippetTypeResolver<TParent = any> {
	id?: SnippetToIdResolver<TParent>;
	name?: SnippetToNameResolver<TParent>;
	code?: SnippetToCodeResolver<TParent>;
	Language?: SnippetToLanguageResolver<TParent>;
	User?: SnippetToUserResolver<TParent>;
}

export interface SnippetToIdResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SnippetToNameResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SnippetToCodeResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SnippetToLanguageArgs {
	filter?: GQLLanguageFilter;
}
export interface SnippetToLanguageResolver<TParent = any, TResult = any> {
	(parent: TParent, args: SnippetToLanguageArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SnippetToUserArgs {
	filter?: GQLUserFilter;
}
export interface SnippetToUserResolver<TParent = any, TResult = any> {
	(parent: TParent, args: SnippetToUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLLanguageTypeResolver<TParent = any> {
	id?: LanguageToIdResolver<TParent>;
	name?: LanguageToNameResolver<TParent>;
}

export interface LanguageToIdResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LanguageToNameResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLUserTypeResolver<TParent = any> {
	id?: UserToIdResolver<TParent>;
	userId?: UserToUserIdResolver<TParent>;
	firstName?: UserToFirstNameResolver<TParent>;
	lastName?: UserToLastNameResolver<TParent>;
	snippets?: UserToSnippetsResolver<TParent>;
	snippetsAggregate?: UserToSnippetsAggregateResolver<TParent>;
}

export interface UserToIdResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToUserIdResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToFirstNameResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToLastNameResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToSnippetsArgs {
	filter?: GQLSnippetFilter;
	order?: GQLSnippetOrder;
	first?: number;
	offset?: number;
}
export interface UserToSnippetsResolver<TParent = any, TResult = any> {
	(parent: TParent, args: UserToSnippetsArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToSnippetsAggregateArgs {
	filter?: GQLSnippetFilter;
}
export interface UserToSnippetsAggregateResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: UserToSnippetsAggregateArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface GQLPointTypeResolver<TParent = any> {
	longitude?: PointToLongitudeResolver<TParent>;
	latitude?: PointToLatitudeResolver<TParent>;
}

export interface PointToLongitudeResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PointToLatitudeResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLPointListTypeResolver<TParent = any> {
	points?: PointListToPointsResolver<TParent>;
}

export interface PointListToPointsResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLPolygonTypeResolver<TParent = any> {
	coordinates?: PolygonToCoordinatesResolver<TParent>;
}

export interface PolygonToCoordinatesResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLMultiPolygonTypeResolver<TParent = any> {
	polygons?: MultiPolygonToPolygonsResolver<TParent>;
}

export interface MultiPolygonToPolygonsResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLAddLanguagePayloadTypeResolver<TParent = any> {
	language?: AddLanguagePayloadToLanguageResolver<TParent>;
	numUids?: AddLanguagePayloadToNumUidsResolver<TParent>;
}

export interface AddLanguagePayloadToLanguageArgs {
	filter?: GQLLanguageFilter;
	order?: GQLLanguageOrder;
	first?: number;
	offset?: number;
}
export interface AddLanguagePayloadToLanguageResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: AddLanguagePayloadToLanguageArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface AddLanguagePayloadToNumUidsResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLAddSnippetPayloadTypeResolver<TParent = any> {
	snippet?: AddSnippetPayloadToSnippetResolver<TParent>;
	numUids?: AddSnippetPayloadToNumUidsResolver<TParent>;
}

export interface AddSnippetPayloadToSnippetArgs {
	filter?: GQLSnippetFilter;
	order?: GQLSnippetOrder;
	first?: number;
	offset?: number;
}
export interface AddSnippetPayloadToSnippetResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: AddSnippetPayloadToSnippetArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface AddSnippetPayloadToNumUidsResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLAddUserPayloadTypeResolver<TParent = any> {
	user?: AddUserPayloadToUserResolver<TParent>;
	numUids?: AddUserPayloadToNumUidsResolver<TParent>;
}

export interface AddUserPayloadToUserArgs {
	filter?: GQLUserFilter;
	order?: GQLUserOrder;
	first?: number;
	offset?: number;
}
export interface AddUserPayloadToUserResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: AddUserPayloadToUserArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface AddUserPayloadToNumUidsResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLDeleteLanguagePayloadTypeResolver<TParent = any> {
	language?: DeleteLanguagePayloadToLanguageResolver<TParent>;
	msg?: DeleteLanguagePayloadToMsgResolver<TParent>;
	numUids?: DeleteLanguagePayloadToNumUidsResolver<TParent>;
}

export interface DeleteLanguagePayloadToLanguageArgs {
	filter?: GQLLanguageFilter;
	order?: GQLLanguageOrder;
	first?: number;
	offset?: number;
}
export interface DeleteLanguagePayloadToLanguageResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: DeleteLanguagePayloadToLanguageArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface DeleteLanguagePayloadToMsgResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface DeleteLanguagePayloadToNumUidsResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLDeleteSnippetPayloadTypeResolver<TParent = any> {
	snippet?: DeleteSnippetPayloadToSnippetResolver<TParent>;
	msg?: DeleteSnippetPayloadToMsgResolver<TParent>;
	numUids?: DeleteSnippetPayloadToNumUidsResolver<TParent>;
}

export interface DeleteSnippetPayloadToSnippetArgs {
	filter?: GQLSnippetFilter;
	order?: GQLSnippetOrder;
	first?: number;
	offset?: number;
}
export interface DeleteSnippetPayloadToSnippetResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: DeleteSnippetPayloadToSnippetArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface DeleteSnippetPayloadToMsgResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface DeleteSnippetPayloadToNumUidsResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLDeleteUserPayloadTypeResolver<TParent = any> {
	user?: DeleteUserPayloadToUserResolver<TParent>;
	msg?: DeleteUserPayloadToMsgResolver<TParent>;
	numUids?: DeleteUserPayloadToNumUidsResolver<TParent>;
}

export interface DeleteUserPayloadToUserArgs {
	filter?: GQLUserFilter;
	order?: GQLUserOrder;
	first?: number;
	offset?: number;
}
export interface DeleteUserPayloadToUserResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: DeleteUserPayloadToUserArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface DeleteUserPayloadToMsgResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface DeleteUserPayloadToNumUidsResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLLanguageAggregateResultTypeResolver<TParent = any> {
	count?: LanguageAggregateResultToCountResolver<TParent>;
	nameMin?: LanguageAggregateResultToNameMinResolver<TParent>;
	nameMax?: LanguageAggregateResultToNameMaxResolver<TParent>;
}

export interface LanguageAggregateResultToCountResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LanguageAggregateResultToNameMinResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LanguageAggregateResultToNameMaxResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLSnippetAggregateResultTypeResolver<TParent = any> {
	count?: SnippetAggregateResultToCountResolver<TParent>;
	nameMin?: SnippetAggregateResultToNameMinResolver<TParent>;
	nameMax?: SnippetAggregateResultToNameMaxResolver<TParent>;
	codeMin?: SnippetAggregateResultToCodeMinResolver<TParent>;
	codeMax?: SnippetAggregateResultToCodeMaxResolver<TParent>;
}

export interface SnippetAggregateResultToCountResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SnippetAggregateResultToNameMinResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SnippetAggregateResultToNameMaxResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SnippetAggregateResultToCodeMinResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SnippetAggregateResultToCodeMaxResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLUpdateLanguagePayloadTypeResolver<TParent = any> {
	language?: UpdateLanguagePayloadToLanguageResolver<TParent>;
	numUids?: UpdateLanguagePayloadToNumUidsResolver<TParent>;
}

export interface UpdateLanguagePayloadToLanguageArgs {
	filter?: GQLLanguageFilter;
	order?: GQLLanguageOrder;
	first?: number;
	offset?: number;
}
export interface UpdateLanguagePayloadToLanguageResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: UpdateLanguagePayloadToLanguageArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface UpdateLanguagePayloadToNumUidsResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLUpdateSnippetPayloadTypeResolver<TParent = any> {
	snippet?: UpdateSnippetPayloadToSnippetResolver<TParent>;
	numUids?: UpdateSnippetPayloadToNumUidsResolver<TParent>;
}

export interface UpdateSnippetPayloadToSnippetArgs {
	filter?: GQLSnippetFilter;
	order?: GQLSnippetOrder;
	first?: number;
	offset?: number;
}
export interface UpdateSnippetPayloadToSnippetResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: UpdateSnippetPayloadToSnippetArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface UpdateSnippetPayloadToNumUidsResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLUpdateUserPayloadTypeResolver<TParent = any> {
	user?: UpdateUserPayloadToUserResolver<TParent>;
	numUids?: UpdateUserPayloadToNumUidsResolver<TParent>;
}

export interface UpdateUserPayloadToUserArgs {
	filter?: GQLUserFilter;
	order?: GQLUserOrder;
	first?: number;
	offset?: number;
}
export interface UpdateUserPayloadToUserResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: UpdateUserPayloadToUserArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface UpdateUserPayloadToNumUidsResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLUserAggregateResultTypeResolver<TParent = any> {
	count?: UserAggregateResultToCountResolver<TParent>;
	userIdMin?: UserAggregateResultToUserIdMinResolver<TParent>;
	userIdMax?: UserAggregateResultToUserIdMaxResolver<TParent>;
	firstNameMin?: UserAggregateResultToFirstNameMinResolver<TParent>;
	firstNameMax?: UserAggregateResultToFirstNameMaxResolver<TParent>;
	lastNameMin?: UserAggregateResultToLastNameMinResolver<TParent>;
	lastNameMax?: UserAggregateResultToLastNameMaxResolver<TParent>;
}

export interface UserAggregateResultToCountResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserAggregateResultToUserIdMinResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserAggregateResultToUserIdMaxResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserAggregateResultToFirstNameMinResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserAggregateResultToFirstNameMaxResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserAggregateResultToLastNameMinResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserAggregateResultToLastNameMaxResolver<TParent = any, TResult = any> {
	(parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLQueryTypeResolver<TParent = any> {
	getSnippet?: QueryToGetSnippetResolver<TParent>;
	querySnippet?: QueryToQuerySnippetResolver<TParent>;
	aggregateSnippet?: QueryToAggregateSnippetResolver<TParent>;
	getLanguage?: QueryToGetLanguageResolver<TParent>;
	queryLanguage?: QueryToQueryLanguageResolver<TParent>;
	aggregateLanguage?: QueryToAggregateLanguageResolver<TParent>;
	getUser?: QueryToGetUserResolver<TParent>;
	queryUser?: QueryToQueryUserResolver<TParent>;
	aggregateUser?: QueryToAggregateUserResolver<TParent>;
}

export interface QueryToGetSnippetArgs {
	id: string;
}
export interface QueryToGetSnippetResolver<TParent = any, TResult = any> {
	(parent: TParent, args: QueryToGetSnippetArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToQuerySnippetArgs {
	filter?: GQLSnippetFilter;
	order?: GQLSnippetOrder;
	first?: number;
	offset?: number;
}
export interface QueryToQuerySnippetResolver<TParent = any, TResult = any> {
	(parent: TParent, args: QueryToQuerySnippetArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToAggregateSnippetArgs {
	filter?: GQLSnippetFilter;
}
export interface QueryToAggregateSnippetResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: QueryToAggregateSnippetArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface QueryToGetLanguageArgs {
	id: string;
}
export interface QueryToGetLanguageResolver<TParent = any, TResult = any> {
	(parent: TParent, args: QueryToGetLanguageArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToQueryLanguageArgs {
	filter?: GQLLanguageFilter;
	order?: GQLLanguageOrder;
	first?: number;
	offset?: number;
}
export interface QueryToQueryLanguageResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: QueryToQueryLanguageArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface QueryToAggregateLanguageArgs {
	filter?: GQLLanguageFilter;
}
export interface QueryToAggregateLanguageResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: QueryToAggregateLanguageArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface QueryToGetUserArgs {
	id: string;
}
export interface QueryToGetUserResolver<TParent = any, TResult = any> {
	(parent: TParent, args: QueryToGetUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToQueryUserArgs {
	filter?: GQLUserFilter;
	order?: GQLUserOrder;
	first?: number;
	offset?: number;
}
export interface QueryToQueryUserResolver<TParent = any, TResult = any> {
	(parent: TParent, args: QueryToQueryUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToAggregateUserArgs {
	filter?: GQLUserFilter;
}
export interface QueryToAggregateUserResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: QueryToAggregateUserArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface GQLMutationTypeResolver<TParent = any> {
	addSnippet?: MutationToAddSnippetResolver<TParent>;
	updateSnippet?: MutationToUpdateSnippetResolver<TParent>;
	deleteSnippet?: MutationToDeleteSnippetResolver<TParent>;
	addLanguage?: MutationToAddLanguageResolver<TParent>;
	updateLanguage?: MutationToUpdateLanguageResolver<TParent>;
	deleteLanguage?: MutationToDeleteLanguageResolver<TParent>;
	addUser?: MutationToAddUserResolver<TParent>;
	updateUser?: MutationToUpdateUserResolver<TParent>;
	deleteUser?: MutationToDeleteUserResolver<TParent>;
}

export interface MutationToAddSnippetArgs {
	input: Array<GQLAddSnippetInput>;
}
export interface MutationToAddSnippetResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: MutationToAddSnippetArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface MutationToUpdateSnippetArgs {
	input: GQLUpdateSnippetInput;
}
export interface MutationToUpdateSnippetResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: MutationToUpdateSnippetArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface MutationToDeleteSnippetArgs {
	filter: GQLSnippetFilter;
}
export interface MutationToDeleteSnippetResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: MutationToDeleteSnippetArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface MutationToAddLanguageArgs {
	input: Array<GQLAddLanguageInput>;
}
export interface MutationToAddLanguageResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: MutationToAddLanguageArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface MutationToUpdateLanguageArgs {
	input: GQLUpdateLanguageInput;
}
export interface MutationToUpdateLanguageResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: MutationToUpdateLanguageArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface MutationToDeleteLanguageArgs {
	filter: GQLLanguageFilter;
}
export interface MutationToDeleteLanguageResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: MutationToDeleteLanguageArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface MutationToAddUserArgs {
	input: Array<GQLAddUserInput>;
}
export interface MutationToAddUserResolver<TParent = any, TResult = any> {
	(parent: TParent, args: MutationToAddUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToUpdateUserArgs {
	input: GQLUpdateUserInput;
}
export interface MutationToUpdateUserResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: MutationToUpdateUserArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}

export interface MutationToDeleteUserArgs {
	filter: GQLUserFilter;
}
export interface MutationToDeleteUserResolver<TParent = any, TResult = any> {
	(
		parent: TParent,
		args: MutationToDeleteUserArgs,
		context: any,
		info: GraphQLResolveInfo,
	): TResult;
}