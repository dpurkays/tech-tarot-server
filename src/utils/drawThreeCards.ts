import fs from "fs";
import path from 'path';

export function drawThreeCards() {
    const filePath = path.join(__dirname, "..", "data", "tarot-arcana.json")
    const tarotData = fs.readFileSync(filePath, "utf-8");
    const parsedTarotData = JSON.parse(tarotData);

    const picked = [];
    const seenIndices = new Set<number>();

    while(picked.length < 3) {
        const index = Math.floor(Math.random() * parsedTarotData.length);
        if(!seenIndices.has(index)) {
            picked.push(parsedTarotData[index]);
            seenIndices.add(index);
        }
    }

    console.log(picked);
}