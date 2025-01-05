import {Board} from "./models/Board.ts";

const data: Board[] = [
    {
        id: "1",
        title: "Board 1",
        notes: "",
        postits: [
            {
                id: "1",
                board: "1",
                title: "Postit 1",
                content: "Content",
                visible: true,
                color: "black",
            },
            {
                id: "2",
                board: "1",
                title: "Postit 2",
                content: "Content",
                visible: true,
                color: "pink",
            },
        ],
    },
];

export default data;