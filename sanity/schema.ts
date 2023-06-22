import { type SchemaTypeDefinition } from "sanity";
import project from "./schemas/project";
import page from "./schemas/page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, page],
};
