import CrossIcon from "./Icons/CrossIcon"

const Articles = ({ todos ,setTodos }) => {
    return (
        <>
        {todos.map((e, index)=>(
            <article key={index} className="flex gap-4 border-b border-b-gray-400" > 
              <button
                style={{backgroundImage: e.completed ? `url('src/assets/images/icon-check.svg')` : 'none',
                    backgroundSize: '0.8em',
                    backgroundPosition: 'center',
                    backgroundRepeat: "no-repeat"
                }}
                onClick={() => {
                setTodos(todos.map(todo => 
                todo.id === e.id ? { ...todo, completed: !todo.completed } : todo
                )); 
                }}
                className={`flex-none border-gray-300 h-5 w-5 inline-block rounded-full border-2 ${e.completed ? 'bg-blue-500' : ''}`}
                >       
               </button>
                    <p className={`text-gray-600 grow ${e.completed && 'line-through'}`}>{e.title}</p>
                <button className="flex-none" onClick={()=>{setTodos(todos.filter(todo => todo.title !== e.title))}}><CrossIcon /></button>
            </article>
        ))}
        </>
        
    )
};

export default Articles;