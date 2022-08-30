import Palette from "./Palette";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  // colorHelpers.js in action => console.log(generatePalette(seedColors[4]));
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette list goes here</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1>INDIVIDUAL PALETTE</h1>}
      />
    </Switch>
    // <div className="App">

    //   <Palette palette={generatePalette(seedColors[2])} />
    // </div>
  );
}

export default App;
