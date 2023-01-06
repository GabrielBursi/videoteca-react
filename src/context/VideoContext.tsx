import {createContext} from 'react';

type Children ={
    children: JSX.Element[]
}

export const VideoContext = createContext({})

function VideoContextProvider({children}: Children) {
    return (
        <VideoContext.Provider value={{}}>
            {children}
        </VideoContext.Provider>
    );
}

export default VideoContextProvider;