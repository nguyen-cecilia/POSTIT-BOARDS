import {BoardType} from "./models/BoardType.ts";

const data: BoardType[] = [
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
                color: "#FFFDF5",
            },
            {
                id: "2",
                board: "1",
                title: "Postit 2",
                content: "Du texte",
                visible: true,
                color: "#E7F1A8",
            },
            {
                id: "3",
                board: "1",
                title: "Postit 3",
                content: "Du texte",
                visible: false,
                color: "#E7F1A8",
            },
        ],
    },
];

export default data;