const Form = ({handleForm}) => { 
    return (
        <form onSubmit={handleForm} action="" className=" flex rounded-md bg-white overflow-hidden py-3 gap-4 items-center px-4">
        <span className="border-gray-300 h-5 w-5 inline-block rounded-full border-2"></span>
        <input name="todo" type="text" placeholder="Crea una tarea" className="w-full text-gray-400 outline-none"/>
        </form>
    )
 };

 export default Form;