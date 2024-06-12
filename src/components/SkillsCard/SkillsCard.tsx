type Props = {
  title: string;
};

export default function SkillsCard({ title }: Readonly<Props>) {
    return (
        <div className="py-1 px-2.5 bg-primary/20 rounded-full">
            <p className="text-xs text-primary capitalize sm:text-sm">{title}</p>
        </div>
    )
}
