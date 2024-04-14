import { Server } from "../../types";

export default function listenRest({
  httpServer,
  port,
  connectionProtocol,
}: {
  httpServer: Server;
  port: String | undefined;
  connectionProtocol: String | undefined;
}) {
  httpServer.listen({ port, connectionProtocol }, () => {
    console.log(
      `Rest Server established\n Connection protocol: ${connectionProtocol}\n Listening on port ${port}`,
    );
  });
}
