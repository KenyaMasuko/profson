import {} from "hono";
import "@hono/react-renderer";

type Head = {
  title?: string;
  description?: string;
};

declare module "hono" {
  interface Env {
    Variables: {};
    Bindings: {};
  }
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      head?: Head,
    ): Response | Promise<Response>;
  }
}

declare module "@hono/react-renderer" {
  interface Props extends Head {}
}
