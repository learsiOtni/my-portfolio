import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import SkillsCard from "../SkillsCard/SkillsCard";
import classes from "./ProjectCard.module.css";

type Props = {
  id: string;
  title: string;
  desc: string;
  more: Array<string>;
  image: any;
  techStack: Array<string>;
  href: string;
  expanded: boolean;
  onExpand: (id: string) => void;
};

export default function ProjectCard({
  id,
  title,
  desc,
  more,
  image,
  techStack,
  href,
  expanded,
  onExpand,
}: Readonly<Props>) {
  return (
    <div className="px-2.5 py-5 border-t border-t-primary/10">
      <div className="flex flex-col">
        <Link href={href}>
          <div className="group flex items-center cursor-pointer">
            <h3 className="mr-2.5 text-subtitle capitalize group-hover:text-primary">
              {title}
            </h3>
            <FontAwesomeIcon
              icon={faLink}
              className="w-4 group-hover:text-primary group-hover:w-5"
            />
          </div>
        </Link>

        <p className="text-body">{desc}</p>

        {!expanded && (
          <button className={classes.button} onClick={() => onExpand(id)}>
            See more...
            <FontAwesomeIcon icon={faChevronDown} className="ml-1.5" />
          </button>
        )}

        {expanded && (
          <>
            {more.map((item, index) => (
              <p key={index} className="text-body mt-2.5">
                {item}
              </p>
            ))}

            <button className={classes.button} onClick={() => onExpand(id)}>
              Show less
              <FontAwesomeIcon icon={faChevronUp} className="ml-1.5" />
            </button>
          </>
        )}

        <div className="mt-2.5 flex flex-wrap items-center gap-2">
          {techStack.length > 0 &&
            techStack.map((item) => <SkillsCard key={item} title={item} />)}
        </div>
      </div>

      {id !== "jdnative" ? (
        <div className="mt-5">
          <Image
            src={image}
            alt={title}
            style={{
              width: "80%",
              height: "auto",
              minWidth: "289px",
              maxWidth: "578px"
            }}
            sizes="(max-width: 768px) 100vw, 30vw"
            //className="border border-slate-200/50"
          />
        </div>
      ) : (
        <div className="mt-5">
          <Image
            src={image}
            alt={title}
            style={{
              width: "33%",
              height: "auto",
              minWidth: "150px",
              maxWidth: "300px"
            }}
            sizes="(max-width: 768px) 100vw, 30vw"
            className="border border-slate-200/50"
          />
        </div>
      )}
    </div>
  );
}
