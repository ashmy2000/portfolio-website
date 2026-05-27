interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-16">
      <p className="uppercase tracking-[0.2em] text-accent text-xs mb-4">{eyebrow}</p>

      <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">{title}</h1>

      {description && (
        <p className="mt-8 max-w-3xl text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
