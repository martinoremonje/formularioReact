import { useState } from "react";
import CrossIcon from "./components/Icons/CrossIcon";
import Moon from "./components/Icons/Moon";
import Form from "./components/Form";
import Articles from "./components/Articles";

const App = () =>{

  const [fill, setFill] = useState("#FFF");
  const [todos, setTodos] = useState(["Compete javascript Course", "I dont know man"]);




  const handleFillButton = () =>{
    setFill((prev)=> (prev === "#FFF" ? "#000" : "#FFF"))
  };

  return (
    <>
    <div className="min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300">

    <header className="container mx-auto px-4 pt-8">
   <div className="flex justify-between"> 
    <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.5em]">
      Todo
    </h1>
    <button onClick={handleFillButton}><Moon fill={fill}/></button>
    </div>
    <Form />
    </header>

    <main className="container mx-auto mt-8 px-4">
    <div className="bg-white rounded-md [&>article]:p-4">

    
    <Articles todos={todos}/>
    <section className="flex justify-between px-4 py-4">
      <span className="text-gray-400">5 items left</span>
      <button className="text-gray-400">Clear completed</button>
    </section>
    </div>
    </main>
    <section className="container mx-auto px-4 mt-8">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4">
      <button className="text-blue-500">All </button>
      <button className="hover:text-blue-500">Active</button>
      <button className="hover:text-blue-500">Completed</button>
      </div>
    </section>
    <p className="text-center">Drag and Drop</p>
    </div>
    </>
  )
};

export default App