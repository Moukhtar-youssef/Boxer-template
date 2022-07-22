var statik = require("node-static"),
  path = require("path"),
  file = new statik.Server(`..\\${path.basename(__dirname)}`);
require("http")
  .createServer(function (request, response) {
    request
      .addListener("end", function () {
        file.serve(request, response);
      })
      .resume();
  })
  .listen(8000);
