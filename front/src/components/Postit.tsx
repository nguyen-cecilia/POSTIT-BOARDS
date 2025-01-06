import {PostitType} from "@/models/PostitType.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/store.ts";
import {Eye} from "lucide-react";
import {setPostitVisibility} from "@/store/AppSlice.ts";
import {Button} from "@/components/ui/button.tsx";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";

interface PostitProps {
    postit: PostitType;
}

const Postit: React.FC<PostitProps> = ({postit}) => {
    const dispatch = useDispatch<AppDispatch>();
    const visible = useSelector((state: RootState) => {
        const board = state.app.boards.find((board) => board.id === postit.board);
        if (board) {
            const currentPostit = board.postits.find((pi) => pi.id === postit.id);
            return currentPostit ? currentPostit.visible : false;
        }
    });

    return (
        // <div className={`p-6 rounded-2xl flex flex-col gap-4 ${visible ? "opacity-100" : "opacity-20"}`} style={{backgroundColor: postit.color}}>
        //     <h3 className="flex items-center gap-4 border-b border-border pb-4">
        //         {postit.title}
        //
        //         <Button variant="outline" size="icon"
        //                 onClick={() => dispatch(setPostitVisibility({board: postit.board, postit: postit.id}))}>
        //             <Eye/>
        //         </Button>
        //     </h3>
        //     <p>{postit.content}</p>
        // </div>
        <Card className={`min-w-[300px] ${visible ? "opacity-100" : "opacity-20"}`}>
            <CardHeader>
                <CardTitle>
                    {postit.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {postit.content}
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button variant="outline" size="icon"
                        onClick={() => dispatch(setPostitVisibility({board: postit.board, postit: postit.id}))}>
                    <Eye/>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Postit;