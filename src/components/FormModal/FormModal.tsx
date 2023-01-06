
import { useContext } from "react";
import VideoContext from "../../context/VideoContext";

import {
    Overlay,
    Container,
    Header,
    CloseIcon,
    FormContainer,
    FormMain,
    InputGroup,
    Footer,
    CheckIcon,
} from "./style";

function FormModal() {

    const { handleClose, handleTitle, handleLink, title, link, handleSubmit } = useContext(VideoContext)

    return (
        <Overlay>
            <Container>
                <Header>
                    <strong></strong>
                    <button type="button" onClick={handleClose}>
                        <CloseIcon/>
                    </button>
                </Header>
                <FormContainer onSubmit={handleSubmit}>
                    <FormMain>
                        <InputGroup>
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                type="text"
                                value={title}
                                placeholder="Insert a title"
                                onChange={handleTitle}
                            />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="title">Link</label>
                            <input
                                id="link"
                                type="text"
                                value={link}
                                placeholder="Insert a link"
                                onChange={handleLink}
                            />
                        </InputGroup>
                    </FormMain>
                    <Footer>
                        <button type="button">
                            <CheckIcon/>
                        </button>
                    </Footer>
                </FormContainer>
            </Container>
        </Overlay>
    );
}

export default FormModal;