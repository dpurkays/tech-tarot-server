"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const draw_1 = __importDefault(require("./routes/draw"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Tech Tarot running");
});
app.use("/api/draw/", draw_1.default);
app.listen(PORT, () => {
    console.log(`Server started and listening to PORT: ${PORT}`);
});
