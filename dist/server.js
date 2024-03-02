import "dotenv/config";
import https from "https";
import http from "http";
import fs from "fs";
import app from "./app.js";
const env = process.env.NODE_ENV;
const hostname = "myApi.example";
const options = {
    cert: fs.readFileSync("./myApi.example.pem"),
    key: fs.readFileSync("./myApi.example-key.pem"),
};
const port = process.env.PORT;
env === "live"
    ? https
        .createServer(options, function (req, res) {
        app(req, res);
    })
        .listen({ port, hostname }, () => {
        console.log(`Server is listening on https://${hostname}:${port}`);
    })
    : http.createServer(app).listen({ port, hostname: hostname }, () => {
        console.log(`Server is listening on http://${hostname}:${port}`);
    });
