import Image from "next/image";

type Props = {
    src: any;
    alt: string;
}

export default function TechIcon({ src, alt}: Readonly<Props>) {

    return <Image src={src} height={28} alt={alt}/>
}