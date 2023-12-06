import "./Featured.css";

export default function Featured() {

    const col1Class = "rounded-lg bg-red-500 row-span-3";

    const col2Class = "rounded-lg bg-black/70"
    
    return(
        <div className="grid grid-rows-3 grid-flow-col col-end-3 gap-6 w-full h-featured ml-4">
            <div className= { col1Class }>a</div>
            <div className= { col2Class }>b</div>
            <div className= { col2Class }>c</div>
            <div className= { col2Class }>d</div>
        </div>
    )
}