import Smiley from "./components/Smiley";

function App() {

  let random = Math.floor(Math.random() * 11)

  return (

    <div className="App">
      <Smiley random = {random} />
    </div>
  );
}

export default App;
