import express from "express";
import routes from "./api/routes";
import bodyParser from "body-parser";
import cors from "cors";
const PORT = 9999;

const app = express();
app.use(bodyParser.json());
app.use(cors());

routes(app);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
