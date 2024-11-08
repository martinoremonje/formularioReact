import React from 'react';

const Form = ({ handleForm }) => {
    const inputRef = React.useRef(null);

    const handleCategoryChange = () => {
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleForm} className="flex rounded-md bg-white overflow-hidden py-3 gap-4 items-center px-4">
            <span className="border-gray-300 h-5 w-5 inline-block rounded-full border-2"></span>
            <input 
                name="todo" 
                type="text" 
                placeholder="Crea una tarea" 
                className="w-full text-gray-400 outline-none"
                ref={inputRef}
            />
            <select 
                name="category" 
                className="text-gray-400 border-none bg-transparent outline-none"
                onChange={handleCategoryChange}
            >
                <option value="home">Home</option>
                <option value="work">Work</option>
            </select>
            <button type="submit" className="hidden">Submit</button> {/* Este botón permite enviar con Enter en algunos móviles */}
        </form>
    );
};

export default Form;