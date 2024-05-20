import "dotenv/config";
import ServerTypes from "./config/enums/ServerTypes.js";
import ConnectionProtocols from "./config/enums/ConnectionProtocols.js";

const serverType = process.env.SERVER_TYPE;
const connectionProtocol = process.env.CONN_PROTOCOL;
const port = process.env.PORT;

const httpServer = await (async (connectionProtocol) => {
  switch (connectionProtocol) {
    case ConnectionProtocols.HTTPS:
      const { default: httpsServer } = await import(
        "./config/http/httpsServer.js"
      );
      return httpsServer;

    default:
      const { default: httpServer } = await import(
        "./config/http/httpServer.js"
      );
      return httpServer;
  }
})(connectionProtocol);

switch (serverType) {
  case ServerTypes.GRAPHQL:
    const { default: listenGraphQL } = await import(
      "./config/graphql/server.js"
    );
    listenGraphQL({ httpServer, port, connectionProtocol });
    break;

  default:
    const { default: listenRest } = await import("./config/rest/server.js");
    listenRest({ httpServer, port, connectionProtocol });
}
