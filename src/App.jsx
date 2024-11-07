import { useEffect, useState } from "react";
import Form from "./components/Form";
import Articles from "./components/Articles";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import Filter from "./components/Filter";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const App = () =>{

  const [fill, setFill] = useState("#000");
  const [todos, setTodos] = useState(initialState);
  const [filter, setFilter] = useState("all");

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleForm = (e) =>{
    e.preventDefault();
    const title = e.target.todo.value;

    if(title.trim() == ""){
      e.target.reset();
      return alert("Rellena el todo bro")
    };
    

    const isIn = todos.some(todo=>todo.title === title)
    if(isIn){
      e.target.reset();
      return alert("Ya existe ese Todo")
    }

    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo]);
    e.target.reset();
  }

  const handleFilter = () =>{
    switch(filter){
      case "all": return todos;
      case "active": return todos.filter(todo => !todo.completed);
      case "completed": return todos.filter(todo => todo.completed);
      default: return todos
    }
  }

  const handleFillButton = () =>{
    setFill((prev)=> (prev === "#FFF" ? "#000" : "#FFF"))
  };

  return (
    <>
    <div className={`${fill === "#000" ? "min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-cover bg-gray-300" : "min-h-screen bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-cover bg-gray-300"}`}>

    <Header handleFillButton={handleFillButton} fill={fill} />

    <main className="container mx-auto mt-8 px-4">
      
      <Form handleForm={handleForm}/>
      
      <div className="bg-white rounded-t-md [&>article]:p-4 mt-8">
        <Articles todos={handleFilter()} setTodos={setTodos}/>
      </div>
      
      <TodoComputed todos={todos} setTodos={setTodos}/>
      
      <Filter setFilter={setFilter} filter={filter}/>
    
    </main>
      <footer className="mt-8 text-center">
       <p>Martino derechos reservados</p>
      </footer>
    
    </div>
    </>
  )
};

export default App