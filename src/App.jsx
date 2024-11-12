import { useEffect, useState } from "react";
import Form from "./components/Form";
import Articles from "./components/Articles";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import Filter from "./components/Filter";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [fill, setFill] = useState("#000");
  const [todos, setTodos] = useState(initialState);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleForm = (e) => {
      e.preventDefault();
      const title = e.target.todo.value;
      const value = e.target.category.value;

      if (title.trim() === "") {
          e.target.reset();
          return alert("Rellena el todo bro");
      }

      const isIn = todos.some((todo) => todo.title === title);
      if (isIn) {
          e.target.reset();
          return alert("Ya existe ese Todo");
      }

      const newTodo = {
          id: Date.now(),
          title,
          value,
          completed: false,
      };
      setTodos([...todos, newTodo]);
      e.target.reset();
  };

  const getFilteredTodos = () => {
      switch (filter) {
          case "all":
              return todos;
          case "active":
              return todos.filter((todo) => todo.value === "home");
          case "completed":
              return todos.filter((todo) => todo.value === "work");
          default:
              return todos;
      }
  };

  const filteredTodos = getFilteredTodos();

  const handleFillButton = () => {
      setFill((prev) => (prev === "#FFF" ? "#000" : "#FFF"));
  };

  const handleDragEnd = (result) => {
      if (!result.destination) return;

      // Determina el índice de la tarea movida en la lista completa `todos`
      const currentTodos = getFilteredTodos();
      const [movedItem] = currentTodos.splice(result.source.index, 1);
      currentTodos.splice(result.destination.index, 0, movedItem);

      // Reordena `todos` globalmente en función del nuevo orden filtrado
      const updatedTodos = todos.map((todo) => {
          const foundItem = currentTodos.find((t) => t.id === todo.id);
          return foundItem || todo;
      });

      setTodos(updatedTodos);
  };

  return (
    <>
    <div className={`${fill === "#000" ? "min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-cover bg-gray-300 transition-all duration-1000" : "min-h-screen bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-cover bg-gray-300 transition-all duration-1000"}`}>

    <Header handleFillButton={handleFillButton} fill={fill} />

    <main className="container mx-auto mt-8 px-4 md:max-w-xl ">
    <Form handleForm={handleForm} fill={fill} />
                <Filter setFilter={setFilter} filter={filter} fill={fill} />
                <div className={`rounded-t-md [&>article]:p-4 mt-8 transition-all duration-1000 ${fill === "#000" ? "bg-white ":"bg-gray-800"}`}>
                    <Articles
                        todos={filteredTodos} // Pasar los todos filtrados a Articles
                        handleDragEnd={handleDragEnd} // Pasar handleDragEnd para el reordenamiento
                        fill={fill}
                    />
                </div>
                <TodoComputed todos={todos} setTodos={setTodos} fill={fill}/>
            </main>
      <footer className="mt-8 text-center">
       <p>Martino derechos reservados</p>
      </footer>
    
    </div>
    </>
  )
};

export default App