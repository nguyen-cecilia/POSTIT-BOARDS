import {RootState} from '@/store/store.ts';
import {useSelector} from 'react-redux';

const Boards = () => {
    const {currentBoard} = useSelector((state: RootState) => state.app);

    return (
        <>
            {currentBoard.postits.map((postit) => (
                <div key={postit.id}>{postit.title}</div>
            ))}
        </>
    )
};

export default Boards;