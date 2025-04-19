import fs from "fs";
import path from 'path';
import { TarotCard } from "../types/TarotCard";

export function loadTarotDeck(): TarotCard[] {
    const filePath = path.join(__dirname, "..", "data", "tarot-arcana.json")
    const tarotData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(tarotData);
}

export function drawnCards(deckSize: number, count: number): number[] {
    const picked = new Set<number>();
    while(picked.size < count) {
        picked.add(Math.floor(Math.random() * deckSize));
    }
    return Array.from(picked);
}