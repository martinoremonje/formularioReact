import CheckIcon from "./Icons/Check";
import CrossIcon from "./Icons/CrossIcon"

const Articles = ({ todos, todosOriginal, setTodos }) => {
    return (
        <>
            {todos.map((e, index) => (
                <article key={index} className="flex gap-4 border-b border-b-gray-400">
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
                    <p className={`text-gray-600 grow ${e.completed && 'line-through'}`}>{e.title}</p>
                    <button className="flex-none" onClick={() => setTodos(todosOriginal.filter(todo => todo.id !== e.id))}>
                        <CrossIcon />
                    </button>
                </article>
            ))}
        </>
    );
};

export default Articles;
