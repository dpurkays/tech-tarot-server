import { Request, Response } from "express";
import { drawnCards, loadTarotDeck } from "../helpers/drawHelper";
import { DrawnCard, Position } from "../types/DrawnCard";

export function drawThreeCards(req: Request, res: Response) {
    const tarotDeck = loadTarotDeck();
    const positions: Position[] = ["Past", "Present", "Future"];
    const pickedIndices = drawnCards(tarotDeck.length, 3);

    const result: DrawnCard[] = pickedIndices.map((pickedCard, index) => (
        {
            ...tarotDeck[pickedCard],
            reversed: Math.random() < 0.5,
            position: positions[index]
        }
    )); 
    
    console.log(result);
    res.status(200).json(result);
}