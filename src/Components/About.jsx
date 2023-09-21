/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/clouds-bg.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Computer Science Student studying at Yaba College of Technology. I enjoy breaking complex problems into smaller solvable chunks and making decisions based on data.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web development",
  "Data Science",
  "Web Scraping",
  "Scripting",
  "Collaboration",
  "Learning",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Enter the world of Oghenetega Biokoro, a passionate student at Yaba College of Technology, Nigeria, with a bold ambition – revolutionizing the nation's agriculture. His ten-year vision aims to reshape the field and uplift communities. Oghenetega's dreams don't stop there – he's determined to become a global force as a Machine Learning Engineer, driving transformative tech solutions worldwide. As a trailblazer in Computer Science and an executive in the Nigeria Association of Computing Students, Oghenetega is already shaping the future. Join him in his inspiring journey to bring about meaningful change and innovation.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
