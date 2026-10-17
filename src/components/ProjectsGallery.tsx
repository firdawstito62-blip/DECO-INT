import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsGalleryProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projets" className="py-16 lg:py-24 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C7B6C] font-semibold mb-2">
              Galerie d'Architecture & Décoration
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#1A1816] font-normal [text-wrap:balance]">
              Réalisations Récents
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A544A] max-w-md">
            Chaque lieu est une partition singulière. Découvrez notre travail sur les matières, la lumière
            naturelle et les proportions architecturales.
          </p>
        </div>

        {/* Filter Controls: Functional Segmented Control */}
        <div className="flex items-center gap-1.5 p-1 bg-[#EFECE5] rounded-lg max-w-fit mb-10 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: 'Toutes les réalisations' },
            { id: 'salon', label: 'Salons & Réceptions' },
            { id: 'suite', label: 'Suites Parentales' },
            { id: 'cuisine', label: 'Cuisines de Chef' },
            { id: 'complet', label: 'Rénovations Complètes' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeCategory === tab.id
                  ? 'bg-white text-[#1A1816] shadow-xs'
                  : 'text-[#665F54] hover:text-[#1A1816]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid: 2-column or 3-column with consistent aspect ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-white rounded-lg border border-[#E5DFD5] overflow-hidden hover:border-[#1A1816] transition-all duration-300 flex flex-col shadow-xs"
            >
              {/* Image Container with measured aspect ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#1A1816] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Content block */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-[#7A7367] mb-2 font-medium">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{project.surface} m²</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-serif-display text-2xl text-[#1A1816] font-normal group-hover:text-[#9C6D48] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#57524A] line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Materials footer unboxed */}
                <div className="mt-6 pt-4 border-t border-[#F0ECE4] flex items-center justify-between text-xs text-[#8C7B6C]">
                  <span className="truncate max-w-[80%]">
                    {project.materials.slice(0, 3).join(' · ')}
                  </span>
                  <span className="font-semibold text-[#1A1816] group-hover:underline">
                    Consulter
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
