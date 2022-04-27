const path = require("path");


module.exports = (root, port) => {
  return {
    swaggerDefinition: {
      info: {
        description: "API documentation",

        title: "Product Configurator API",

        version: "2.0.0",
      },

      host: `localhost:${port}`,

      basePath: "/api/v1",

      produces: ["application/json"],

      schemes: ["http"],
    },

    basedir: root,

    files: ["./routes/*.js"],
  };
};
