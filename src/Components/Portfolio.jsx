/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tega-Blog App",
    description:
      "This is a custom Blog web application I made using Flask. It allows you create an account, login, view blogs, create blogs, and delete them. You can call it CRUD 😁.",
    url: "https://github.com/Leommm-byte/Tega-blog",
  },
  {
    title: "Movie App",
    description:
      "A Web application that displays my best movies. It has the functionality of adding, deleting and updating the movie database.",
    url: "https://github.com/Leommm-byte/MovieProject",
  },
  {
    title: "Tindog",
    description: "A parody website",
    url: "https://leommm-byte.github.io/Tindog/",
  },
  {
    title: "T-Pass",
    description: "A local password manager that is secure (in as much your system is).",
    url: "https://github.com/Leommm-byte/T-Pass",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
