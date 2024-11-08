const Form = ({ handleForm }) => {
    return (
        <form onSubmit={handleForm} className="flex rounded-md bg-white overflow-hidden py-3 gap-4 items-center px-4">
            <button 
                type="submit"  // Cambiar a "submit" para que envíe el formulario
                className="px-2 py-1 rounded bg-blue-500 text-white"
            >
                Add
            </button>
            <input 
                name="todo" 
                type="text" 
                placeholder="Crea una tarea" 
                className="w-full text-gray-400 outline-none" 
            />
            <select name="category" className="text-gray-400 border-none bg-transparent outline-none">
                <option value="home">Home</option>
                <option value="work">Work</option>
            </select>
        </form>
    );
};

export default Form;




