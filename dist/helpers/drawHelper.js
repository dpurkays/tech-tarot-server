"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTarotDeck = loadTarotDeck;
exports.drawnCards = drawnCards;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function loadTarotDeck() {
    const filePath = path_1.default.join(__dirname, "..", "data", "major-arcana.json");
    const tarotData = fs_1.default.readFileSync(filePath, "utf-8");
    return JSON.parse(tarotData);
}
function drawnCards(deckSize, count) {
    const picked = new Set();
    while (picked.size < count) {
        picked.add(Math.floor(Math.random() * deckSize));
    }
    return Array.from(picked);
}
