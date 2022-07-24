var staticserver = require("static-server");
var server = new staticserver({
  rootPath: "./",
  port: 8000,
});
server.start(() => {
  console.log("server listening to ", server.port);
});
