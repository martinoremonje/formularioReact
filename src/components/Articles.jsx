import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import CheckIcon from "./Icons/Check";
import CrossIcon from "./Icons/CrossIcon";

const Articles = ({ todos, setTodosOriginal, handleDragEnd, fill }) => {
    return (
        <DragDropContext onDragEnd={handleDragEnd} className="transition-none duration-0">
            <Droppable droppableId="droppable-id" >
                {(droppableProvider) => (
                    <div ref={droppableProvider.innerRef} {...droppableProvider.droppableProps} className="w-full">
                        {todos.map((e, index) => (
                            <Draggable key={e.id} draggableId={e.id.toString()} index={index} >
                                {(draggableProvider) => (
                                    <article
                                        ref={draggableProvider.innerRef}
                                        {...draggableProvider.draggableProps}
                                        {...draggableProvider.dragHandleProps}
                                        className={`w-full flex items-center justify-between gap-4 border-b border-b-gray-400 p-4 transition-all duration-0 ${fill !== "#000" ? "bg-gray-800 text-white" : "text-gray-600 "}`}
                                    >
                                        <button
                                            onClick={() => {
                                                setTodosOriginal(
                                                    todos.map(todo =>
                                                        todo.id === e.id ? { ...todo, completed: !todo.completed } : todo
                                                    )
                                                );
                                            }}
                                            className={`flex items-center justify-center border-gray-300 h-5 w-5 rounded-full border-2 ${e.completed ? 'bg-blue-500' : ''}`}
                                        >
                                            {e.completed && <CheckIcon />}
                                        </button>
                                        <p className={`grow ${e.completed && 'line-through'}`}>{e.title}</p>
                                        <button className="flex-none" onClick={() => setTodosOriginal(todos.filter(todo => todo.id !== e.id))}>
                                            <CrossIcon />
                                        </button>
                                    </article>
                                )}
                            </Draggable>
                        ))}
                        {droppableProvider.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Articles;



