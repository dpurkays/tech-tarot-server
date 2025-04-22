"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawThreeCards = drawThreeCards;
const drawHelper_1 = require("../helpers/drawHelper");
function drawThreeCards(req, res) {
    const tarotDeck = (0, drawHelper_1.loadTarotDeck)();
    const positions = ["Past", "Present", "Future"];
    const pickedIndices = (0, drawHelper_1.drawnCards)(tarotDeck.length, 3);
    const result = pickedIndices.map((pickedCard, index) => (Object.assign(Object.assign({}, tarotDeck[pickedCard]), { reversed: Math.random() < 0.5, position: positions[index] })));
    console.log(result);
    res.status(200).json(result);
}
