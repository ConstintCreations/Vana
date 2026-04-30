import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default function SectionButton({icon, onClick}: {icon: IconDefinition, onClick: () => void}) {
    return (
        <button onClick={onClick} className="bg-saddlebrown size-17 rounded-b-4xl outline-4 outline-saddlebrown border-burlywood border-4 border-dashed p-3 cursor-pointer transition-colors duration-300 hover:bg-sienna hover:outline-sienna hover:border-bisque grid place-items-center group">
            <FontAwesomeIcon style={{width: "36px", height: "36px"}} className="size-9 text-burlywood group-hover:text-bisque transition-colors duration-300" icon={icon}></FontAwesomeIcon>
        </button>
    )
}