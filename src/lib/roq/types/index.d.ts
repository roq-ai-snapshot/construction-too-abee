/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model inventory
 *
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model rental
 *
 */
export type rental = $Result.DefaultSelection<Prisma.$rentalPayload>;
/**
 * Model store
 *
 */
export type store = $Result.DefaultSelection<Prisma.$storePayload>;
/**
 * Model tool
 *
 */
export type tool = $Result.DefaultSelection<Prisma.$toolPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Inventories
 * const inventories = await prisma.inventory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventory.findMany()
   * ```
   */
  get inventory(): Prisma.inventoryDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.rental`: Exposes CRUD operations for the **rental** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Rentals
   * const rentals = await prisma.rental.findMany()
   * ```
   */
  get rental(): Prisma.rentalDelegate<ExtArgs>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **store** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Stores
   * const stores = await prisma.store.findMany()
   * ```
   */
  get store(): Prisma.storeDelegate<ExtArgs>;

  /**
   * `prisma.tool`: Exposes CRUD operations for the **tool** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tools
   * const tools = await prisma.tool.findMany()
   * ```
   */
  get tool(): Prisma.toolDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.0
   * Query Engine version: 475c616176945d72f4330c92801f0c5e6398dc0f
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    inventory: 'inventory';
    organization: 'organization';
    rental: 'rental';
    store: 'store';
    tool: 'tool';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'inventory' | 'organization' | 'rental' | 'store' | 'tool' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>;
        fields: Prisma.inventoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[];
          };
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInventory>;
          };
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InventoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>;
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      rental: {
        payload: Prisma.$rentalPayload<ExtArgs>;
        fields: Prisma.rentalFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.rentalFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.rentalFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          findFirst: {
            args: Prisma.rentalFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.rentalFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          findMany: {
            args: Prisma.rentalFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>[];
          };
          create: {
            args: Prisma.rentalCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          createMany: {
            args: Prisma.rentalCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.rentalDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          update: {
            args: Prisma.rentalUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          deleteMany: {
            args: Prisma.rentalDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.rentalUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.rentalUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          aggregate: {
            args: Prisma.RentalAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRental>;
          };
          groupBy: {
            args: Prisma.rentalGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RentalGroupByOutputType>[];
          };
          count: {
            args: Prisma.rentalCountArgs<ExtArgs>;
            result: $Utils.Optional<RentalCountAggregateOutputType> | number;
          };
        };
      };
      store: {
        payload: Prisma.$storePayload<ExtArgs>;
        fields: Prisma.storeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.storeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.storeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>;
          };
          findFirst: {
            args: Prisma.storeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.storeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>;
          };
          findMany: {
            args: Prisma.storeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>[];
          };
          create: {
            args: Prisma.storeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>;
          };
          createMany: {
            args: Prisma.storeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.storeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>;
          };
          update: {
            args: Prisma.storeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>;
          };
          deleteMany: {
            args: Prisma.storeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.storeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.storeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>;
          };
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStore>;
          };
          groupBy: {
            args: Prisma.storeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StoreGroupByOutputType>[];
          };
          count: {
            args: Prisma.storeCountArgs<ExtArgs>;
            result: $Utils.Optional<StoreCountAggregateOutputType> | number;
          };
        };
      };
      tool: {
        payload: Prisma.$toolPayload<ExtArgs>;
        fields: Prisma.toolFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.toolFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.toolFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          findFirst: {
            args: Prisma.toolFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.toolFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          findMany: {
            args: Prisma.toolFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>[];
          };
          create: {
            args: Prisma.toolCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          createMany: {
            args: Prisma.toolCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.toolDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          update: {
            args: Prisma.toolUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          deleteMany: {
            args: Prisma.toolDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.toolUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.toolUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          aggregate: {
            args: Prisma.ToolAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTool>;
          };
          groupBy: {
            args: Prisma.toolGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ToolGroupByOutputType>[];
          };
          count: {
            args: Prisma.toolCountArgs<ExtArgs>;
            result: $Utils.Optional<ToolCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    store: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | OrganizationCountOutputTypeCountStoreArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountStoreArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: storeWhereInput;
  };

  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    inventory: number;
    tool: number;
  };

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | StoreCountOutputTypeCountInventoryArgs;
    tool?: boolean | StoreCountOutputTypeCountToolArgs;
  };

  // Custom InputTypes

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountInventoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: inventoryWhereInput;
  };

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountToolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: toolWhereInput;
  };

  /**
   * Count Type ToolCountOutputType
   */

  export type ToolCountOutputType = {
    inventory: number;
    rental: number;
  };

  export type ToolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | ToolCountOutputTypeCountInventoryArgs;
    rental?: boolean | ToolCountOutputTypeCountRentalArgs;
  };

  // Custom InputTypes

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCountOutputType
     */
    select?: ToolCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountInventoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: inventoryWhereInput;
  };

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    organization: number;
    rental: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | UserCountOutputTypeCountOrganizationArgs;
    rental?: boolean | UserCountOutputTypeCountRentalArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: organizationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  export type InventoryAvgAggregateOutputType = {
    quantity: number | null;
  };

  export type InventorySumAggregateOutputType = {
    quantity: number | null;
  };

  export type InventoryMinAggregateOutputType = {
    id: string | null;
    tool_id: string | null;
    store_id: string | null;
    quantity: number | null;
    last_updated: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InventoryMaxAggregateOutputType = {
    id: string | null;
    tool_id: string | null;
    store_id: string | null;
    quantity: number | null;
    last_updated: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InventoryCountAggregateOutputType = {
    id: number;
    tool_id: number;
    store_id: number;
    quantity: number;
    last_updated: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type InventoryAvgAggregateInputType = {
    quantity?: true;
  };

  export type InventorySumAggregateInputType = {
    quantity?: true;
  };

  export type InventoryMinAggregateInputType = {
    id?: true;
    tool_id?: true;
    store_id?: true;
    quantity?: true;
    last_updated?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InventoryMaxAggregateInputType = {
    id?: true;
    tool_id?: true;
    store_id?: true;
    quantity?: true;
    last_updated?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InventoryCountAggregateInputType = {
    id?: true;
    tool_id?: true;
    store_id?: true;
    quantity?: true;
    last_updated?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned inventories
     **/
    _count?: true | InventoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InventoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InventorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InventoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InventoryMaxAggregateInputType;
  };

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>;
  };

  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[];
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum;
    having?: inventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryCountAggregateInputType | true;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
  };

  export type InventoryGroupByOutputType = {
    id: string;
    tool_id: string;
    store_id: string;
    quantity: number;
    last_updated: Date;
    created_at: Date;
    updated_at: Date;
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InventoryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
          : GetScalarType<T[P], InventoryGroupByOutputType[P]>;
      }
    >
  >;

  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        tool_id?: boolean;
        store_id?: boolean;
        quantity?: boolean;
        last_updated?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        store?: boolean | storeDefaultArgs<ExtArgs>;
        tool?: boolean | toolDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['inventory']
    >;

  export type inventorySelectScalar = {
    id?: boolean;
    tool_id?: boolean;
    store_id?: boolean;
    quantity?: boolean;
    last_updated?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | storeDefaultArgs<ExtArgs>;
    tool?: boolean | toolDefaultArgs<ExtArgs>;
  };

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'inventory';
    objects: {
      store: Prisma.$storePayload<ExtArgs>;
      tool: Prisma.$toolPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        tool_id: string;
        store_id: string;
        quantity: number;
        last_updated: Date;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['inventory']
    >;
    composites: {};
  };

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<
    Prisma.$inventoryPayload,
    S
  >;

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    inventoryFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: InventoryCountAggregateInputType | true;
  };

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory']; meta: { name: 'inventory' } };
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends inventoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Inventory that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends inventoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     *
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends inventoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     *
     **/
    create<T extends inventoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Inventories.
     *     @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     *     @example
     *     // Create many Inventories
     *     const inventory = await prisma.inventory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends inventoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     *
     **/
    delete<T extends inventoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends inventoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends inventoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends inventoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     **/
    upsert<T extends inventoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
     **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InventoryAggregateArgs>(
      args: Subset<T, InventoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetInventoryAggregateType<T>>;

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the inventory model
     */
    readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    store<T extends storeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, storeDefaultArgs<ExtArgs>>,
    ): Prisma__storeClient<
      $Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    tool<T extends toolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, toolDefaultArgs<ExtArgs>>,
    ): Prisma__toolClient<
      $Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the inventory model
   */
  interface inventoryFieldRefs {
    readonly id: FieldRef<'inventory', 'String'>;
    readonly tool_id: FieldRef<'inventory', 'String'>;
    readonly store_id: FieldRef<'inventory', 'String'>;
    readonly quantity: FieldRef<'inventory', 'Int'>;
    readonly last_updated: FieldRef<'inventory', 'DateTime'>;
    readonly created_at: FieldRef<'inventory', 'DateTime'>;
    readonly updated_at: FieldRef<'inventory', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>;
  };

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>;
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>;
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput;
  };

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput;
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>;
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>;
  };

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput;
  };

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        address?: boolean;
        city?: boolean;
        state?: boolean;
        zip_code?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        store?: boolean | organization$storeArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    store?: boolean | organization$storeArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      store: Prisma.$storePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    store<T extends organization$storeArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$storeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly address: FieldRef<'organization', 'String'>;
    readonly city: FieldRef<'organization', 'String'>;
    readonly state: FieldRef<'organization', 'String'>;
    readonly zip_code: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly user_id: FieldRef<'organization', 'String'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.store
   */
  export type organization$storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    where?: storeWhereInput;
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[];
    cursor?: storeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model rental
   */

  export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null;
    _avg: RentalAvgAggregateOutputType | null;
    _sum: RentalSumAggregateOutputType | null;
    _min: RentalMinAggregateOutputType | null;
    _max: RentalMaxAggregateOutputType | null;
  };

  export type RentalAvgAggregateOutputType = {
    total_price: number | null;
  };

  export type RentalSumAggregateOutputType = {
    total_price: number | null;
  };

  export type RentalMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    tool_id: string | null;
    rental_start_time: Date | null;
    rental_end_time: Date | null;
    total_price: number | null;
    payment_status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RentalMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    tool_id: string | null;
    rental_start_time: Date | null;
    rental_end_time: Date | null;
    total_price: number | null;
    payment_status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RentalCountAggregateOutputType = {
    id: number;
    user_id: number;
    tool_id: number;
    rental_start_time: number;
    rental_end_time: number;
    total_price: number;
    payment_status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RentalAvgAggregateInputType = {
    total_price?: true;
  };

  export type RentalSumAggregateInputType = {
    total_price?: true;
  };

  export type RentalMinAggregateInputType = {
    id?: true;
    user_id?: true;
    tool_id?: true;
    rental_start_time?: true;
    rental_end_time?: true;
    total_price?: true;
    payment_status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RentalMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    tool_id?: true;
    rental_start_time?: true;
    rental_end_time?: true;
    total_price?: true;
    payment_status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RentalCountAggregateInputType = {
    id?: true;
    user_id?: true;
    tool_id?: true;
    rental_start_time?: true;
    rental_end_time?: true;
    total_price?: true;
    payment_status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RentalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rental to aggregate.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned rentals
     **/
    _count?: true | RentalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RentalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RentalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RentalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RentalMaxAggregateInputType;
  };

  export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
    [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRental[P]>
      : GetScalarType<T[P], AggregateRental[P]>;
  };

  export type rentalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithAggregationInput | rentalOrderByWithAggregationInput[];
    by: RentalScalarFieldEnum[] | RentalScalarFieldEnum;
    having?: rentalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RentalCountAggregateInputType | true;
    _avg?: RentalAvgAggregateInputType;
    _sum?: RentalSumAggregateInputType;
    _min?: RentalMinAggregateInputType;
    _max?: RentalMaxAggregateInputType;
  };

  export type RentalGroupByOutputType = {
    id: string;
    user_id: string;
    tool_id: string;
    rental_start_time: Date;
    rental_end_time: Date;
    total_price: number;
    payment_status: string;
    created_at: Date;
    updated_at: Date;
    _count: RentalCountAggregateOutputType | null;
    _avg: RentalAvgAggregateOutputType | null;
    _sum: RentalSumAggregateOutputType | null;
    _min: RentalMinAggregateOutputType | null;
    _max: RentalMaxAggregateOutputType | null;
  };

  type GetRentalGroupByPayload<T extends rentalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RentalGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RentalGroupByOutputType[P]>
          : GetScalarType<T[P], RentalGroupByOutputType[P]>;
      }
    >
  >;

  export type rentalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      tool_id?: boolean;
      rental_start_time?: boolean;
      rental_end_time?: boolean;
      total_price?: boolean;
      payment_status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tool?: boolean | toolDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['rental']
  >;

  export type rentalSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    tool_id?: boolean;
    rental_start_time?: boolean;
    rental_end_time?: boolean;
    total_price?: boolean;
    payment_status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type rentalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | toolDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $rentalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'rental';
    objects: {
      tool: Prisma.$toolPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        tool_id: string;
        rental_start_time: Date;
        rental_end_time: Date;
        total_price: number;
        payment_status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['rental']
    >;
    composites: {};
  };

  type rentalGetPayload<S extends boolean | null | undefined | rentalDefaultArgs> = $Result.GetResult<
    Prisma.$rentalPayload,
    S
  >;

  type rentalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    rentalFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: RentalCountAggregateInputType | true;
  };

  export interface rentalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rental']; meta: { name: 'rental' } };
    /**
     * Find zero or one Rental that matches the filter.
     * @param {rentalFindUniqueArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends rentalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rentalFindUniqueArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Rental that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {rentalFindUniqueOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends rentalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Rental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends rentalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindFirstArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Rental that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends rentalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rental.findMany()
     *
     * // Get first 10 Rentals
     * const rentals = await prisma.rental.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rentalWithIdOnly = await prisma.rental.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends rentalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Rental.
     * @param {rentalCreateArgs} args - Arguments to create a Rental.
     * @example
     * // Create one Rental
     * const Rental = await prisma.rental.create({
     *   data: {
     *     // ... data to create a Rental
     *   }
     * })
     *
     **/
    create<T extends rentalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rentalCreateArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Rentals.
     *     @param {rentalCreateManyArgs} args - Arguments to create many Rentals.
     *     @example
     *     // Create many Rentals
     *     const rental = await prisma.rental.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends rentalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Rental.
     * @param {rentalDeleteArgs} args - Arguments to delete one Rental.
     * @example
     * // Delete one Rental
     * const Rental = await prisma.rental.delete({
     *   where: {
     *     // ... filter to delete one Rental
     *   }
     * })
     *
     **/
    delete<T extends rentalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rentalDeleteArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Rental.
     * @param {rentalUpdateArgs} args - Arguments to update one Rental.
     * @example
     * // Update one Rental
     * const rental = await prisma.rental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends rentalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpdateArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Rentals.
     * @param {rentalDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends rentalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends rentalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Rental.
     * @param {rentalUpsertArgs} args - Arguments to update or create a Rental.
     * @example
     * // Update or create a Rental
     * const rental = await prisma.rental.upsert({
     *   create: {
     *     // ... data to create a Rental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rental we want to update
     *   }
     * })
     **/
    upsert<T extends rentalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpsertArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rental.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
     **/
    count<T extends rentalCountArgs>(
      args?: Subset<T, rentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RentalAggregateArgs>(
      args: Subset<T, RentalAggregateArgs>,
    ): Prisma.PrismaPromise<GetRentalAggregateType<T>>;

    /**
     * Group by Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends rentalGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rentalGroupByArgs['orderBy'] }
        : { orderBy?: rentalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, rentalGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the rental model
     */
    readonly fields: rentalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rentalClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tool<T extends toolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, toolDefaultArgs<ExtArgs>>,
    ): Prisma__toolClient<
      $Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the rental model
   */
  interface rentalFieldRefs {
    readonly id: FieldRef<'rental', 'String'>;
    readonly user_id: FieldRef<'rental', 'String'>;
    readonly tool_id: FieldRef<'rental', 'String'>;
    readonly rental_start_time: FieldRef<'rental', 'DateTime'>;
    readonly rental_end_time: FieldRef<'rental', 'DateTime'>;
    readonly total_price: FieldRef<'rental', 'Int'>;
    readonly payment_status: FieldRef<'rental', 'String'>;
    readonly created_at: FieldRef<'rental', 'DateTime'>;
    readonly updated_at: FieldRef<'rental', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * rental findUnique
   */
  export type rentalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental findUniqueOrThrow
   */
  export type rentalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental findFirst
   */
  export type rentalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental findFirstOrThrow
   */
  export type rentalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental findMany
   */
  export type rentalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rentals to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental create
   */
  export type rentalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The data needed to create a rental.
     */
    data: XOR<rentalCreateInput, rentalUncheckedCreateInput>;
  };

  /**
   * rental createMany
   */
  export type rentalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rentals.
     */
    data: rentalCreateManyInput | rentalCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * rental update
   */
  export type rentalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The data needed to update a rental.
     */
    data: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>;
    /**
     * Choose, which rental to update.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental updateMany
   */
  export type rentalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rentals.
     */
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyInput>;
    /**
     * Filter which rentals to update
     */
    where?: rentalWhereInput;
  };

  /**
   * rental upsert
   */
  export type rentalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The filter to search for the rental to update in case it exists.
     */
    where: rentalWhereUniqueInput;
    /**
     * In case the rental found by the `where` argument doesn't exist, create a new rental with this data.
     */
    create: XOR<rentalCreateInput, rentalUncheckedCreateInput>;
    /**
     * In case the rental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>;
  };

  /**
   * rental delete
   */
  export type rentalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter which rental to delete.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental deleteMany
   */
  export type rentalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rentals to delete
     */
    where?: rentalWhereInput;
  };

  /**
   * rental without action
   */
  export type rentalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
  };

  /**
   * Model store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null;
    _min: StoreMinAggregateOutputType | null;
    _max: StoreMaxAggregateOutputType | null;
  };

  export type StoreMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    location: string | null;
    organization_id: string | null;
    opening_time: Date | null;
    closing_time: Date | null;
    contact_number: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StoreMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    location: string | null;
    organization_id: string | null;
    opening_time: Date | null;
    closing_time: Date | null;
    contact_number: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StoreCountAggregateOutputType = {
    id: number;
    name: number;
    location: number;
    organization_id: number;
    opening_time: number;
    closing_time: number;
    contact_number: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type StoreMinAggregateInputType = {
    id?: true;
    name?: true;
    location?: true;
    organization_id?: true;
    opening_time?: true;
    closing_time?: true;
    contact_number?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StoreMaxAggregateInputType = {
    id?: true;
    name?: true;
    location?: true;
    organization_id?: true;
    opening_time?: true;
    closing_time?: true;
    contact_number?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StoreCountAggregateInputType = {
    id?: true;
    name?: true;
    location?: true;
    organization_id?: true;
    opening_time?: true;
    closing_time?: true;
    contact_number?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which store to aggregate.
     */
    where?: storeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: storeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned stores
     **/
    _count?: true | StoreCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StoreMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StoreMaxAggregateInputType;
  };

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
    [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>;
  };

  export type storeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storeWhereInput;
    orderBy?: storeOrderByWithAggregationInput | storeOrderByWithAggregationInput[];
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum;
    having?: storeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StoreCountAggregateInputType | true;
    _min?: StoreMinAggregateInputType;
    _max?: StoreMaxAggregateInputType;
  };

  export type StoreGroupByOutputType = {
    id: string;
    name: string;
    location: string;
    organization_id: string;
    opening_time: Date;
    closing_time: Date;
    contact_number: string;
    created_at: Date;
    updated_at: Date;
    _count: StoreCountAggregateOutputType | null;
    _min: StoreMinAggregateOutputType | null;
    _max: StoreMaxAggregateOutputType | null;
  };

  type GetStoreGroupByPayload<T extends storeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> & {
        [P in keyof T & keyof StoreGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
          : GetScalarType<T[P], StoreGroupByOutputType[P]>;
      }
    >
  >;

  export type storeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      location?: boolean;
      organization_id?: boolean;
      opening_time?: boolean;
      closing_time?: boolean;
      contact_number?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      inventory?: boolean | store$inventoryArgs<ExtArgs>;
      organization?: boolean | organizationDefaultArgs<ExtArgs>;
      tool?: boolean | store$toolArgs<ExtArgs>;
      _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['store']
  >;

  export type storeSelectScalar = {
    id?: boolean;
    name?: boolean;
    location?: boolean;
    organization_id?: boolean;
    opening_time?: boolean;
    closing_time?: boolean;
    contact_number?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type storeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | store$inventoryArgs<ExtArgs>;
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    tool?: boolean | store$toolArgs<ExtArgs>;
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $storePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'store';
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>;
      tool: Prisma.$toolPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        location: string;
        organization_id: string;
        opening_time: Date;
        closing_time: Date;
        contact_number: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['store']
    >;
    composites: {};
  };

  type storeGetPayload<S extends boolean | null | undefined | storeDefaultArgs> = $Result.GetResult<
    Prisma.$storePayload,
    S
  >;

  type storeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    storeFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: StoreCountAggregateInputType | true;
  };

  export interface storeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['store']; meta: { name: 'store' } };
    /**
     * Find zero or one Store that matches the filter.
     * @param {storeFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends storeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, storeFindUniqueArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Store that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {storeFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends storeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, storeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends storeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, storeFindFirstArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends storeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, storeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     *
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends storeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, storeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Store.
     * @param {storeCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     *
     **/
    create<T extends storeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, storeCreateArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Stores.
     *     @param {storeCreateManyArgs} args - Arguments to create many Stores.
     *     @example
     *     // Create many Stores
     *     const store = await prisma.store.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends storeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, storeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Store.
     * @param {storeDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     *
     **/
    delete<T extends storeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, storeDeleteArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Store.
     * @param {storeUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends storeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, storeUpdateArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Stores.
     * @param {storeDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends storeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, storeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends storeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, storeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Store.
     * @param {storeUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     **/
    upsert<T extends storeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, storeUpsertArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
     **/
    count<T extends storeCountArgs>(
      args?: Subset<T, storeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends StoreAggregateArgs>(
      args: Subset<T, StoreAggregateArgs>,
    ): Prisma.PrismaPromise<GetStoreAggregateType<T>>;

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends storeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storeGroupByArgs['orderBy'] }
        : { orderBy?: storeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, storeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the store model
     */
    readonly fields: storeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    inventory<T extends store$inventoryArgs<ExtArgs> = {}>(
      args?: Subset<T, store$inventoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    tool<T extends store$toolArgs<ExtArgs> = {}>(
      args?: Subset<T, store$toolArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the store model
   */
  interface storeFieldRefs {
    readonly id: FieldRef<'store', 'String'>;
    readonly name: FieldRef<'store', 'String'>;
    readonly location: FieldRef<'store', 'String'>;
    readonly organization_id: FieldRef<'store', 'String'>;
    readonly opening_time: FieldRef<'store', 'DateTime'>;
    readonly closing_time: FieldRef<'store', 'DateTime'>;
    readonly contact_number: FieldRef<'store', 'String'>;
    readonly created_at: FieldRef<'store', 'DateTime'>;
    readonly updated_at: FieldRef<'store', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * store findUnique
   */
  export type storeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput;
  };

  /**
   * store findUniqueOrThrow
   */
  export type storeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput;
  };

  /**
   * store findFirst
   */
  export type storeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[];
  };

  /**
   * store findFirstOrThrow
   */
  export type storeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[];
  };

  /**
   * store findMany
   */
  export type storeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * Filter, which stores to fetch.
     */
    where?: storeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing stores.
     */
    cursor?: storeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stores.
     */
    skip?: number;
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[];
  };

  /**
   * store create
   */
  export type storeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * The data needed to create a store.
     */
    data: XOR<storeCreateInput, storeUncheckedCreateInput>;
  };

  /**
   * store createMany
   */
  export type storeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stores.
     */
    data: storeCreateManyInput | storeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * store update
   */
  export type storeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * The data needed to update a store.
     */
    data: XOR<storeUpdateInput, storeUncheckedUpdateInput>;
    /**
     * Choose, which store to update.
     */
    where: storeWhereUniqueInput;
  };

  /**
   * store updateMany
   */
  export type storeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stores.
     */
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyInput>;
    /**
     * Filter which stores to update
     */
    where?: storeWhereInput;
  };

  /**
   * store upsert
   */
  export type storeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * The filter to search for the store to update in case it exists.
     */
    where: storeWhereUniqueInput;
    /**
     * In case the store found by the `where` argument doesn't exist, create a new store with this data.
     */
    create: XOR<storeCreateInput, storeUncheckedCreateInput>;
    /**
     * In case the store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storeUpdateInput, storeUncheckedUpdateInput>;
  };

  /**
   * store delete
   */
  export type storeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * Filter which store to delete.
     */
    where: storeWhereUniqueInput;
  };

  /**
   * store deleteMany
   */
  export type storeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to delete
     */
    where?: storeWhereInput;
  };

  /**
   * store.inventory
   */
  export type store$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    cursor?: inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * store.tool
   */
  export type store$toolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    where?: toolWhereInput;
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    cursor?: toolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * store without action
   */
  export type storeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
  };

  /**
   * Model tool
   */

  export type AggregateTool = {
    _count: ToolCountAggregateOutputType | null;
    _avg: ToolAvgAggregateOutputType | null;
    _sum: ToolSumAggregateOutputType | null;
    _min: ToolMinAggregateOutputType | null;
    _max: ToolMaxAggregateOutputType | null;
  };

  export type ToolAvgAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type ToolSumAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type ToolMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    brand: string | null;
    price: number | null;
    quantity: number | null;
    store_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ToolMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    brand: string | null;
    price: number | null;
    quantity: number | null;
    store_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ToolCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    brand: number;
    price: number;
    quantity: number;
    store_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ToolAvgAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type ToolSumAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type ToolMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    brand?: true;
    price?: true;
    quantity?: true;
    store_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ToolMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    brand?: true;
    price?: true;
    quantity?: true;
    store_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ToolCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    brand?: true;
    price?: true;
    quantity?: true;
    store_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ToolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tool to aggregate.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tools
     **/
    _count?: true | ToolCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ToolAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ToolSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ToolMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ToolMaxAggregateInputType;
  };

  export type GetToolAggregateType<T extends ToolAggregateArgs> = {
    [P in keyof T & keyof AggregateTool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTool[P]>
      : GetScalarType<T[P], AggregateTool[P]>;
  };

  export type toolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: toolWhereInput;
    orderBy?: toolOrderByWithAggregationInput | toolOrderByWithAggregationInput[];
    by: ToolScalarFieldEnum[] | ToolScalarFieldEnum;
    having?: toolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ToolCountAggregateInputType | true;
    _avg?: ToolAvgAggregateInputType;
    _sum?: ToolSumAggregateInputType;
    _min?: ToolMinAggregateInputType;
    _max?: ToolMaxAggregateInputType;
  };

  export type ToolGroupByOutputType = {
    id: string;
    name: string;
    type: string;
    brand: string;
    price: number;
    quantity: number;
    store_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ToolCountAggregateOutputType | null;
    _avg: ToolAvgAggregateOutputType | null;
    _sum: ToolSumAggregateOutputType | null;
    _min: ToolMinAggregateOutputType | null;
    _max: ToolMaxAggregateOutputType | null;
  };

  type GetToolGroupByPayload<T extends toolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ToolGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ToolGroupByOutputType[P]>
          : GetScalarType<T[P], ToolGroupByOutputType[P]>;
      }
    >
  >;

  export type toolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      brand?: boolean;
      price?: boolean;
      quantity?: boolean;
      store_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      inventory?: boolean | tool$inventoryArgs<ExtArgs>;
      rental?: boolean | tool$rentalArgs<ExtArgs>;
      store?: boolean | storeDefaultArgs<ExtArgs>;
      _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['tool']
  >;

  export type toolSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    brand?: boolean;
    price?: boolean;
    quantity?: boolean;
    store_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type toolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | tool$inventoryArgs<ExtArgs>;
    rental?: boolean | tool$rentalArgs<ExtArgs>;
    store?: boolean | storeDefaultArgs<ExtArgs>;
    _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $toolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'tool';
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs>[];
      rental: Prisma.$rentalPayload<ExtArgs>[];
      store: Prisma.$storePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        type: string;
        brand: string;
        price: number;
        quantity: number;
        store_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['tool']
    >;
    composites: {};
  };

  type toolGetPayload<S extends boolean | null | undefined | toolDefaultArgs> = $Result.GetResult<
    Prisma.$toolPayload,
    S
  >;

  type toolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    toolFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ToolCountAggregateInputType | true;
  };

  export interface toolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tool']; meta: { name: 'tool' } };
    /**
     * Find zero or one Tool that matches the filter.
     * @param {toolFindUniqueArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends toolFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, toolFindUniqueArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Tool that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {toolFindUniqueOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends toolFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Tool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolFindFirstArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends toolFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindFirstArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Tool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolFindFirstOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends toolFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tools
     * const tools = await prisma.tool.findMany()
     *
     * // Get first 10 Tools
     * const tools = await prisma.tool.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const toolWithIdOnly = await prisma.tool.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends toolFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Tool.
     * @param {toolCreateArgs} args - Arguments to create a Tool.
     * @example
     * // Create one Tool
     * const Tool = await prisma.tool.create({
     *   data: {
     *     // ... data to create a Tool
     *   }
     * })
     *
     **/
    create<T extends toolCreateArgs<ExtArgs>>(
      args: SelectSubset<T, toolCreateArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tools.
     *     @param {toolCreateManyArgs} args - Arguments to create many Tools.
     *     @example
     *     // Create many Tools
     *     const tool = await prisma.tool.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends toolCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toolCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Tool.
     * @param {toolDeleteArgs} args - Arguments to delete one Tool.
     * @example
     * // Delete one Tool
     * const Tool = await prisma.tool.delete({
     *   where: {
     *     // ... filter to delete one Tool
     *   }
     * })
     *
     **/
    delete<T extends toolDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, toolDeleteArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Tool.
     * @param {toolUpdateArgs} args - Arguments to update one Tool.
     * @example
     * // Update one Tool
     * const tool = await prisma.tool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends toolUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, toolUpdateArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tools.
     * @param {toolDeleteManyArgs} args - Arguments to filter Tools to delete.
     * @example
     * // Delete a few Tools
     * const { count } = await prisma.tool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends toolDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toolDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tools
     * const tool = await prisma.tool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends toolUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, toolUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Tool.
     * @param {toolUpsertArgs} args - Arguments to update or create a Tool.
     * @example
     * // Update or create a Tool
     * const tool = await prisma.tool.upsert({
     *   create: {
     *     // ... data to create a Tool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tool we want to update
     *   }
     * })
     **/
    upsert<T extends toolUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, toolUpsertArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolCountArgs} args - Arguments to filter Tools to count.
     * @example
     * // Count the number of Tools
     * const count = await prisma.tool.count({
     *   where: {
     *     // ... the filter for the Tools we want to count
     *   }
     * })
     **/
    count<T extends toolCountArgs>(
      args?: Subset<T, toolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ToolAggregateArgs>(
      args: Subset<T, ToolAggregateArgs>,
    ): Prisma.PrismaPromise<GetToolAggregateType<T>>;

    /**
     * Group by Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends toolGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: toolGroupByArgs['orderBy'] }
        : { orderBy?: toolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, toolGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetToolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tool model
     */
    readonly fields: toolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__toolClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    inventory<T extends tool$inventoryArgs<ExtArgs> = {}>(
      args?: Subset<T, tool$inventoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    rental<T extends tool$rentalArgs<ExtArgs> = {}>(
      args?: Subset<T, tool$rentalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'> | Null>;

    store<T extends storeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, storeDefaultArgs<ExtArgs>>,
    ): Prisma__storeClient<
      $Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the tool model
   */
  interface toolFieldRefs {
    readonly id: FieldRef<'tool', 'String'>;
    readonly name: FieldRef<'tool', 'String'>;
    readonly type: FieldRef<'tool', 'String'>;
    readonly brand: FieldRef<'tool', 'String'>;
    readonly price: FieldRef<'tool', 'Int'>;
    readonly quantity: FieldRef<'tool', 'Int'>;
    readonly store_id: FieldRef<'tool', 'String'>;
    readonly created_at: FieldRef<'tool', 'DateTime'>;
    readonly updated_at: FieldRef<'tool', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * tool findUnique
   */
  export type toolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool findUniqueOrThrow
   */
  export type toolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool findFirst
   */
  export type toolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tools.
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * tool findFirstOrThrow
   */
  export type toolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tools.
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * tool findMany
   */
  export type toolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tools to fetch.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tools.
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * tool create
   */
  export type toolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * The data needed to create a tool.
     */
    data: XOR<toolCreateInput, toolUncheckedCreateInput>;
  };

  /**
   * tool createMany
   */
  export type toolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tools.
     */
    data: toolCreateManyInput | toolCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * tool update
   */
  export type toolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * The data needed to update a tool.
     */
    data: XOR<toolUpdateInput, toolUncheckedUpdateInput>;
    /**
     * Choose, which tool to update.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool updateMany
   */
  export type toolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tools.
     */
    data: XOR<toolUpdateManyMutationInput, toolUncheckedUpdateManyInput>;
    /**
     * Filter which tools to update
     */
    where?: toolWhereInput;
  };

  /**
   * tool upsert
   */
  export type toolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * The filter to search for the tool to update in case it exists.
     */
    where: toolWhereUniqueInput;
    /**
     * In case the tool found by the `where` argument doesn't exist, create a new tool with this data.
     */
    create: XOR<toolCreateInput, toolUncheckedCreateInput>;
    /**
     * In case the tool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<toolUpdateInput, toolUncheckedUpdateInput>;
  };

  /**
   * tool delete
   */
  export type toolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter which tool to delete.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool deleteMany
   */
  export type toolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tools to delete
     */
    where?: toolWhereInput;
  };

  /**
   * tool.inventory
   */
  export type tool$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    cursor?: inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * tool.rental
   */
  export type tool$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    cursor?: rentalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * tool without action
   */
  export type toolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      rental?: boolean | user$rentalArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | user$organizationArgs<ExtArgs>;
    rental?: boolean | user$rentalArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>[];
      rental: Prisma.$rentalPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'> | Null>;

    rental<T extends user$rentalArgs<ExtArgs> = {}>(
      args?: Subset<T, user$rentalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    cursor?: organizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * user.rental
   */
  export type user$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    cursor?: rentalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const InventoryScalarFieldEnum: {
    id: 'id';
    tool_id: 'tool_id';
    store_id: 'store_id';
    quantity: 'quantity';
    last_updated: 'last_updated';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const RentalScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    tool_id: 'tool_id';
    rental_start_time: 'rental_start_time';
    rental_end_time: 'rental_end_time';
    total_price: 'total_price';
    payment_status: 'payment_status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum];

  export const StoreScalarFieldEnum: {
    id: 'id';
    name: 'name';
    location: 'location';
    organization_id: 'organization_id';
    opening_time: 'opening_time';
    closing_time: 'closing_time';
    contact_number: 'contact_number';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum];

  export const ToolScalarFieldEnum: {
    id: 'id';
    name: 'name';
    type: 'type';
    brand: 'brand';
    price: 'price';
    quantity: 'quantity';
    store_id: 'store_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ToolScalarFieldEnum = (typeof ToolScalarFieldEnum)[keyof typeof ToolScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[];
    OR?: inventoryWhereInput[];
    NOT?: inventoryWhereInput | inventoryWhereInput[];
    id?: UuidFilter<'inventory'> | string;
    tool_id?: UuidFilter<'inventory'> | string;
    store_id?: UuidFilter<'inventory'> | string;
    quantity?: IntFilter<'inventory'> | number;
    last_updated?: DateTimeFilter<'inventory'> | Date | string;
    created_at?: DateTimeFilter<'inventory'> | Date | string;
    updated_at?: DateTimeFilter<'inventory'> | Date | string;
    store?: XOR<StoreRelationFilter, storeWhereInput>;
    tool?: XOR<ToolRelationFilter, toolWhereInput>;
  };

  export type inventoryOrderByWithRelationInput = {
    id?: SortOrder;
    tool_id?: SortOrder;
    store_id?: SortOrder;
    quantity?: SortOrder;
    last_updated?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    store?: storeOrderByWithRelationInput;
    tool?: toolOrderByWithRelationInput;
  };

  export type inventoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: inventoryWhereInput | inventoryWhereInput[];
      OR?: inventoryWhereInput[];
      NOT?: inventoryWhereInput | inventoryWhereInput[];
      tool_id?: UuidFilter<'inventory'> | string;
      store_id?: UuidFilter<'inventory'> | string;
      quantity?: IntFilter<'inventory'> | number;
      last_updated?: DateTimeFilter<'inventory'> | Date | string;
      created_at?: DateTimeFilter<'inventory'> | Date | string;
      updated_at?: DateTimeFilter<'inventory'> | Date | string;
      store?: XOR<StoreRelationFilter, storeWhereInput>;
      tool?: XOR<ToolRelationFilter, toolWhereInput>;
    },
    'id'
  >;

  export type inventoryOrderByWithAggregationInput = {
    id?: SortOrder;
    tool_id?: SortOrder;
    store_id?: SortOrder;
    quantity?: SortOrder;
    last_updated?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: inventoryCountOrderByAggregateInput;
    _avg?: inventoryAvgOrderByAggregateInput;
    _max?: inventoryMaxOrderByAggregateInput;
    _min?: inventoryMinOrderByAggregateInput;
    _sum?: inventorySumOrderByAggregateInput;
  };

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[];
    OR?: inventoryScalarWhereWithAggregatesInput[];
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'inventory'> | string;
    tool_id?: UuidWithAggregatesFilter<'inventory'> | string;
    store_id?: UuidWithAggregatesFilter<'inventory'> | string;
    quantity?: IntWithAggregatesFilter<'inventory'> | number;
    last_updated?: DateTimeWithAggregatesFilter<'inventory'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'inventory'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'inventory'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    address?: StringNullableFilter<'organization'> | string | null;
    city?: StringNullableFilter<'organization'> | string | null;
    state?: StringNullableFilter<'organization'> | string | null;
    zip_code?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    store?: StoreListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    store?: storeOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      address?: StringNullableFilter<'organization'> | string | null;
      city?: StringNullableFilter<'organization'> | string | null;
      state?: StringNullableFilter<'organization'> | string | null;
      zip_code?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user_id?: UuidFilter<'organization'> | string;
      tenant_id?: StringFilter<'organization'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      store?: StoreListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    address?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    city?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    state?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    zip_code?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'organization'> | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type rentalWhereInput = {
    AND?: rentalWhereInput | rentalWhereInput[];
    OR?: rentalWhereInput[];
    NOT?: rentalWhereInput | rentalWhereInput[];
    id?: UuidFilter<'rental'> | string;
    user_id?: UuidFilter<'rental'> | string;
    tool_id?: UuidFilter<'rental'> | string;
    rental_start_time?: DateTimeFilter<'rental'> | Date | string;
    rental_end_time?: DateTimeFilter<'rental'> | Date | string;
    total_price?: IntFilter<'rental'> | number;
    payment_status?: StringFilter<'rental'> | string;
    created_at?: DateTimeFilter<'rental'> | Date | string;
    updated_at?: DateTimeFilter<'rental'> | Date | string;
    tool?: XOR<ToolRelationFilter, toolWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type rentalOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    tool_id?: SortOrder;
    rental_start_time?: SortOrder;
    rental_end_time?: SortOrder;
    total_price?: SortOrder;
    payment_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tool?: toolOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type rentalWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: rentalWhereInput | rentalWhereInput[];
      OR?: rentalWhereInput[];
      NOT?: rentalWhereInput | rentalWhereInput[];
      user_id?: UuidFilter<'rental'> | string;
      tool_id?: UuidFilter<'rental'> | string;
      rental_start_time?: DateTimeFilter<'rental'> | Date | string;
      rental_end_time?: DateTimeFilter<'rental'> | Date | string;
      total_price?: IntFilter<'rental'> | number;
      payment_status?: StringFilter<'rental'> | string;
      created_at?: DateTimeFilter<'rental'> | Date | string;
      updated_at?: DateTimeFilter<'rental'> | Date | string;
      tool?: XOR<ToolRelationFilter, toolWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type rentalOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    tool_id?: SortOrder;
    rental_start_time?: SortOrder;
    rental_end_time?: SortOrder;
    total_price?: SortOrder;
    payment_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: rentalCountOrderByAggregateInput;
    _avg?: rentalAvgOrderByAggregateInput;
    _max?: rentalMaxOrderByAggregateInput;
    _min?: rentalMinOrderByAggregateInput;
    _sum?: rentalSumOrderByAggregateInput;
  };

  export type rentalScalarWhereWithAggregatesInput = {
    AND?: rentalScalarWhereWithAggregatesInput | rentalScalarWhereWithAggregatesInput[];
    OR?: rentalScalarWhereWithAggregatesInput[];
    NOT?: rentalScalarWhereWithAggregatesInput | rentalScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'rental'> | string;
    user_id?: UuidWithAggregatesFilter<'rental'> | string;
    tool_id?: UuidWithAggregatesFilter<'rental'> | string;
    rental_start_time?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
    rental_end_time?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
    total_price?: IntWithAggregatesFilter<'rental'> | number;
    payment_status?: StringWithAggregatesFilter<'rental'> | string;
    created_at?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
  };

  export type storeWhereInput = {
    AND?: storeWhereInput | storeWhereInput[];
    OR?: storeWhereInput[];
    NOT?: storeWhereInput | storeWhereInput[];
    id?: UuidFilter<'store'> | string;
    name?: StringFilter<'store'> | string;
    location?: StringFilter<'store'> | string;
    organization_id?: UuidFilter<'store'> | string;
    opening_time?: DateTimeFilter<'store'> | Date | string;
    closing_time?: DateTimeFilter<'store'> | Date | string;
    contact_number?: StringFilter<'store'> | string;
    created_at?: DateTimeFilter<'store'> | Date | string;
    updated_at?: DateTimeFilter<'store'> | Date | string;
    inventory?: InventoryListRelationFilter;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    tool?: ToolListRelationFilter;
  };

  export type storeOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    organization_id?: SortOrder;
    opening_time?: SortOrder;
    closing_time?: SortOrder;
    contact_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    inventory?: inventoryOrderByRelationAggregateInput;
    organization?: organizationOrderByWithRelationInput;
    tool?: toolOrderByRelationAggregateInput;
  };

  export type storeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: storeWhereInput | storeWhereInput[];
      OR?: storeWhereInput[];
      NOT?: storeWhereInput | storeWhereInput[];
      name?: StringFilter<'store'> | string;
      location?: StringFilter<'store'> | string;
      organization_id?: UuidFilter<'store'> | string;
      opening_time?: DateTimeFilter<'store'> | Date | string;
      closing_time?: DateTimeFilter<'store'> | Date | string;
      contact_number?: StringFilter<'store'> | string;
      created_at?: DateTimeFilter<'store'> | Date | string;
      updated_at?: DateTimeFilter<'store'> | Date | string;
      inventory?: InventoryListRelationFilter;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      tool?: ToolListRelationFilter;
    },
    'id'
  >;

  export type storeOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    organization_id?: SortOrder;
    opening_time?: SortOrder;
    closing_time?: SortOrder;
    contact_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: storeCountOrderByAggregateInput;
    _max?: storeMaxOrderByAggregateInput;
    _min?: storeMinOrderByAggregateInput;
  };

  export type storeScalarWhereWithAggregatesInput = {
    AND?: storeScalarWhereWithAggregatesInput | storeScalarWhereWithAggregatesInput[];
    OR?: storeScalarWhereWithAggregatesInput[];
    NOT?: storeScalarWhereWithAggregatesInput | storeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'store'> | string;
    name?: StringWithAggregatesFilter<'store'> | string;
    location?: StringWithAggregatesFilter<'store'> | string;
    organization_id?: UuidWithAggregatesFilter<'store'> | string;
    opening_time?: DateTimeWithAggregatesFilter<'store'> | Date | string;
    closing_time?: DateTimeWithAggregatesFilter<'store'> | Date | string;
    contact_number?: StringWithAggregatesFilter<'store'> | string;
    created_at?: DateTimeWithAggregatesFilter<'store'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'store'> | Date | string;
  };

  export type toolWhereInput = {
    AND?: toolWhereInput | toolWhereInput[];
    OR?: toolWhereInput[];
    NOT?: toolWhereInput | toolWhereInput[];
    id?: UuidFilter<'tool'> | string;
    name?: StringFilter<'tool'> | string;
    type?: StringFilter<'tool'> | string;
    brand?: StringFilter<'tool'> | string;
    price?: IntFilter<'tool'> | number;
    quantity?: IntFilter<'tool'> | number;
    store_id?: UuidFilter<'tool'> | string;
    created_at?: DateTimeFilter<'tool'> | Date | string;
    updated_at?: DateTimeFilter<'tool'> | Date | string;
    inventory?: InventoryListRelationFilter;
    rental?: RentalListRelationFilter;
    store?: XOR<StoreRelationFilter, storeWhereInput>;
  };

  export type toolOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    brand?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    store_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    inventory?: inventoryOrderByRelationAggregateInput;
    rental?: rentalOrderByRelationAggregateInput;
    store?: storeOrderByWithRelationInput;
  };

  export type toolWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: toolWhereInput | toolWhereInput[];
      OR?: toolWhereInput[];
      NOT?: toolWhereInput | toolWhereInput[];
      name?: StringFilter<'tool'> | string;
      type?: StringFilter<'tool'> | string;
      brand?: StringFilter<'tool'> | string;
      price?: IntFilter<'tool'> | number;
      quantity?: IntFilter<'tool'> | number;
      store_id?: UuidFilter<'tool'> | string;
      created_at?: DateTimeFilter<'tool'> | Date | string;
      updated_at?: DateTimeFilter<'tool'> | Date | string;
      inventory?: InventoryListRelationFilter;
      rental?: RentalListRelationFilter;
      store?: XOR<StoreRelationFilter, storeWhereInput>;
    },
    'id'
  >;

  export type toolOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    brand?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    store_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: toolCountOrderByAggregateInput;
    _avg?: toolAvgOrderByAggregateInput;
    _max?: toolMaxOrderByAggregateInput;
    _min?: toolMinOrderByAggregateInput;
    _sum?: toolSumOrderByAggregateInput;
  };

  export type toolScalarWhereWithAggregatesInput = {
    AND?: toolScalarWhereWithAggregatesInput | toolScalarWhereWithAggregatesInput[];
    OR?: toolScalarWhereWithAggregatesInput[];
    NOT?: toolScalarWhereWithAggregatesInput | toolScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'tool'> | string;
    name?: StringWithAggregatesFilter<'tool'> | string;
    type?: StringWithAggregatesFilter<'tool'> | string;
    brand?: StringWithAggregatesFilter<'tool'> | string;
    price?: IntWithAggregatesFilter<'tool'> | number;
    quantity?: IntWithAggregatesFilter<'tool'> | number;
    store_id?: UuidWithAggregatesFilter<'tool'> | string;
    created_at?: DateTimeWithAggregatesFilter<'tool'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'tool'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    organization?: OrganizationListRelationFilter;
    rental?: RentalListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByRelationAggregateInput;
    rental?: rentalOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      organization?: OrganizationListRelationFilter;
      rental?: RentalListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type inventoryCreateInput = {
    id?: string;
    quantity: number;
    last_updated: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    store: storeCreateNestedOneWithoutInventoryInput;
    tool: toolCreateNestedOneWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateInput = {
    id?: string;
    tool_id: string;
    store_id: string;
    quantity: number;
    last_updated: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    store?: storeUpdateOneRequiredWithoutInventoryNestedInput;
    tool?: toolUpdateOneRequiredWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    store_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryCreateManyInput = {
    id?: string;
    tool_id: string;
    store_id: string;
    quantity: number;
    last_updated: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    store_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOrganizationInput;
    store?: storeCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    store?: storeUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    store?: storeUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    store?: storeUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type rentalCreateInput = {
    id?: string;
    rental_start_time: Date | string;
    rental_end_time: Date | string;
    total_price: number;
    payment_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tool: toolCreateNestedOneWithoutRentalInput;
    user: userCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateInput = {
    id?: string;
    user_id: string;
    tool_id: string;
    rental_start_time: Date | string;
    rental_end_time: Date | string;
    total_price: number;
    payment_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rental_start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental_end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    payment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tool?: toolUpdateOneRequiredWithoutRentalNestedInput;
    user?: userUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    rental_start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental_end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    payment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalCreateManyInput = {
    id?: string;
    user_id: string;
    tool_id: string;
    rental_start_time: Date | string;
    rental_end_time: Date | string;
    total_price: number;
    payment_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rental_start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental_end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    payment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    rental_start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental_end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    payment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type storeCreateInput = {
    id?: string;
    name: string;
    location: string;
    opening_time: Date | string;
    closing_time: Date | string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryCreateNestedManyWithoutStoreInput;
    organization: organizationCreateNestedOneWithoutStoreInput;
    tool?: toolCreateNestedManyWithoutStoreInput;
  };

  export type storeUncheckedCreateInput = {
    id?: string;
    name: string;
    location: string;
    organization_id: string;
    opening_time: Date | string;
    closing_time: Date | string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutStoreInput;
    tool?: toolUncheckedCreateNestedManyWithoutStoreInput;
  };

  export type storeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    opening_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateManyWithoutStoreNestedInput;
    organization?: organizationUpdateOneRequiredWithoutStoreNestedInput;
    tool?: toolUpdateManyWithoutStoreNestedInput;
  };

  export type storeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    opening_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUncheckedUpdateManyWithoutStoreNestedInput;
    tool?: toolUncheckedUpdateManyWithoutStoreNestedInput;
  };

  export type storeCreateManyInput = {
    id?: string;
    name: string;
    location: string;
    organization_id: string;
    opening_time: Date | string;
    closing_time: Date | string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type storeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    opening_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type storeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    opening_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toolCreateInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryCreateNestedManyWithoutToolInput;
    rental?: rentalCreateNestedManyWithoutToolInput;
    store: storeCreateNestedOneWithoutToolInput;
  };

  export type toolUncheckedCreateInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    price: number;
    quantity: number;
    store_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutToolInput;
    rental?: rentalUncheckedCreateNestedManyWithoutToolInput;
  };

  export type toolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateManyWithoutToolNestedInput;
    rental?: rentalUpdateManyWithoutToolNestedInput;
    store?: storeUpdateOneRequiredWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    store_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUncheckedUpdateManyWithoutToolNestedInput;
    rental?: rentalUncheckedUpdateManyWithoutToolNestedInput;
  };

  export type toolCreateManyInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    price: number;
    quantity: number;
    store_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type toolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    store_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationCreateNestedManyWithoutUserInput;
    rental?: rentalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    rental?: rentalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StoreRelationFilter = {
    is?: storeWhereInput;
    isNot?: storeWhereInput;
  };

  export type ToolRelationFilter = {
    is?: toolWhereInput;
    isNot?: toolWhereInput;
  };

  export type inventoryCountOrderByAggregateInput = {
    id?: SortOrder;
    tool_id?: SortOrder;
    store_id?: SortOrder;
    quantity?: SortOrder;
    last_updated?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type inventoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    tool_id?: SortOrder;
    store_id?: SortOrder;
    quantity?: SortOrder;
    last_updated?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventoryMinOrderByAggregateInput = {
    id?: SortOrder;
    tool_id?: SortOrder;
    store_id?: SortOrder;
    quantity?: SortOrder;
    last_updated?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventorySumOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type StoreListRelationFilter = {
    every?: storeWhereInput;
    some?: storeWhereInput;
    none?: storeWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type storeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type rentalCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    tool_id?: SortOrder;
    rental_start_time?: SortOrder;
    rental_end_time?: SortOrder;
    total_price?: SortOrder;
    payment_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalAvgOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type rentalMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    tool_id?: SortOrder;
    rental_start_time?: SortOrder;
    rental_end_time?: SortOrder;
    total_price?: SortOrder;
    payment_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    tool_id?: SortOrder;
    rental_start_time?: SortOrder;
    rental_end_time?: SortOrder;
    total_price?: SortOrder;
    payment_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalSumOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type InventoryListRelationFilter = {
    every?: inventoryWhereInput;
    some?: inventoryWhereInput;
    none?: inventoryWhereInput;
  };

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput;
    isNot?: organizationWhereInput;
  };

  export type ToolListRelationFilter = {
    every?: toolWhereInput;
    some?: toolWhereInput;
    none?: toolWhereInput;
  };

  export type inventoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type toolOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type storeCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    organization_id?: SortOrder;
    opening_time?: SortOrder;
    closing_time?: SortOrder;
    contact_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type storeMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    organization_id?: SortOrder;
    opening_time?: SortOrder;
    closing_time?: SortOrder;
    contact_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type storeMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    organization_id?: SortOrder;
    opening_time?: SortOrder;
    closing_time?: SortOrder;
    contact_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type RentalListRelationFilter = {
    every?: rentalWhereInput;
    some?: rentalWhereInput;
    none?: rentalWhereInput;
  };

  export type rentalOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type toolCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    brand?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    store_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toolAvgOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type toolMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    brand?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    store_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toolMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    brand?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    store_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toolSumOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput;
    some?: organizationWhereInput;
    none?: organizationWhereInput;
  };

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type storeCreateNestedOneWithoutInventoryInput = {
    create?: XOR<storeCreateWithoutInventoryInput, storeUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: storeCreateOrConnectWithoutInventoryInput;
    connect?: storeWhereUniqueInput;
  };

  export type toolCreateNestedOneWithoutInventoryInput = {
    create?: XOR<toolCreateWithoutInventoryInput, toolUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: toolCreateOrConnectWithoutInventoryInput;
    connect?: toolWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type storeUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<storeCreateWithoutInventoryInput, storeUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: storeCreateOrConnectWithoutInventoryInput;
    upsert?: storeUpsertWithoutInventoryInput;
    connect?: storeWhereUniqueInput;
    update?: XOR<
      XOR<storeUpdateToOneWithWhereWithoutInventoryInput, storeUpdateWithoutInventoryInput>,
      storeUncheckedUpdateWithoutInventoryInput
    >;
  };

  export type toolUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<toolCreateWithoutInventoryInput, toolUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: toolCreateOrConnectWithoutInventoryInput;
    upsert?: toolUpsertWithoutInventoryInput;
    connect?: toolWhereUniqueInput;
    update?: XOR<
      XOR<toolUpdateToOneWithWhereWithoutInventoryInput, toolUpdateWithoutInventoryInput>,
      toolUncheckedUpdateWithoutInventoryInput
    >;
  };

  export type userCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
  };

  export type storeCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<storeCreateWithoutOrganizationInput, storeUncheckedCreateWithoutOrganizationInput>
      | storeCreateWithoutOrganizationInput[]
      | storeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: storeCreateOrConnectWithoutOrganizationInput | storeCreateOrConnectWithoutOrganizationInput[];
    createMany?: storeCreateManyOrganizationInputEnvelope;
    connect?: storeWhereUniqueInput | storeWhereUniqueInput[];
  };

  export type storeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<storeCreateWithoutOrganizationInput, storeUncheckedCreateWithoutOrganizationInput>
      | storeCreateWithoutOrganizationInput[]
      | storeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: storeCreateOrConnectWithoutOrganizationInput | storeCreateOrConnectWithoutOrganizationInput[];
    createMany?: storeCreateManyOrganizationInputEnvelope;
    connect?: storeWhereUniqueInput | storeWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    upsert?: userUpsertWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrganizationInput, userUpdateWithoutOrganizationInput>,
      userUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type storeUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<storeCreateWithoutOrganizationInput, storeUncheckedCreateWithoutOrganizationInput>
      | storeCreateWithoutOrganizationInput[]
      | storeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: storeCreateOrConnectWithoutOrganizationInput | storeCreateOrConnectWithoutOrganizationInput[];
    upsert?: storeUpsertWithWhereUniqueWithoutOrganizationInput | storeUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: storeCreateManyOrganizationInputEnvelope;
    set?: storeWhereUniqueInput | storeWhereUniqueInput[];
    disconnect?: storeWhereUniqueInput | storeWhereUniqueInput[];
    delete?: storeWhereUniqueInput | storeWhereUniqueInput[];
    connect?: storeWhereUniqueInput | storeWhereUniqueInput[];
    update?: storeUpdateWithWhereUniqueWithoutOrganizationInput | storeUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: storeUpdateManyWithWhereWithoutOrganizationInput | storeUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: storeScalarWhereInput | storeScalarWhereInput[];
  };

  export type storeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<storeCreateWithoutOrganizationInput, storeUncheckedCreateWithoutOrganizationInput>
      | storeCreateWithoutOrganizationInput[]
      | storeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: storeCreateOrConnectWithoutOrganizationInput | storeCreateOrConnectWithoutOrganizationInput[];
    upsert?: storeUpsertWithWhereUniqueWithoutOrganizationInput | storeUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: storeCreateManyOrganizationInputEnvelope;
    set?: storeWhereUniqueInput | storeWhereUniqueInput[];
    disconnect?: storeWhereUniqueInput | storeWhereUniqueInput[];
    delete?: storeWhereUniqueInput | storeWhereUniqueInput[];
    connect?: storeWhereUniqueInput | storeWhereUniqueInput[];
    update?: storeUpdateWithWhereUniqueWithoutOrganizationInput | storeUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: storeUpdateManyWithWhereWithoutOrganizationInput | storeUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: storeScalarWhereInput | storeScalarWhereInput[];
  };

  export type toolCreateNestedOneWithoutRentalInput = {
    create?: XOR<toolCreateWithoutRentalInput, toolUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: toolCreateOrConnectWithoutRentalInput;
    connect?: toolWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutRentalInput = {
    create?: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: userCreateOrConnectWithoutRentalInput;
    connect?: userWhereUniqueInput;
  };

  export type toolUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<toolCreateWithoutRentalInput, toolUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: toolCreateOrConnectWithoutRentalInput;
    upsert?: toolUpsertWithoutRentalInput;
    connect?: toolWhereUniqueInput;
    update?: XOR<
      XOR<toolUpdateToOneWithWhereWithoutRentalInput, toolUpdateWithoutRentalInput>,
      toolUncheckedUpdateWithoutRentalInput
    >;
  };

  export type userUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: userCreateOrConnectWithoutRentalInput;
    upsert?: userUpsertWithoutRentalInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutRentalInput, userUpdateWithoutRentalInput>,
      userUncheckedUpdateWithoutRentalInput
    >;
  };

  export type inventoryCreateNestedManyWithoutStoreInput = {
    create?:
      | XOR<inventoryCreateWithoutStoreInput, inventoryUncheckedCreateWithoutStoreInput>
      | inventoryCreateWithoutStoreInput[]
      | inventoryUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutStoreInput | inventoryCreateOrConnectWithoutStoreInput[];
    createMany?: inventoryCreateManyStoreInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type organizationCreateNestedOneWithoutStoreInput = {
    create?: XOR<organizationCreateWithoutStoreInput, organizationUncheckedCreateWithoutStoreInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutStoreInput;
    connect?: organizationWhereUniqueInput;
  };

  export type toolCreateNestedManyWithoutStoreInput = {
    create?:
      | XOR<toolCreateWithoutStoreInput, toolUncheckedCreateWithoutStoreInput>
      | toolCreateWithoutStoreInput[]
      | toolUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: toolCreateOrConnectWithoutStoreInput | toolCreateOrConnectWithoutStoreInput[];
    createMany?: toolCreateManyStoreInputEnvelope;
    connect?: toolWhereUniqueInput | toolWhereUniqueInput[];
  };

  export type inventoryUncheckedCreateNestedManyWithoutStoreInput = {
    create?:
      | XOR<inventoryCreateWithoutStoreInput, inventoryUncheckedCreateWithoutStoreInput>
      | inventoryCreateWithoutStoreInput[]
      | inventoryUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutStoreInput | inventoryCreateOrConnectWithoutStoreInput[];
    createMany?: inventoryCreateManyStoreInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type toolUncheckedCreateNestedManyWithoutStoreInput = {
    create?:
      | XOR<toolCreateWithoutStoreInput, toolUncheckedCreateWithoutStoreInput>
      | toolCreateWithoutStoreInput[]
      | toolUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: toolCreateOrConnectWithoutStoreInput | toolCreateOrConnectWithoutStoreInput[];
    createMany?: toolCreateManyStoreInputEnvelope;
    connect?: toolWhereUniqueInput | toolWhereUniqueInput[];
  };

  export type inventoryUpdateManyWithoutStoreNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutStoreInput, inventoryUncheckedCreateWithoutStoreInput>
      | inventoryCreateWithoutStoreInput[]
      | inventoryUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutStoreInput | inventoryCreateOrConnectWithoutStoreInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutStoreInput | inventoryUpsertWithWhereUniqueWithoutStoreInput[];
    createMany?: inventoryCreateManyStoreInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutStoreInput | inventoryUpdateWithWhereUniqueWithoutStoreInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutStoreInput | inventoryUpdateManyWithWhereWithoutStoreInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type organizationUpdateOneRequiredWithoutStoreNestedInput = {
    create?: XOR<organizationCreateWithoutStoreInput, organizationUncheckedCreateWithoutStoreInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutStoreInput;
    upsert?: organizationUpsertWithoutStoreInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutStoreInput, organizationUpdateWithoutStoreInput>,
      organizationUncheckedUpdateWithoutStoreInput
    >;
  };

  export type toolUpdateManyWithoutStoreNestedInput = {
    create?:
      | XOR<toolCreateWithoutStoreInput, toolUncheckedCreateWithoutStoreInput>
      | toolCreateWithoutStoreInput[]
      | toolUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: toolCreateOrConnectWithoutStoreInput | toolCreateOrConnectWithoutStoreInput[];
    upsert?: toolUpsertWithWhereUniqueWithoutStoreInput | toolUpsertWithWhereUniqueWithoutStoreInput[];
    createMany?: toolCreateManyStoreInputEnvelope;
    set?: toolWhereUniqueInput | toolWhereUniqueInput[];
    disconnect?: toolWhereUniqueInput | toolWhereUniqueInput[];
    delete?: toolWhereUniqueInput | toolWhereUniqueInput[];
    connect?: toolWhereUniqueInput | toolWhereUniqueInput[];
    update?: toolUpdateWithWhereUniqueWithoutStoreInput | toolUpdateWithWhereUniqueWithoutStoreInput[];
    updateMany?: toolUpdateManyWithWhereWithoutStoreInput | toolUpdateManyWithWhereWithoutStoreInput[];
    deleteMany?: toolScalarWhereInput | toolScalarWhereInput[];
  };

  export type inventoryUncheckedUpdateManyWithoutStoreNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutStoreInput, inventoryUncheckedCreateWithoutStoreInput>
      | inventoryCreateWithoutStoreInput[]
      | inventoryUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutStoreInput | inventoryCreateOrConnectWithoutStoreInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutStoreInput | inventoryUpsertWithWhereUniqueWithoutStoreInput[];
    createMany?: inventoryCreateManyStoreInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutStoreInput | inventoryUpdateWithWhereUniqueWithoutStoreInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutStoreInput | inventoryUpdateManyWithWhereWithoutStoreInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type toolUncheckedUpdateManyWithoutStoreNestedInput = {
    create?:
      | XOR<toolCreateWithoutStoreInput, toolUncheckedCreateWithoutStoreInput>
      | toolCreateWithoutStoreInput[]
      | toolUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: toolCreateOrConnectWithoutStoreInput | toolCreateOrConnectWithoutStoreInput[];
    upsert?: toolUpsertWithWhereUniqueWithoutStoreInput | toolUpsertWithWhereUniqueWithoutStoreInput[];
    createMany?: toolCreateManyStoreInputEnvelope;
    set?: toolWhereUniqueInput | toolWhereUniqueInput[];
    disconnect?: toolWhereUniqueInput | toolWhereUniqueInput[];
    delete?: toolWhereUniqueInput | toolWhereUniqueInput[];
    connect?: toolWhereUniqueInput | toolWhereUniqueInput[];
    update?: toolUpdateWithWhereUniqueWithoutStoreInput | toolUpdateWithWhereUniqueWithoutStoreInput[];
    updateMany?: toolUpdateManyWithWhereWithoutStoreInput | toolUpdateManyWithWhereWithoutStoreInput[];
    deleteMany?: toolScalarWhereInput | toolScalarWhereInput[];
  };

  export type inventoryCreateNestedManyWithoutToolInput = {
    create?:
      | XOR<inventoryCreateWithoutToolInput, inventoryUncheckedCreateWithoutToolInput>
      | inventoryCreateWithoutToolInput[]
      | inventoryUncheckedCreateWithoutToolInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutToolInput | inventoryCreateOrConnectWithoutToolInput[];
    createMany?: inventoryCreateManyToolInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type rentalCreateNestedManyWithoutToolInput = {
    create?:
      | XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>
      | rentalCreateWithoutToolInput[]
      | rentalUncheckedCreateWithoutToolInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutToolInput | rentalCreateOrConnectWithoutToolInput[];
    createMany?: rentalCreateManyToolInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type storeCreateNestedOneWithoutToolInput = {
    create?: XOR<storeCreateWithoutToolInput, storeUncheckedCreateWithoutToolInput>;
    connectOrCreate?: storeCreateOrConnectWithoutToolInput;
    connect?: storeWhereUniqueInput;
  };

  export type inventoryUncheckedCreateNestedManyWithoutToolInput = {
    create?:
      | XOR<inventoryCreateWithoutToolInput, inventoryUncheckedCreateWithoutToolInput>
      | inventoryCreateWithoutToolInput[]
      | inventoryUncheckedCreateWithoutToolInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutToolInput | inventoryCreateOrConnectWithoutToolInput[];
    createMany?: inventoryCreateManyToolInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type rentalUncheckedCreateNestedManyWithoutToolInput = {
    create?:
      | XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>
      | rentalCreateWithoutToolInput[]
      | rentalUncheckedCreateWithoutToolInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutToolInput | rentalCreateOrConnectWithoutToolInput[];
    createMany?: rentalCreateManyToolInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type inventoryUpdateManyWithoutToolNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutToolInput, inventoryUncheckedCreateWithoutToolInput>
      | inventoryCreateWithoutToolInput[]
      | inventoryUncheckedCreateWithoutToolInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutToolInput | inventoryCreateOrConnectWithoutToolInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutToolInput | inventoryUpsertWithWhereUniqueWithoutToolInput[];
    createMany?: inventoryCreateManyToolInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutToolInput | inventoryUpdateWithWhereUniqueWithoutToolInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutToolInput | inventoryUpdateManyWithWhereWithoutToolInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type rentalUpdateManyWithoutToolNestedInput = {
    create?:
      | XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>
      | rentalCreateWithoutToolInput[]
      | rentalUncheckedCreateWithoutToolInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutToolInput | rentalCreateOrConnectWithoutToolInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutToolInput | rentalUpsertWithWhereUniqueWithoutToolInput[];
    createMany?: rentalCreateManyToolInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutToolInput | rentalUpdateWithWhereUniqueWithoutToolInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutToolInput | rentalUpdateManyWithWhereWithoutToolInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type storeUpdateOneRequiredWithoutToolNestedInput = {
    create?: XOR<storeCreateWithoutToolInput, storeUncheckedCreateWithoutToolInput>;
    connectOrCreate?: storeCreateOrConnectWithoutToolInput;
    upsert?: storeUpsertWithoutToolInput;
    connect?: storeWhereUniqueInput;
    update?: XOR<
      XOR<storeUpdateToOneWithWhereWithoutToolInput, storeUpdateWithoutToolInput>,
      storeUncheckedUpdateWithoutToolInput
    >;
  };

  export type inventoryUncheckedUpdateManyWithoutToolNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutToolInput, inventoryUncheckedCreateWithoutToolInput>
      | inventoryCreateWithoutToolInput[]
      | inventoryUncheckedCreateWithoutToolInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutToolInput | inventoryCreateOrConnectWithoutToolInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutToolInput | inventoryUpsertWithWhereUniqueWithoutToolInput[];
    createMany?: inventoryCreateManyToolInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutToolInput | inventoryUpdateWithWhereUniqueWithoutToolInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutToolInput | inventoryUpdateManyWithWhereWithoutToolInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type rentalUncheckedUpdateManyWithoutToolNestedInput = {
    create?:
      | XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>
      | rentalCreateWithoutToolInput[]
      | rentalUncheckedCreateWithoutToolInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutToolInput | rentalCreateOrConnectWithoutToolInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutToolInput | rentalUpsertWithWhereUniqueWithoutToolInput[];
    createMany?: rentalCreateManyToolInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutToolInput | rentalUpdateWithWhereUniqueWithoutToolInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutToolInput | rentalUpdateManyWithWhereWithoutToolInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type organizationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type rentalCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type organizationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type rentalUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type organizationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type rentalUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutUserInput | rentalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutUserInput | rentalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutUserInput | rentalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type organizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type rentalUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutUserInput | rentalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutUserInput | rentalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutUserInput | rentalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type storeCreateWithoutInventoryInput = {
    id?: string;
    name: string;
    location: string;
    opening_time: Date | string;
    closing_time: Date | string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutStoreInput;
    tool?: toolCreateNestedManyWithoutStoreInput;
  };

  export type storeUncheckedCreateWithoutInventoryInput = {
    id?: string;
    name: string;
    location: string;
    organization_id: string;
    opening_time: Date | string;
    closing_time: Date | string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tool?: toolUncheckedCreateNestedManyWithoutStoreInput;
  };

  export type storeCreateOrConnectWithoutInventoryInput = {
    where: storeWhereUniqueInput;
    create: XOR<storeCreateWithoutInventoryInput, storeUncheckedCreateWithoutInventoryInput>;
  };

  export type toolCreateWithoutInventoryInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalCreateNestedManyWithoutToolInput;
    store: storeCreateNestedOneWithoutToolInput;
  };

  export type toolUncheckedCreateWithoutInventoryInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    price: number;
    quantity: number;
    store_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutToolInput;
  };

  export type toolCreateOrConnectWithoutInventoryInput = {
    where: toolWhereUniqueInput;
    create: XOR<toolCreateWithoutInventoryInput, toolUncheckedCreateWithoutInventoryInput>;
  };

  export type storeUpsertWithoutInventoryInput = {
    update: XOR<storeUpdateWithoutInventoryInput, storeUncheckedUpdateWithoutInventoryInput>;
    create: XOR<storeCreateWithoutInventoryInput, storeUncheckedCreateWithoutInventoryInput>;
    where?: storeWhereInput;
  };

  export type storeUpdateToOneWithWhereWithoutInventoryInput = {
    where?: storeWhereInput;
    data: XOR<storeUpdateWithoutInventoryInput, storeUncheckedUpdateWithoutInventoryInput>;
  };

  export type storeUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    opening_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutStoreNestedInput;
    tool?: toolUpdateManyWithoutStoreNestedInput;
  };

  export type storeUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    opening_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tool?: toolUncheckedUpdateManyWithoutStoreNestedInput;
  };

  export type toolUpsertWithoutInventoryInput = {
    update: XOR<toolUpdateWithoutInventoryInput, toolUncheckedUpdateWithoutInventoryInput>;
    create: XOR<toolCreateWithoutInventoryInput, toolUncheckedCreateWithoutInventoryInput>;
    where?: toolWhereInput;
  };

  export type toolUpdateToOneWithWhereWithoutInventoryInput = {
    where?: toolWhereInput;
    data: XOR<toolUpdateWithoutInventoryInput, toolUncheckedUpdateWithoutInventoryInput>;
  };

  export type toolUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateManyWithoutToolNestedInput;
    store?: storeUpdateOneRequiredWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    store_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutToolNestedInput;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type storeCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    location: string;
    opening_time: Date | string;
    closing_time: Date | string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryCreateNestedManyWithoutStoreInput;
    tool?: toolCreateNestedManyWithoutStoreInput;
  };

  export type storeUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    location: string;
    opening_time: Date | string;
    closing_time: Date | string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutStoreInput;
    tool?: toolUncheckedCreateNestedManyWithoutStoreInput;
  };

  export type storeCreateOrConnectWithoutOrganizationInput = {
    where: storeWhereUniqueInput;
    create: XOR<storeCreateWithoutOrganizationInput, storeUncheckedCreateWithoutOrganizationInput>;
  };

  export type storeCreateManyOrganizationInputEnvelope = {
    data: storeCreateManyOrganizationInput | storeCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutOrganizationInput = {
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type storeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: storeWhereUniqueInput;
    update: XOR<storeUpdateWithoutOrganizationInput, storeUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<storeCreateWithoutOrganizationInput, storeUncheckedCreateWithoutOrganizationInput>;
  };

  export type storeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: storeWhereUniqueInput;
    data: XOR<storeUpdateWithoutOrganizationInput, storeUncheckedUpdateWithoutOrganizationInput>;
  };

  export type storeUpdateManyWithWhereWithoutOrganizationInput = {
    where: storeScalarWhereInput;
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type storeScalarWhereInput = {
    AND?: storeScalarWhereInput | storeScalarWhereInput[];
    OR?: storeScalarWhereInput[];
    NOT?: storeScalarWhereInput | storeScalarWhereInput[];
    id?: UuidFilter<'store'> | string;
    name?: StringFilter<'store'> | string;
    location?: StringFilter<'store'> | string;
    organization_id?: UuidFilter<'store'> | string;
    opening_time?: DateTimeFilter<'store'> | Date | string;
    closing_time?: DateTimeFilter<'store'> | Date | string;
    contact_number?: StringFilter<'store'> | string;
    created_at?: DateTimeFilter<'store'> | Date | string;
    updated_at?: DateTimeFilter<'store'> | Date | string;
  };

  export type toolCreateWithoutRentalInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryCreateNestedManyWithoutToolInput;
    store: storeCreateNestedOneWithoutToolInput;
  };

  export type toolUncheckedCreateWithoutRentalInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    price: number;
    quantity: number;
    store_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutToolInput;
  };

  export type toolCreateOrConnectWithoutRentalInput = {
    where: toolWhereUniqueInput;
    create: XOR<toolCreateWithoutRentalInput, toolUncheckedCreateWithoutRentalInput>;
  };

  export type userCreateWithoutRentalInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutRentalInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutRentalInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
  };

  export type toolUpsertWithoutRentalInput = {
    update: XOR<toolUpdateWithoutRentalInput, toolUncheckedUpdateWithoutRentalInput>;
    create: XOR<toolCreateWithoutRentalInput, toolUncheckedCreateWithoutRentalInput>;
    where?: toolWhereInput;
  };

  export type toolUpdateToOneWithWhereWithoutRentalInput = {
    where?: toolWhereInput;
    data: XOR<toolUpdateWithoutRentalInput, toolUncheckedUpdateWithoutRentalInput>;
  };

  export type toolUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateManyWithoutToolNestedInput;
    store?: storeUpdateOneRequiredWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    store_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUncheckedUpdateManyWithoutToolNestedInput;
  };

  export type userUpsertWithoutRentalInput = {
    update: XOR<userUpdateWithoutRentalInput, userUncheckedUpdateWithoutRentalInput>;
    create: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutRentalInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutRentalInput, userUncheckedUpdateWithoutRentalInput>;
  };

  export type userUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type inventoryCreateWithoutStoreInput = {
    id?: string;
    quantity: number;
    last_updated: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tool: toolCreateNestedOneWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateWithoutStoreInput = {
    id?: string;
    tool_id: string;
    quantity: number;
    last_updated: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryCreateOrConnectWithoutStoreInput = {
    where: inventoryWhereUniqueInput;
    create: XOR<inventoryCreateWithoutStoreInput, inventoryUncheckedCreateWithoutStoreInput>;
  };

  export type inventoryCreateManyStoreInputEnvelope = {
    data: inventoryCreateManyStoreInput | inventoryCreateManyStoreInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutStoreInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutStoreInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationCreateOrConnectWithoutStoreInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutStoreInput, organizationUncheckedCreateWithoutStoreInput>;
  };

  export type toolCreateWithoutStoreInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryCreateNestedManyWithoutToolInput;
    rental?: rentalCreateNestedManyWithoutToolInput;
  };

  export type toolUncheckedCreateWithoutStoreInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutToolInput;
    rental?: rentalUncheckedCreateNestedManyWithoutToolInput;
  };

  export type toolCreateOrConnectWithoutStoreInput = {
    where: toolWhereUniqueInput;
    create: XOR<toolCreateWithoutStoreInput, toolUncheckedCreateWithoutStoreInput>;
  };

  export type toolCreateManyStoreInputEnvelope = {
    data: toolCreateManyStoreInput | toolCreateManyStoreInput[];
    skipDuplicates?: boolean;
  };

  export type inventoryUpsertWithWhereUniqueWithoutStoreInput = {
    where: inventoryWhereUniqueInput;
    update: XOR<inventoryUpdateWithoutStoreInput, inventoryUncheckedUpdateWithoutStoreInput>;
    create: XOR<inventoryCreateWithoutStoreInput, inventoryUncheckedCreateWithoutStoreInput>;
  };

  export type inventoryUpdateWithWhereUniqueWithoutStoreInput = {
    where: inventoryWhereUniqueInput;
    data: XOR<inventoryUpdateWithoutStoreInput, inventoryUncheckedUpdateWithoutStoreInput>;
  };

  export type inventoryUpdateManyWithWhereWithoutStoreInput = {
    where: inventoryScalarWhereInput;
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutStoreInput>;
  };

  export type inventoryScalarWhereInput = {
    AND?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
    OR?: inventoryScalarWhereInput[];
    NOT?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
    id?: UuidFilter<'inventory'> | string;
    tool_id?: UuidFilter<'inventory'> | string;
    store_id?: UuidFilter<'inventory'> | string;
    quantity?: IntFilter<'inventory'> | number;
    last_updated?: DateTimeFilter<'inventory'> | Date | string;
    created_at?: DateTimeFilter<'inventory'> | Date | string;
    updated_at?: DateTimeFilter<'inventory'> | Date | string;
  };

  export type organizationUpsertWithoutStoreInput = {
    update: XOR<organizationUpdateWithoutStoreInput, organizationUncheckedUpdateWithoutStoreInput>;
    create: XOR<organizationCreateWithoutStoreInput, organizationUncheckedCreateWithoutStoreInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutStoreInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutStoreInput, organizationUncheckedUpdateWithoutStoreInput>;
  };

  export type organizationUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type toolUpsertWithWhereUniqueWithoutStoreInput = {
    where: toolWhereUniqueInput;
    update: XOR<toolUpdateWithoutStoreInput, toolUncheckedUpdateWithoutStoreInput>;
    create: XOR<toolCreateWithoutStoreInput, toolUncheckedCreateWithoutStoreInput>;
  };

  export type toolUpdateWithWhereUniqueWithoutStoreInput = {
    where: toolWhereUniqueInput;
    data: XOR<toolUpdateWithoutStoreInput, toolUncheckedUpdateWithoutStoreInput>;
  };

  export type toolUpdateManyWithWhereWithoutStoreInput = {
    where: toolScalarWhereInput;
    data: XOR<toolUpdateManyMutationInput, toolUncheckedUpdateManyWithoutStoreInput>;
  };

  export type toolScalarWhereInput = {
    AND?: toolScalarWhereInput | toolScalarWhereInput[];
    OR?: toolScalarWhereInput[];
    NOT?: toolScalarWhereInput | toolScalarWhereInput[];
    id?: UuidFilter<'tool'> | string;
    name?: StringFilter<'tool'> | string;
    type?: StringFilter<'tool'> | string;
    brand?: StringFilter<'tool'> | string;
    price?: IntFilter<'tool'> | number;
    quantity?: IntFilter<'tool'> | number;
    store_id?: UuidFilter<'tool'> | string;
    created_at?: DateTimeFilter<'tool'> | Date | string;
    updated_at?: DateTimeFilter<'tool'> | Date | string;
  };

  export type inventoryCreateWithoutToolInput = {
    id?: string;
    quantity: number;
    last_updated: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    store: storeCreateNestedOneWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateWithoutToolInput = {
    id?: string;
    store_id: string;
    quantity: number;
    last_updated: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryCreateOrConnectWithoutToolInput = {
    where: inventoryWhereUniqueInput;
    create: XOR<inventoryCreateWithoutToolInput, inventoryUncheckedCreateWithoutToolInput>;
  };

  export type inventoryCreateManyToolInputEnvelope = {
    data: inventoryCreateManyToolInput | inventoryCreateManyToolInput[];
    skipDuplicates?: boolean;
  };

  export type rentalCreateWithoutToolInput = {
    id?: string;
    rental_start_time: Date | string;
    rental_end_time: Date | string;
    total_price: number;
    payment_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateWithoutToolInput = {
    id?: string;
    user_id: string;
    rental_start_time: Date | string;
    rental_end_time: Date | string;
    total_price: number;
    payment_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalCreateOrConnectWithoutToolInput = {
    where: rentalWhereUniqueInput;
    create: XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>;
  };

  export type rentalCreateManyToolInputEnvelope = {
    data: rentalCreateManyToolInput | rentalCreateManyToolInput[];
    skipDuplicates?: boolean;
  };

  export type storeCreateWithoutToolInput = {
    id?: string;
    name: string;
    location: string;
    opening_time: Date | string;
    closing_time: Date | string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryCreateNestedManyWithoutStoreInput;
    organization: organizationCreateNestedOneWithoutStoreInput;
  };

  export type storeUncheckedCreateWithoutToolInput = {
    id?: string;
    name: string;
    location: string;
    organization_id: string;
    opening_time: Date | string;
    closing_time: Date | string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutStoreInput;
  };

  export type storeCreateOrConnectWithoutToolInput = {
    where: storeWhereUniqueInput;
    create: XOR<storeCreateWithoutToolInput, storeUncheckedCreateWithoutToolInput>;
  };

  export type inventoryUpsertWithWhereUniqueWithoutToolInput = {
    where: inventoryWhereUniqueInput;
    update: XOR<inventoryUpdateWithoutToolInput, inventoryUncheckedUpdateWithoutToolInput>;
    create: XOR<inventoryCreateWithoutToolInput, inventoryUncheckedCreateWithoutToolInput>;
  };

  export type inventoryUpdateWithWhereUniqueWithoutToolInput = {
    where: inventoryWhereUniqueInput;
    data: XOR<inventoryUpdateWithoutToolInput, inventoryUncheckedUpdateWithoutToolInput>;
  };

  export type inventoryUpdateManyWithWhereWithoutToolInput = {
    where: inventoryScalarWhereInput;
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutToolInput>;
  };

  export type rentalUpsertWithWhereUniqueWithoutToolInput = {
    where: rentalWhereUniqueInput;
    update: XOR<rentalUpdateWithoutToolInput, rentalUncheckedUpdateWithoutToolInput>;
    create: XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>;
  };

  export type rentalUpdateWithWhereUniqueWithoutToolInput = {
    where: rentalWhereUniqueInput;
    data: XOR<rentalUpdateWithoutToolInput, rentalUncheckedUpdateWithoutToolInput>;
  };

  export type rentalUpdateManyWithWhereWithoutToolInput = {
    where: rentalScalarWhereInput;
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutToolInput>;
  };

  export type rentalScalarWhereInput = {
    AND?: rentalScalarWhereInput | rentalScalarWhereInput[];
    OR?: rentalScalarWhereInput[];
    NOT?: rentalScalarWhereInput | rentalScalarWhereInput[];
    id?: UuidFilter<'rental'> | string;
    user_id?: UuidFilter<'rental'> | string;
    tool_id?: UuidFilter<'rental'> | string;
    rental_start_time?: DateTimeFilter<'rental'> | Date | string;
    rental_end_time?: DateTimeFilter<'rental'> | Date | string;
    total_price?: IntFilter<'rental'> | number;
    payment_status?: StringFilter<'rental'> | string;
    created_at?: DateTimeFilter<'rental'> | Date | string;
    updated_at?: DateTimeFilter<'rental'> | Date | string;
  };

  export type storeUpsertWithoutToolInput = {
    update: XOR<storeUpdateWithoutToolInput, storeUncheckedUpdateWithoutToolInput>;
    create: XOR<storeCreateWithoutToolInput, storeUncheckedCreateWithoutToolInput>;
    where?: storeWhereInput;
  };

  export type storeUpdateToOneWithWhereWithoutToolInput = {
    where?: storeWhereInput;
    data: XOR<storeUpdateWithoutToolInput, storeUncheckedUpdateWithoutToolInput>;
  };

  export type storeUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    opening_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateManyWithoutStoreNestedInput;
    organization?: organizationUpdateOneRequiredWithoutStoreNestedInput;
  };

  export type storeUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    opening_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUncheckedUpdateManyWithoutStoreNestedInput;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    store?: storeCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    store?: storeUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationCreateManyUserInputEnvelope = {
    data: organizationCreateManyUserInput | organizationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type rentalCreateWithoutUserInput = {
    id?: string;
    rental_start_time: Date | string;
    rental_end_time: Date | string;
    total_price: number;
    payment_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tool: toolCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateWithoutUserInput = {
    id?: string;
    tool_id: string;
    rental_start_time: Date | string;
    rental_end_time: Date | string;
    total_price: number;
    payment_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalCreateOrConnectWithoutUserInput = {
    where: rentalWhereUniqueInput;
    create: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>;
  };

  export type rentalCreateManyUserInputEnvelope = {
    data: rentalCreateManyUserInput | rentalCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationUpsertWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationUpdateWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateManyWithWhereWithoutUserInput = {
    where: organizationScalarWhereInput;
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[];
    OR?: organizationScalarWhereInput[];
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    address?: StringNullableFilter<'organization'> | string | null;
    city?: StringNullableFilter<'organization'> | string | null;
    state?: StringNullableFilter<'organization'> | string | null;
    zip_code?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
  };

  export type rentalUpsertWithWhereUniqueWithoutUserInput = {
    where: rentalWhereUniqueInput;
    update: XOR<rentalUpdateWithoutUserInput, rentalUncheckedUpdateWithoutUserInput>;
    create: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>;
  };

  export type rentalUpdateWithWhereUniqueWithoutUserInput = {
    where: rentalWhereUniqueInput;
    data: XOR<rentalUpdateWithoutUserInput, rentalUncheckedUpdateWithoutUserInput>;
  };

  export type rentalUpdateManyWithWhereWithoutUserInput = {
    where: rentalScalarWhereInput;
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutUserInput>;
  };

  export type storeCreateManyOrganizationInput = {
    id?: string;
    name: string;
    location: string;
    opening_time: Date | string;
    closing_time: Date | string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type storeUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    opening_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateManyWithoutStoreNestedInput;
    tool?: toolUpdateManyWithoutStoreNestedInput;
  };

  export type storeUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    opening_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUncheckedUpdateManyWithoutStoreNestedInput;
    tool?: toolUncheckedUpdateManyWithoutStoreNestedInput;
  };

  export type storeUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    opening_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryCreateManyStoreInput = {
    id?: string;
    tool_id: string;
    quantity: number;
    last_updated: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type toolCreateManyStoreInput = {
    id?: string;
    name: string;
    type: string;
    brand: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tool?: toolUpdateOneRequiredWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toolUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateManyWithoutToolNestedInput;
    rental?: rentalUpdateManyWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUncheckedUpdateManyWithoutToolNestedInput;
    rental?: rentalUncheckedUpdateManyWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryCreateManyToolInput = {
    id?: string;
    store_id: string;
    quantity: number;
    last_updated: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalCreateManyToolInput = {
    id?: string;
    user_id: string;
    rental_start_time: Date | string;
    rental_end_time: Date | string;
    total_price: number;
    payment_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    store?: storeUpdateOneRequiredWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    store_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUncheckedUpdateManyWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    store_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rental_start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental_end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    payment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    rental_start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental_end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    payment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUncheckedUpdateManyWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    rental_start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental_end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    payment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type rentalCreateManyUserInput = {
    id?: string;
    tool_id: string;
    rental_start_time: Date | string;
    rental_end_time: Date | string;
    total_price: number;
    payment_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    store?: storeUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    store?: storeUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type rentalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rental_start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental_end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    payment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tool?: toolUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    rental_start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental_end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    payment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    rental_start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental_end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    payment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use StoreCountOutputTypeDefaultArgs instead
   */
  export type StoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    StoreCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ToolCountOutputTypeDefaultArgs instead
   */
  export type ToolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ToolCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use inventoryDefaultArgs instead
   */
  export type inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    inventoryDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use rentalDefaultArgs instead
   */
  export type rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    rentalDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use storeDefaultArgs instead
   */
  export type storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = storeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use toolDefaultArgs instead
   */
  export type toolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = toolDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
