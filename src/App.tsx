import Layout from "./components/layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";

import VideoContextProvider from "./context/VideoContext";

function App() {
  return (
    <>
      <VideoContextProvider>
        <Layout/>
        <GlobalStyles/>
      </VideoContextProvider>
    </>
  );
}

export default App;
