import https from "https";
import fs from "fs";
import app from "../../app.js";

const certPath = process.env.CERT_PATH;
const keyPath = process.env.KEY_PATH;

const options = {
  cert: fs.readFileSync("./myApi.example.pem"),
  key: fs.readFileSync("./myApi.example-key.pem"),
};

export default https.createServer(options, function (req, res) {
  app(req, res);
});
