const express = require('express');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const path = require('path');

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  expressGraphQL({
  schema: {},
  rootValue: {},
  graphiql: true
  })
);

app.use(express.static(path.join(__dirname, "client", "index.html")));

const atlas_uri = process.env.ATLAS_URI;
const heroku_uri = process.env.MONGODB_URI;

mongoose.connect(heroku_uri || atlas_uri, { useUnifiedTopology: true,
useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
// console.log(connection)
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

// heroku
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})
