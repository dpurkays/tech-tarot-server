import 'dotenv/config';
import express from "express";
import drawRoutes from "./routes/draw";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Tech Tarot running");
});

app.use("/api/draw/", drawRoutes);

app.listen(PORT, () => {
    console.log(`Server started and listening to PORT: ${PORT}`)
});
