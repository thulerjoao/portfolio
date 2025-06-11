import { useState } from "react";
import InitialComponent from "./Components/InitialGlobe";
import StarsBackground from "./Components/StarBackground";
import MainPage from "./Pages/MainPage";

const App = () => {
  const [start, setStart] = useState<boolean>(false);
  return (
    <div>
      <InitialComponent setStart={setStart} />
      {start && <StarsBackground />}
      <MainPage />
    </div>
  );
};

export default App;
