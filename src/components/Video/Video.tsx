import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5";
import { Container, ButtonArea, Button } from "./style";

type VideoProps = {
    id: string,
    title: string,
    link: string,
    liked: boolean
}

function Video({ id, title, link, liked}: VideoProps) {
    return (
        <li>
            <Container>
                <h2>{title}</h2>
                <a href={link} target="_blank" rel="noreferrer">{link}</a>
                <ButtonArea>
                    <Button liked = {liked}>
                        <IoThumbsUp/>
                    </Button>
                    <Button>
                        <IoPencil />
                    </Button>
                    <Button>
                        <IoTrashBin/>
                    </Button>
                </ButtonArea>
            </Container>
        </li>
    );
}

export default Video;