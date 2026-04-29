export default function TabButton({text}: {text:string}) {
    return (
        <button className="cursor-pointer w-full h-[30%] bg-bisque rounded-tr-[30px] rounded-br-[30px] border-burlywood border-r-15 border-t-15 border-b-15 flex justify-center items-center flex-nowrap">
            <p className="rotate-90 text-nowrap text-burlywood font-bold text-2xl">{text}</p>
        </button>
    )
}