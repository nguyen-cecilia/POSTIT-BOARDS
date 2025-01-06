import {PostitType} from "./PostitType.ts";

export interface BoardType {
    id: string;
    title: string;
    notes: string;
    postits: PostitType[];
}