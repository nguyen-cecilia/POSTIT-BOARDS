import {RootState} from '@/store/store.ts';
import {useSelector} from 'react-redux';
import Postit from "@/components/Postit.tsx";

const Board = () => {
    const {currentBoard} = useSelector((state: RootState) => state.app);

    return (
        <section className="p-8 flex gap-6">
            {currentBoard.postits.map((postit) => (
                <Postit key={postit.id} postit={postit}/>
            ))}
        </section>
    )
};

export default Board;