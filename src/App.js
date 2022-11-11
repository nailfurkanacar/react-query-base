import { Router } from "./routes";
import { ReactQuery } from "./context/ReactQuery";

const App = () => {
  return (
    <ReactQuery>
      <Router />
    </ReactQuery>
  );
};

export default App;
