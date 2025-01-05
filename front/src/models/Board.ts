import {Postit} from "./Postit.ts";

export interface Board {
    id: string;
    title: string;
    notes: string;
    postits: Postit[];
}