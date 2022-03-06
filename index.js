import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import translateRoutes from "./routes/translateRoute.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/translate', translateRoutes);
                                         

app.get('/', function (req, res) {
    res.send("Welcome to REST Api");
}).listen(PORT, () => console.log(`Server Running on Port: http://localhost:5000`));