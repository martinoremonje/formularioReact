const Filter = ({setFilter, filter, fill}) => { 
    return (
        <section className="container mx-auto mt-8">
        <div className={` p-4 rounded-md flex justify-center gap-4 transition-all duration-300 ${fill !== "#FFFF99" ? "bg-gray-800 text-white" : "text-gray-600 bg-white"}`}>
        <button onClick={()=> setFilter("all")} className={`${filter === "all" ? "text-blue-500" : "text-gray-500 hover:text-blue-500"}`}>Re Order</button>
        <button onClick={()=> setFilter("active")} className={`${filter === "active" ? "text-blue-500" : "text-gray-500 hover:text-blue-500"}`}>Home</button>
        <button onClick={()=> setFilter("completed")} className={`${filter === "completed" ? "text-blue-500" : "text-gray-500 hover:text-blue-500"}`}>Work</button>
        </div>
      </section>)
 };

export default Filter;