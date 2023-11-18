import AddTasks from "./components/AddTasks";
import DropDown from "./components/DropDown";
import Heading from "./components/Heading";
import Todos from "./components/Todos";


function App() {
  const options = ["All", "incomplete", "Completed"];
  return (
    <>
      <Heading/>
      <AddTasks/>
      <DropDown options={options}/>
      <Todos/>
    </>
  );
}

export default App;
