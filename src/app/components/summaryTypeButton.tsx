export default function SummaryTypeButton({text, selected, onClick} : {text: string, selected: Boolean, onClick: () => void}) {
    return(
        <button onClick={onClick} className={`${ selected ? "text-saddlebrown underline hover:text-sienna text-2xl" : "text-saddlebrown opacity-60 hover:opacity-90 text-xl"} transition-all duration-400 font-bold cursor-pointer decoration-3 underline-offset-7 [text-decoration-skip-ink:none]`}>{text}</button>
    );
}