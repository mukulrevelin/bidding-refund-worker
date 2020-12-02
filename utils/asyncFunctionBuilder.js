const { promisify } = require("util");

module.exports  = (client, methodName) => {
  return promisify(client[methodName]).bind(client);
}
