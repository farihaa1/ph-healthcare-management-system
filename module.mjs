// @ts-check
import { module } from "@prisma/composer";
import backendService from "./service.mjs";

export default module("backend-api-ph-healthcare", ({ provision }) => {
  provision(backendService);
});
