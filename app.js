const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

const routes = require("./routes");

app.use(routes);

app.use("/upload", express.static(path.join(__dirname, "images")));

app.listen(PORT, console.log(`Server is listening on port: ${PORT}`));
