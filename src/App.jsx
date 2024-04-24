import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className='flex justify-center mt-5'>
        <h1 className='text-3xl'>Todo with redux toolkit</h1>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
