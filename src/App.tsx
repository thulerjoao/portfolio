import { useState } from "react";

import InitialComponent from "./component/InitialGlobe";
import StarsBackground from "./component/StarBackground";
import Page from "./pages/page";


const App = () => {
  const [start, setStart] = useState<boolean>(true);
  return (
    <div>
      {/* {!start && <InitialComponent setStart={setStart} />} */}
      {start && <StarsBackground />}
      <StarsBackground />
      <Page start={start} />
    </div>
  );
};

export default App;
