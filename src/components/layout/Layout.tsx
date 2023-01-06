import Footer from "../Footer/Footer";
import Header from "../header/Header";
import VideoList from "../VideoList/VideoList";
import { Container } from "./style";

function Layout() {
    return (
        <Container>
            <Header/>
            <VideoList/>
            <Footer/>
        </Container>
    );
}

export default Layout;