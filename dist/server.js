import "dotenv/config";
import https from "https";
import fs from "fs";
import app from "./app.js";
const hostname = "mysite.example";
const options = {
    cert: fs.readFileSync("./mysite.example.pem"),
    key: fs.readFileSync("./mysite.example-key.pem"),
};
const port = process.env.PORT;
https
    .createServer(options, function (req, res) {
    app(req, res);
})
    .listen({ port, hostname: hostname }, () => {
    console.log(`Server is listening on https://${hostname}:${port}`);
});
