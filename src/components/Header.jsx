import Moon from "./../components/Icons/Moon";

const Header = ({handleFillButton, fill}) => { 
    return (
        <header className="container mx-auto px-4 pt-8">
   <div className="flex justify-between"> 
    <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.5em]">
      Tareas
    </h1>
    <button onClick={handleFillButton}><Moon fill={fill}/></button>
    </div>
    
    </header>
    )
 };

 export default Header