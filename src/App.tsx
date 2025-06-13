import { useState } from "react";
import InitialComponent from "./Components/InitialGlobe";
import StarsBackground from "./Components/StarBackground";
import MainPage from "./Pages/MainPage";
import ProjectTwo from "./Pages/ProjectTwo";

const App = () => {
  const [start, setStart] = useState<boolean>(false);
  return (
    <div>
      {/* {!start && <InitialComponent setStart={setStart} />} */}
      {start && <StarsBackground />}
      {true && <StarsBackground />}
      {/* <MainPage /> */}
      <ProjectTwo />
    </div>
  );
};

export default App;
