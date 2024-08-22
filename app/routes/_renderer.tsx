// import { Style } from "hono/css";
// import { jsxRenderer } from "hono/jsx-renderer";
// import { Script } from "honox/server";

// export default jsxRenderer(({ children, title, description }) => {
//   return (
//     <html lang="en">
//       <head>
//         <meta charset="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         <link rel="icon" href="/favicon.ico" />
//         <Script src="/app/client.ts" async />
//         <Style />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// });

import { reactRenderer } from "@hono/react-renderer";

export default reactRenderer(({ children, title, description }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {import.meta.env.PROD ? (
          <script type="module" src="/static/client.js"></script>
        ) : (
          <script type="module" src="/app/client.ts"></script>
        )}
        {title ? <title>{title}</title> : ""}
        {description ? <meta name="description" content={description} /> : ""}
        {import.meta.env.PROD ? (
          <link href="static/assets/style.css" rel="stylesheet" />
        ) : (
          <link href="/app/style.css" rel="stylesheet" />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
});
