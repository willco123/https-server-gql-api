import { Server as HTTPServer } from "http";
import { Server as HTTPSServer } from "https";
export type Server = HTTPServer | HTTPSServer;
