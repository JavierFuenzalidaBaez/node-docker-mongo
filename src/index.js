require("dotenv").config();
const express = require("express");
const { connectDB } = require("./database");

const app = express();

app.listen(process.env.PORT);
console.log(`Server running on port ${process.env.PORT}`);

// routes
/* const routesV1 = require('./API/v1/routes') */

app.get("/", (req, res) => res.send({ message: "template app base" }));
/* app.use("/api/v1", routesV1); */

if (process.env.NODE_ENV !== "test") {
  connectDB()
    .then(() => {})
    .catch(() => {
      app.get("/", (req, res) =>
        res.send({ message: "Servicio no disponible" })
      );
      // eslint-disable-next-line no-console
      console.log("Can't connect to DB");
    });
}

module.exports = app;
