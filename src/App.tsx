import Layout from "./components/layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";

import VideoContextProvider, { VideoContext } from "./context/VideoContext";
import FormModal from "./components/FormModal/FormModal";
import { useContext } from "react";

function App() {

  const {modal} = useContext(VideoContext)

  return (
    <>
      <VideoContextProvider>
        <Layout/>
        <GlobalStyles/>
        {modal ? <FormModal /> : <></>}
      </VideoContextProvider>
    </>
  );
}

export default App;
