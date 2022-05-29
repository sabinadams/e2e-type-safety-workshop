import type { GetUsersQuery } from "./graphql/generated";
export type Note = GetUsersQuery["users"][0]["notes"][0];
export type User = GetUsersQuery["users"][0];
