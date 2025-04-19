import { TarotCard } from "./TarotCard";
export type Position = "Past" | "Present" | "Future";

export type DrawnCard = TarotCard & {
    reversed: boolean;
    position: Position;
}