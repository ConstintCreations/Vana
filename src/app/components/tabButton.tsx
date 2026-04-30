export default function TabButton({text, onClick, selected}: {text:string, onClick: () => void, selected: boolean}) {
    return (
        <button onClick={onClick} className={`cursor-pointer w-full h-[30%] ${selected ? "bg-bisque" : "bg-wheat"} rounded-tr-[30px] rounded-br-[30px] border-burlywood border-r-15 border-t-15 border-b-15 flex justify-center items-center flex-nowrap transition-colors duration-300 outline-none ${selected ? "hover:bg-blanchedalmond" : "hover:bg-bisque"}`}>
            <p className="rotate-90 text-nowrap text-burlywood font-bold text-2xl">{text}</p>
        </button>
    )
}