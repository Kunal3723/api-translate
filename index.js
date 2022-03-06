import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import translateRoutes from "./routes/translateRoute.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/translate', translateRoutes);
                                         

app.get('/', function (req, res) {
    res.send("Welcome to REST Api");
}).listen(5000, () => console.log(`Server Running on Port: http://localhost:5000`));