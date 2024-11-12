const TodoComputed = ({todos, setTodos, fill}) => { 
    return (
    <section className={`flex justify-between px-4 py-4 bg-white rounded-b-md transition-all duration-1000 ${fill !== "#000" ? "bg-gray-800 text-white" : "text-gray-600"}`}>
      <span className="text-gray-400">{todos.filter(todo => !todo.completed).length} Tareas Activas </span>
      <button onClick={()=>{todos.length ? setTodos(todos.map(todo => todo.completed ? {...todo, completed: false} : todo)) : alert("add a Todo washin")}} className="text-gray-500 hover:text-blue-500">Descompletar all</button>
    </section>
    )
 };

export default TodoComputed