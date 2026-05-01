export default function SummaryTypeButton({text, selected, onClick} : {text: string, selected: Boolean, onClick: () => void}) {
    return(
        <button onClick={onClick} className={`${ selected ? "text-saddlebrown underline" : "text-saddlebrown opacity-60"} font-bold cursor-pointer decoration-3 underline-offset-7 [text-decoration-skip-ink:none]`}>{text}</button>
    );
}