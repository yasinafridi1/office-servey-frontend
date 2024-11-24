import { useEffect } from "react";
import StepsWrapper from "./Pages/Steps";

function App() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return <StepsWrapper />;
}

export default App;
