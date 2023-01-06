import { useState, useEffect } from 'react';

import AddVideo from "../AddVideo/AddVideo";
import Video from "../Video/Video";

import { Container, VideoListWrapper } from "./style";

import api from "../../services/api";

import { VideoType } from '../../types/VideoType';

function VideoList() {

    const [videos, setVideos] = useState<VideoType[]>([]);

    useEffect(() => {
        api.get('/videos').then(({data}) => setVideos(data.video))
    }, []);

    return (
        <Container>
            <VideoListWrapper>
                {videos?.map(({_id, liked, title, link}) => (
                    <Video key={_id} title={title} link={link} liked={liked}/>
                ))}
                <AddVideo/>
            </VideoListWrapper>
        </Container>
    );
}

export default VideoList;