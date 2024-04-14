import { Server as HTTPServer } from "http";
import { Server as HTTPSServer } from "https";

type Server = HTTPServer | HTTPSServer;

const connectionProtocol = process.env.CONN_PROTOCOL;
const port = process.env.PORT;

export default function listenRest(httpServer: Server) {
  httpServer.listen({ port }, () => {
    console.log(
      `Connection Protocol: ${connectionProtocol}, listening on port ${port}`,
    );
  });
}
