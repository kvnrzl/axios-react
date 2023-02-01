import PersonAdd from "./components/PersonAdd";
import PersonList from "./components/PersonList";
import PersonRemove from "./components/PersonRemove";
import PersonUpdate from "./components/PersonUpdate";

function App() {
  return (
    <div ClassName="App">
      <PersonList />
      <PersonAdd />
      <PersonRemove />
      <PersonUpdate />
    </div>
  );
}

export default App;
