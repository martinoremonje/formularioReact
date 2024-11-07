const TodoComputed = ({todos, setTodos}) => { 
    return (
    <section className="flex justify-between px-4 py-4 bg-white rounded-b-md">
      <span className="text-gray-400">{todos.filter(todo => !todo.completed).length} Tareas </span>
      <button onClick={()=>{todos.length ? setTodos(todos.filter(todo => !todo.completed)) : alert("add a Todo washin")}} className="text-gray-400">Clear completed</button>
    </section>
    )
 };

export default TodoComputed