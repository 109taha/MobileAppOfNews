const helmet = require("helmet");
const commpression = require("compression");

module.exports = function (app) {
  app.use(helmet());
  app.use(commpression());
};
