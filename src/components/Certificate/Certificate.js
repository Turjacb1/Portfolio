import React from "react";
import "./Certificate.css";
import cssImage from "../Image/sql.png"; 
import problemImage from "../Image/problempng.png";
import sqlImage from "../Image/Css.png"
import nasa from "../Image/Nasa.png" 
import AiImage from "../Image/AI.png"
import commuincation from "../Image/Communication.png"
import digitaImage from "../Image/Digital.png"
import cybar from "../Image/networking.png"
import phython from "../Image/Phython.png"

const certificates = [
  {
    title: "CSS (Basic) Certificate",
    issuer: "HackerRank",
    date: "October 2024",
    image: cssImage,
  },
  {
    title: "Problem Solving (Basic) Certificate",
    issuer: "HackerRank",
    date: "October 2024",
    image:  problemImage,
  },

  {
    title: "SQL (Basic) Certificate",
    issuer: "HackerRank",
    date: "October 2024",
    image: sqlImage,
  },

  {
    title: "NASA Space Apps Challenge",
    issuer: "NASA",
    date: "October 2025",
    image: nasa,
  },

   {
    title: "Effect of Generative AI in Modern Research and Industry",
    issuer: "Sister Nivedita University ,Kolkata",
    date: "October 2025",
    image: AiImage,
  },

     {
    title: " Communication MasterClass",
    issuer: "Ten Minute School",
    date: "January 2023",
    image: commuincation,
  },

  {
    title: " Complete Digital Marketing Live Course With SMM,SEO,Email And Adsence",
    issuer: "E-shikhon",
    date: "March 2023",
    image: digitaImage,
  },

  {
    title: " Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "November 2025",
    image: cybar,
  },

  {
    title: " Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "November 2025",
    image: phython,
  },

];

const Certificate = () => {
  return (
    <div className="certificate-container">
      <h1 className="certificate-title">
        <span role="img" aria-label="trophy">
          🏆
        </span>{" "}
        My Certificates
      </h1>

      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.title}
                className="certificate-image"
              />
            )}
            <div className="certificate-info">
              <h2>{cert.title}</h2>
              <p>{cert.issuer}</p>
              <p className="date">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;