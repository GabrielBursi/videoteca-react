import { useContext } from 'react'

import { VideoContext } from "../../context/VideoContext";
import { AddVideoButton, AddIcon } from "./style";

function AddVideo() {

    const {handleModal} = useContext(VideoContext)
    
    return (
        <li>
            <AddVideoButton onClick={handleModal}>
                <AddIcon />
            </AddVideoButton>
        </li>
    );
}

export default AddVideo;