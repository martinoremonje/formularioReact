import CrossIcon from "./Icons/CrossIcon"


const Articles = ({ todos }) => {
    return (
        <>
        {todos.map((e, index)=>(
            
            <article key={index} className="flex gap-4 border-b border-b-gray-400"> 
                <button className="flex-none border-gray-300 h-5 w-5 inline-block rounded-full border-2"></button>
                    <p className="text-gray-600 grow">{e}</p>
                <button className="flex-none"><CrossIcon/></button>
            </article>
        ))}
        </>
        
    )
};

export default Articles;