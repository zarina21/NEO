import React from "react";
import projects from "./database";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="grid mb-6">
      {projects.map((project) => (
        <div className="cell centrar mt-6 mb-6" key={project.id}>
          <iframe src={project.url} title={project.title}></iframe>
          <h1 className="title mt-3 mb-3">{project.title}</h1>
          <p className="mt-2 mb-2">{project.description}</p>
          <p className="enlace"> <Link href={project.url}>Show page</Link> </p>
        </div>
      ))}
    </div>
  );
};
export default Portfolio;  