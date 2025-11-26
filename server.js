const express = require("express");
const helmet = require("helmet");
const { PORT = 3001, BASE_PATH } = process.env;
const path = require("path");
const app = express();
app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Server location is on ${BASE_PATH}`);
  console.log(`Serving static files from ${path.join(__dirname, "public")}`);
});
