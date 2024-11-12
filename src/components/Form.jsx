const Form = ({ handleForm, fill }) => {
    return (
        <form onSubmit={handleForm} className={`flex rounded-md  overflow-hidden py-3 gap-4 items-center px-4 transition-all duration-1000 ${fill !== "#000" ? "bg-gray-800 text-white " : "text-gray-600 bg-white"}`}>
            <button 
                type="submit"  
                className="px-2 py-1 rounded bg-blue-500 text-white"
            >
                Add
            </button>
            <input 
                name="todo" 
                type="text" 
                placeholder="Crea una tarea" 
                className={`w-full text-gray-400 outline-none transition-all duration-1000 ${fill !== "#000" ? "bg-gray-800 text-white" : "text-gray-600"}`} 
            />
            <select name="category" className="text-gray-400 border-none bg-transparent outline-none">
                <option value="home">Home</option>
                <option value="work">Work</option>
            </select>
        </form>
    );
};

export default Form;




