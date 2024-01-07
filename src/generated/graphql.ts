import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Data = {
  __typename?: 'Data';
  litable?: Maybe<Array<Maybe<Litable>>>;
  metadata?: Maybe<MetaData>;
};

export type Litable = {
  __typename?: 'Litable';
  city?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imageUrl?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  rent?: Maybe<Scalars['Float']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type LitableInput = {
  city: Scalars['String']['input'];
  imageUrl?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rent: Scalars['Float']['input'];
  street: Scalars['String']['input'];
};

export type LitableUpdate = {
  city: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  imageUrl: Array<InputMaybe<Scalars['String']['input']>>;
  rent: Scalars['Float']['input'];
  street: Scalars['String']['input'];
};

export type MetaData = {
  __typename?: 'MetaData';
  currentPage?: Maybe<Scalars['Int']['output']>;
  itemsByPage?: Maybe<Scalars['Int']['output']>;
  numberPage?: Maybe<Scalars['Int']['output']>;
};

export type MutationLitable = {
  __typename?: 'MutationLitable';
  addLitable?: Maybe<Litable>;
  deleteLitable?: Maybe<Litable>;
  updateLitable?: Maybe<Litable>;
};


export type MutationLitableAddLitableArgs = {
  input?: InputMaybe<LitableInput>;
};


export type MutationLitableDeleteLitableArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLitableUpdateLitableArgs = {
  update?: InputMaybe<LitableUpdate>;
};

export type MutationUser = {
  __typename?: 'MutationUser';
  login?: Maybe<User>;
};


export type MutationUserLoginArgs = {
  user?: InputMaybe<UserInfo>;
};

export type Query = {
  __typename?: 'Query';
  getAllLitable?: Maybe<Data>;
  getLitableById?: Maybe<Litable>;
};


export type QueryGetLitableByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type UserInfo = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Data: ResolverTypeWrapper<Data>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Litable: ResolverTypeWrapper<Litable>;
  LitableInput: LitableInput;
  LitableUpdate: LitableUpdate;
  MetaData: ResolverTypeWrapper<MetaData>;
  MutationLitable: ResolverTypeWrapper<MutationLitable>;
  MutationUser: ResolverTypeWrapper<MutationUser>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserInfo: UserInfo;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Data: Data;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Litable: Litable;
  LitableInput: LitableInput;
  LitableUpdate: LitableUpdate;
  MetaData: MetaData;
  MutationLitable: MutationLitable;
  MutationUser: MutationUser;
  Query: {};
  String: Scalars['String']['output'];
  User: User;
  UserInfo: UserInfo;
};

export type DataResolvers<ContextType = any, ParentType extends ResolversParentTypes['Data'] = ResolversParentTypes['Data']> = {
  litable?: Resolver<Maybe<Array<Maybe<ResolversTypes['Litable']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['MetaData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LitableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Litable'] = ResolversParentTypes['Litable']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  rent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetaDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetaData'] = ResolversParentTypes['MetaData']> = {
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  itemsByPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numberPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationLitableResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationLitable'] = ResolversParentTypes['MutationLitable']> = {
  addLitable?: Resolver<Maybe<ResolversTypes['Litable']>, ParentType, ContextType, Partial<MutationLitableAddLitableArgs>>;
  deleteLitable?: Resolver<Maybe<ResolversTypes['Litable']>, ParentType, ContextType, RequireFields<MutationLitableDeleteLitableArgs, 'id'>>;
  updateLitable?: Resolver<Maybe<ResolversTypes['Litable']>, ParentType, ContextType, Partial<MutationLitableUpdateLitableArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationUser'] = ResolversParentTypes['MutationUser']> = {
  login?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationUserLoginArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllLitable?: Resolver<Maybe<ResolversTypes['Data']>, ParentType, ContextType>;
  getLitableById?: Resolver<Maybe<ResolversTypes['Litable']>, ParentType, ContextType, Partial<QueryGetLitableByIdArgs>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Data?: DataResolvers<ContextType>;
  Litable?: LitableResolvers<ContextType>;
  MetaData?: MetaDataResolvers<ContextType>;
  MutationLitable?: MutationLitableResolvers<ContextType>;
  MutationUser?: MutationUserResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

