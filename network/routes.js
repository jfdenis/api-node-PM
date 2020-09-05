// Network endpoins
const user = require("../components/users/network");

// route render
const routes = (server) => {
  server.use("/users", user);
};

module.exports = routes;
