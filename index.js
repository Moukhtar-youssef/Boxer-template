var StaticServer = require("static-server"),
  server = new StaticServer({
    rootPath: "./dist/",
    port: 8000,
  }),
  open = require("open");
server.start(() => {
  console.log("server listening to ", server.port);
  open("http://localhost:" + server.port);
});
