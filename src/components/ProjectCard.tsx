import type { Project } from "../data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group h-full">
      <div className="overflow-hidden rounded-[2rem] bg-surface border border-border/60 mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex justify-between gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground mb-3">
            {project.category}
          </p>

          <h2 className="font-display text-3xl font-bold tracking-tight mb-3">{project.title}</h2>

          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        </div>

        <div className="text-right shrink-0">
          <p className="text-xs font-mono text-muted-foreground">{project.year}</p>

          <p className="text-xs text-muted-foreground mt-2">{project.client}</p>
        </div>
      </div>
    </article>
  );
}
