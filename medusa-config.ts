import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  // this doesn't work
  // modules: [
  //   {
  //     resolve: "@medusajs/medusa/payment",
  //     options: {
  //       providers: [
  //         {
  //           resolve: "./src/modules/my-payment",
  //           id: "my-payment",
  //           options: {
  //             // provider options...
  //             apiKey: "...",
  //           },
  //         },
  //       ],
  //     },
  //   },
  // ],

  // this doesn't work as well
  // modules: {
  //   payment: {
  //     resolve: "@medusajs/medusa/payment",
  //     options: {
  //       providers: [
  //         {
  //           resolve: "./src/modules/my-payment",
  //           id: "my-payment",
  //           options: {
  //             // provider options...
  //             apiKey: "...",
  //           },
  //         },
  //       ],
  //     },
  //   },
  // },
});
