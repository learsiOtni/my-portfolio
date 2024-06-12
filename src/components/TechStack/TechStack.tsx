import TechIcon from "../TechIcon/TechIcon";
import { TechStackList } from "./TechStackList";

export default function TechStack() {

    return (
        <div className="flex flex-wrap gap-1 sm:gap-2">
            { TechStackList.map( ({src, alt}) => <TechIcon key="alt" src={src} alt={alt} />)}
        </div>
    )
}