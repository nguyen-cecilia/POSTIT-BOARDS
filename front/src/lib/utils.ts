import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"
import {BoardType} from "@/models/BoardType.ts";
import {PostitType} from "@/models/PostitType.ts";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function findBoardById(boards: BoardType[], boardId: string) {
    return boards.find((board) => board.id === boardId);
};

export function findPostitById(postits: PostitType[], postitId: string) {
    return postits.find((postit) => postit.id === postitId);
}
