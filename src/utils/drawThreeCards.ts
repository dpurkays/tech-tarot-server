import fs from "fs";
import path from 'path';
import { DrawnCard, Position } from "../types/DrawnCard";
import { TarotCard } from "../types/TarotCard";

export function drawThreeCards() {
    const filePath = path.join(__dirname, "..", "data", "tarot-arcana.json")
    const tarotData = fs.readFileSync(filePath, "utf-8");
    const parsedTarotData: TarotCard[] = JSON.parse(tarotData);

    const picked: DrawnCard[] = [];
    const seenIndices = new Set<number>();
    const positions: Position[] = ["Past", "Present", "Future"];

    while(picked.length < 3) {
        const index = Math.floor(Math.random() * parsedTarotData.length);
        if(!seenIndices.has(index)) {
            const baseCard = parsedTarotData[index];
            const drawnCard: DrawnCard = {
                ...baseCard,
                reversed: Math.random() < 0.5,
                position: positions[picked.length]
            };
            picked.push(drawnCard);
            seenIndices.add(index);
        }
    }
    console.log(picked);
}