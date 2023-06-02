import { GraphQLObjectType, GraphQLNamedType, GraphQLScalarType, GraphQLType } from "graphql";
import { PluginFunction } from "@graphql-codegen/plugin-helpers";
/** Generates field policies for user-defined types, i.e. Date handling. */
export declare const plugin: PluginFunction<Config>;
/** The config values we read from the graphql-codegen.yml file. */
export declare type Config = {
    scalars: Record<string, string>;
    scalarTypePolicies: Record<string, string>;
};
export declare function isObjectType(t: GraphQLNamedType): t is GraphQLObjectType;
export declare function isScalarType(t: GraphQLType): t is GraphQLScalarType;
export declare function toImp(spec: string | undefined): unknown;
