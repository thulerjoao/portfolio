import { useState } from "react";

import MainPage from "./Pages/mainPage";
import InitialComponent from "./components/InitialGlobe";
import StarsBackground from "./components/StarBackground";

const App = () => {
  const [start, setStart] = useState<boolean>(false);
  return (
    <div>
      {!start && <InitialComponent setStart={setStart} />}
      {start && <StarsBackground />}
      <MainPage start={start} />
    </div>
  );
};

export default App;
