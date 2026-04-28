import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

export default function SectionButton({icon}: FontAwesomeIconProps) {
    return (
        <button className="bg-saddlebrown w-20 h-20 rounded-b-4xl outline-4 outline-saddlebrown border-burlywood border-4 border-dashed p-3 cursor-pointer transition-colors duration-300 hover:bg-sienna hover:outline-sienna hover:border-bisque grid place-items-center group">
            <FontAwesomeIcon className="size-12 text-burlywood group-hover:text-bisque transition-colors duration-300" icon={icon}></FontAwesomeIcon>
        </button>
    )
}