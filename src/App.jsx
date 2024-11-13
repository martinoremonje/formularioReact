import { DragDropContext} from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Articles from "./components/Articles";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import Filter from "./components/Filter";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App = () =>{

  //CREAR UN NUEVO TODO, SETTODO PARA LA CASA CREAR EL HANDLEFORM2 Y CREAR EL INPUT
  
  const [fill, setFill] = useState("#000");
  const [todos, setTodos] = useState(initialState);
  const [filter, setFilter] = useState("all");

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleForm = (e) =>{
    e.preventDefault();
    const title = e.target.todo.value;
    const value = e.target.category.value;

    if(title.trim() == ""){
      e.target.reset();
      return alert("Escribe una nueva tarea")
    };
    

    const isIn = todos.some(todo=>todo.title === title)
    if(isIn){
      e.target.reset();
      return alert("Ya existe esa Tarea")
    }

    const newTodo = {
      id: Date.now(),
      title,
      value,
      completed: false
    }
    setTodos([...todos, newTodo]);
    e.target.reset();
  }

  const handleFilter = () =>{
    switch(filter){
      case "all": return todos;
      case "active": return todos.filter(todo => todo.value === "home");
      case "completed": return todos.filter(todo => todo.value === "work");
      default: return todos
    }
  }

  const filteredTodos = handleFilter();

  const handleFillButton = () =>{
    setFill((prev)=> (prev === "#FFF" ? "#000" : "#FFF"))
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
  }

  return (
    <>
    <div className={`${fill === "#000" ? "min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-cover bg-gray-300 transition-all duration-300" : "min-h-screen bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-cover bg-gray-300 transition-all duration-300"}`}>

    <Header handleFillButton={handleFillButton} fill={fill} />

    <main className="container mx-auto mt-8 px-4 md:max-w-xl ">
      
      <Form handleForm={handleForm} fill={fill}/>

      <DragDropContext onDragEnd={handleDragEnd}>
      
      <Articles todos={filteredTodos} todosOriginal={todos} setTodos={setTodos} fill={fill}/>
      
      </DragDropContext>
      
      
      <TodoComputed todos={todos} setTodos={setTodos} fill={fill}/>
      
      <Filter setFilter={setFilter} filter={filter} fill={fill}/>
    
    </main>
      <footer className="mt-8 text-center">
       <p>Martino derechos reservados</p>
      </footer>
    
    </div>
    </>
  )
};

export default App