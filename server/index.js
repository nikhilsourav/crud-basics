import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// create port
const PORT = process.env.PORT || 5000;

// import routes
import userRoute from './routers/users.js';

// initialize express
const app = express();

// initialize cors
app.use(cors());

// initialize body parser
app.use(bodyParser.json()); // imply use of json only

// use routes
app.use('/users', userRoute);

// initialize mongoose
const CONNECTION_URL =
  'mongodb+srv://NikhilSourav:crudClusterPassword@crudcluster.ziayg.mongodb.net/<dbname>?retryWrites=true&w=majority';

// listen to incoming request when db connection established
mongoose
  .connect(CONNECTION_URL, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`server on port ${PORT}`)))
  .catch((e) => console.log(e, "can't connect to database"));
