import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {
    onItemClick?: () => void;
    noActiveLink?: boolean;
}

export default function Links({ onItemClick, noActiveLink }: Props ) {
  return (
    <>
      <li className={`links ${noActiveLink || "active-link"}`}>
        <Link href="/" onClick={onItemClick}>About Me</Link>
      </li>
      <li className="links">
        <Link href="#portfolio" onClick={onItemClick}>Portfolio</Link>
      </li>
      <li className="links">
        <Link href="#contact" onClick={onItemClick}>Contact Me</Link>
      </li>
      <li className="links">
        <Link href="https://github.com/learsiOtni" onClick={onItemClick}>
          <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
        </Link>
      </li>
    </>
  );
}
