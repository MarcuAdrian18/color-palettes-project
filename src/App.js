import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  // colorHelpers.js in action => console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[2])} />
    </div>
  );
}

export default App;
