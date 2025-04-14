"use client";

import Link from "next/link";

export default function ProjectClient({ project, nextProject, prevProject }) {
  return (
    <div className="project-page">
      <div className="project-nav">
        {/* Previous Link */}
        <div className="link">
          <span>&#8592;&nbsp;</span>
          <Link href={`/projects/${prevProject.slug}`}>Previous</Link>
        </div>

        {/* Title */}
        <div className="project-page-scroll-progress">
          <p>{project.title}</p>
            <div className="project-page-scroll-progress-bar"></div>
        </div>

        {/* Next Link */}
        <div className="link">
          <Link href={`/projects/${nextProject.slug}`}>Next</Link>
          <span>&#8594;&nbsp;</span>
        </div>
      </div>

      {/* Placeholder for Hero Section */}
      < div className="project-hero">
            <h1>{project.title}</h1>
            <p id="project-description">{project.description}</p>
        </div>

        <div className="project-images">
        {project.images &&
            project.images.map((image, index) => (
            <div className="project-img" key={index}>
                <img src={image} alt={`Project image ${index + 1}`} />
            </div>
            ))}
        </div>

        <div className="project-footer">
            <h1>{nextProject.title}</h1>

            <div className="project-footer-copy">
                <p>Next Project</p>
            </div>

            <div className="next-project-progress">
                <div className="next-project-progress-bar"></div>
            </div>
        </div>
    </div>
  );
}
