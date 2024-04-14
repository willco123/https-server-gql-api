import http from "http";

import app from "../../app.js";

const httpServer: http.Server = http.createServer(app);

export default httpServer;
