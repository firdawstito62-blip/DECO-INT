import React from 'react';
import { Project } from '../types';
import { X, Calendar, MapPin, Maximize2, Check, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBookConsultation: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onBookConsultation }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#FAF9F5] rounded-lg shadow-2xl border border-[#EAE4DC] overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE4DC] bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2 text-xs text-[#70685D]">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.location}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Fermer la fenêtre du projet"
            className="p-1.5 text-[#5A544A] hover:text-[#1A1816] hover:bg-[#F2EFE8] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual */}
          <div className="rounded-lg overflow-hidden border border-[#E2DDD3] bg-neutral-100 aspect-[16/10] max-h-[460px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title and Unboxed Metadata */}
          <div>
            <h3 className="font-serif-display text-3xl sm:text-4xl text-[#1A1816] font-normal">
              {project.title}
            </h3>
            <p className="font-serif-display italic text-lg text-[#8C7B6C] mt-1">
              {project.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-[#70685D] mt-3 pt-3 border-t border-[#EAE4DC]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#9C6D48]" />
                {project.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 font-mono tabular-nums">
                <Maximize2 className="w-3.5 h-3.5 text-[#9C6D48]" />
                {project.surface} m²
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#9C6D48]" />
                Année {project.year}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{project.completionWeeks} semaines de chantier</span>
            </div>
          </div>

          {/* Project Story */}
          <div className="space-y-4 text-sm sm:text-base text-[#464139] leading-relaxed">
            <h4 className="text-xs uppercase tracking-wider text-[#70685D] font-semibold">
              Parti Architectural & Décoratif
            </h4>
            <p>{project.description}</p>
          </div>

          {/* Highlights & Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#EAE4DC]">
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-[#70685D] font-semibold">
                Points Clés de la Réalisation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#504A41]">
                {project.keyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#9C6D48] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-[#70685D] font-semibold">
                Matières & Finitions Mises en Œuvre
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-[#464139]">
                {project.materials.map((mat, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-white border border-[#E0D9CE] rounded-xs font-medium"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer / Action */}
        <div className="px-6 py-4 bg-white border-t border-[#EAE4DC] flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0">
          <div className="text-xs text-[#70685D] text-center sm:text-left">
            Un projet similaire vous inspire pour votre résidence ?
          </div>
          <button
            onClick={() => {
              onClose();
              onBookConsultation(project.title);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1816] hover:bg-[#322E29] text-white text-xs font-semibold rounded-md transition-all whitespace-nowrap"
          >
            <span>Échanger sur ce style de projet</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
