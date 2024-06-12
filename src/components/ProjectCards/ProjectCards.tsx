"use client";

import { useState } from "react";
import { ProjectsList } from "./ProjectsList";
import ProjectCard from "../ProjectCard/ProjectCard";

export type ProjectOptions = "sitdown" | "macrotracker" | "jdnative";

export default function ProjectCards() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<ProjectOptions>();

  const toggleExpanded = () => setExpanded(!expanded);

  const handleSeeMore = (id: string) => {
    if (id === activeProject) toggleExpanded()
    else {
        setActiveProject(id as ProjectOptions)
        setExpanded(true)
    }
  }

  return (
    <div className="flex flex-col gap-20">
      {ProjectsList.map((project) => {
        return (
          <ProjectCard key={project.id} {...project} expanded={activeProject === project.id && expanded} onExpand={handleSeeMore}/>
        );
      })}
    </div>
  );
}
