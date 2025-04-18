import 'dotenv/config';
import express from "express";
import { drawThreeCards } from './utils/drawThreeCards';


const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Tech Tarot running");
});

app.listen(PORT, () => {
    console.log(`Server started and listening to PORT: ${PORT}`)
});

drawThreeCards();