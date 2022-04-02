require("dotenv").config();
const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();
var cors = require('cors');
app.use(cors());

const swaggerOptios = {
  swaggerDefinition: {
    info: {
      title: "Hotal Managemnet API",
      version: "1.0.0",
    },
  },
  apis: ['./src/routes/index'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptios);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));/

app.use(express.json());

const routes = require("./src/routes");
const port = process.env.PORT || 3000;

app.use("/api", routes, swaggerUI.serve, swaggerUI.setup(swaggerDocs));
// send back a 404 error for any unknown api request
app.use("*", (req, res) => {
  res.send({ message: "Route does not exist" }).status(404);
});
//port
app.listen(port, () => {
  console.log(`Listening on ${port} port`);
});
