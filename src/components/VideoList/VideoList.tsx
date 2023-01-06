import AddVideo from "../AddVideo/AddVideo";
import Video from "../Video/Video";
import { Container, VideoListWrapper } from "./style";

function VideoList() {
    return (
        <Container>
            <VideoListWrapper>
                <Video
                    id = '1'
                    title = 'teste'
                    link= 'https://www.youtube.com/watch?v=ExNSl9CKcPQ&list=PL8YNlUoOZkkY8wjaI2t8DfvysoysmMLCv&index=3'
                    liked = {true}
                />
                <AddVideo/>
            </VideoListWrapper>
        </Container>
    );
}

export default VideoList;