import { Droppable,  Draggable} from "@hello-pangea/dnd";
import CheckIcon from "./Icons/Check";
import CrossIcon from "./Icons/CrossIcon"

const Articles = ({ todos, todosOriginal, setTodos, fill }) => {
    return (
        <>  
            <Droppable droppableId="todos">
                {
                    (droppableProvider)=>(
                        <div ref={droppableProvider.innerRef} {...droppableProvider.droppableProps} className={`rounded-t-md [&>article]:p-4 mt-8 ${fill === "#FFFF99" ? "bg-white" : "bg-gray-800"}`}>
            {todos.map((e, index) => (
                <Draggable key={e.id} index={index} draggableId={`${e.id}`}>
                    {(draggableProvider)=>(<article ref={draggableProvider.innerRef} {...draggableProvider.dragHandleProps} {...draggableProvider.draggableProps} className={`flex gap-4 border-b border-b-gray-400 ${fill !== "#FFFF99" ? "bg-gray-800 text-white" : "text-gray-600"}`}>
                    <button
                        onClick={() => {
                            setTodos(
                                todosOriginal.map(todo =>
                                    todo.id === e.id ? { ...todo, completed: !todo.completed } : todo
                                )
                            );
                        }}
                        className={`flex items-center justify-center border-gray-300 h-5 w-5 rounded-full border-2 ${e.completed ? 'bg-blue-500' : ''}`}
                    >
                        {e.completed && <CheckIcon />}
                    </button>
                    <p className={`grow ${e.completed && 'line-through'} `}>{e.title}</p>
                    <button className="flex-none" onClick={() => setTodos(todosOriginal.filter(todo => todo.id !== e.id))}>
                        <CrossIcon />
                    </button>
                </article>)}

                </Draggable>
                
            ))}
            {droppableProvider.placeholder}
        </div>
                    )
                }
                
            </Droppable>
            
            
        </>
    );
};

export default Articles;
