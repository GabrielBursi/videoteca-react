import { useContext } from "react";
import VideoContext from "../../context/VideoContext";
import { Container } from "./style";

function Header() {

    const { handleClose, handleTitle, handleLink, title, link, handleSubmit } = useContext(VideoContext)

    return (
        <Container>
            <h3>Videoteca</h3>
        </Container>
    );
}

export default Header;