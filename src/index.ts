import "dotenv/config";
import ServerTypes from "./config/enums/ServerTypes";
import ConnectionProtocols from "./config/enums/ConnectionProtocols";
const serverType = process.env.SERVER_TYPE;
const connectionProtocol = process.env.CONN_TYPE;

switch (connectionProtocol) {
  case ConnectionProtocols.HTTP:
    await import("./config/rest/server.js");
    break;
  case ConnectionProtocols.HTTPS:
    await import("./config/graphql/server.js");
    break;
  default:
    await import("./config/rest/server.js");
}

switch (serverType) {
  case ServerTypes.REST:
    await import("./config/rest/server.js");
    break;
  case ServerTypes.GRAPHQL:
    await import("./config/graphql/server.js");
    break;
  default:
    await import("./config/rest/server.js");
}
