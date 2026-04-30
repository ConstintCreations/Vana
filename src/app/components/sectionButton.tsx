import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default function SectionButton({icon, onClick, selected}: {icon: IconDefinition, onClick: () => void, selected: Boolean}) {
    return (
        <button onClick={onClick} className={`${selected ? "bg-burlywood" : "bg-saddlebrown"} size-17 rounded-b-4xl outline-4 ${selected ? "outline-burlywood" : "outline-saddlebrown"} ${selected ? "border-bisque" : "border-burlywood"} border-4 border-dashed p-3 cursor-pointer transition-all duration-300 ${selected ? "" : "hover:bg-sienna"} ${selected ? "hover:opacity-70" : "hover:outline-sienna"} ${selected ? "" : "hover:border-bisque"} grid place-items-center group`}>
            <FontAwesomeIcon style={{width: "36px", height: "36px"}} className={`size-9 ${selected ? "text-bisque" : "text-burlywood"} ${selected ? "" : "group-hover:text-bisque"} transition-colors duration-300`} icon={icon}></FontAwesomeIcon>
        </button>
    )
}