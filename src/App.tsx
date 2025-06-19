import { useState } from "react";

import InitialComponent from "./component/InitialGlobe";
import StarsBackground from "./component/StarBackground";
import MainPage from "./pages/mainPage";

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
