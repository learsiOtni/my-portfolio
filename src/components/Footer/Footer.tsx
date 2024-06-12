import {
  faAddressBook,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="p-2.5 flex justify-between border-t py-10 border-t border-t-primary/20">
      <div className="max-w-xl">
        <p className="text-sm">&copy; Izzy Labarinto</p>
        <p className="mt-2.5    text-body">
          Loosely designed with pen and paper, and coded in Visual Studio Code.
          Built with Next.js and Tailwind CSS, deployed with Vercel. All text is
          set in the Inter typeface.
        </p>
      </div>

      <div className="mr-48 flex flex-col gap-4 w-[250px]">
        <h1 className="text-title">Contact Me</h1>
        <p className="links text-body">
          <Link href="https://github.com/learsiOtni" className="group">
            Check out my Github
            <FontAwesomeIcon icon={faLink} className="ml-2.5 group-hover:w-6" />
          </Link>
        </p>
        <p className="links text-body">
          <Link href="mailto:learsiotni@gmail.com" className="group">
            Email Me
            <FontAwesomeIcon
              icon={faEnvelope}
              className="ml-2.5 group-hover:w-6"
            />
          </Link>
        </p>
      </div>
    </div>
  );
}
