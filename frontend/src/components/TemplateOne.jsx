import React, { useEffect, useRef, useState } from "react";
import { LuMail, LuPhone, LuGithub, LuGlobe } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import {
  EducationInfo,
  WorkExperience,
  ProjectInfo, // Note: ProjectInfo is not in Template #1.png but kept for completeness
  CertificationInfo,
} from "./ResumeSection";
import { formatYearMonth } from "../utils/helper";


const THEME_COLOR = "#0F0101"; 

const Title = ({ text, color = THEME_COLOR, className = "" }) => (
  <div className={`relative w-fit mb-2 resume-section-title ${className}`}>
    <h2 className="relative text-base font-bold uppercase tracking-wide pb-2">
      {text}
    </h2>
    <div className="w-full h-[2px] mt-1" style={{ backgroundColor: color }} />
  </div>
);

const TemplateOne = ({ resumeData = {}, containerWidth }) => {
  const {
    profileInfo = {},
    contactInfo = {},
    education = [],
    languages = [],
    workExperience = [],
    skills = [],
    certification = [],
    interests = [],
  } = resumeData;

  const resumeRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(800);
  const [scale, setScale] = useState(1);


  useEffect(() => {
    if (resumeRef.current && containerWidth > 0) {
      const actualWidth = resumeRef.current.offsetWidth;
      setBaseWidth(actualWidth);
      setScale(containerWidth / actualWidth);
    }
  }, [containerWidth]);

  return (
    <div
      ref={resumeRef}
      className="p-6 bg-white font-sans text-gray-800 mr-14"
      style={{
        transform: containerWidth > 0 ? `scale(${scale})` : undefined,
        transformOrigin: "top left",
        width: containerWidth > 0 ? `${baseWidth}px` : undefined,
        // Assuming a standard resume width for print
        maxWidth: "800px" 
      }}
    >
      {/* Header - Name on left, Contact on right */}
      <div className="flex justify-between items-start mb-6 border-b pb-6 ">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-2xl  font-bold pb-1" style={{ color: THEME_COLOR }}>
            {profileInfo.fullName || "Your Name"}
          </h1>
          <p className="text-lg font-medium">{profileInfo.designation || "Your Designation"}</p>
        </div>
        <div className="flex flex-col pt-2 gap-y-1 mr-15 text-xs ">
          
          {contactInfo.website && (
            <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
              {contactInfo.websiteName || profileInfo.designation.toLowerCase().replace(/\s/g, '') + '.design'}
            </a>
          )}
          {contactInfo.email && (
            <a href={`mailto:${contactInfo.email}`} className="text-black hover:underline">
              {contactInfo.email}
            </a>
          )}
          {contactInfo.phone && (
            <span className="text-gray-700">
              {contactInfo.phone}
            </span>
          )}
            {contactInfo.linkedin && (
            <a href={contactInfo.linkedin} className="hover:underline text-blue-600">
              LinkedIn
            </a>
          )}
          {contactInfo.github && (
            <a href={contactInfo.github} className="hover:underline text-blue-600">
              GitHub
            </a>
          )}
          {contactInfo.website && (
            <a href={contactInfo.website} className="hover:underline text-blue-600">
              Portfolio
            </a>
          )}
           
        </div>
      </div>

      
      <div className="grid grid-cols-12 gap-8">
        
        <div className="col-span-7 space-y-6">
          
          {/* Work Experience */}
          {workExperience.length > 0 && (
            <div className="resume-section">
              <Title text="Work Experience" color={THEME_COLOR} />
              <div className="space-y-6">
                {workExperience.map((exp, i) => (
                  <WorkExperience
                    key={i}
                    company={exp.company}
                    role={exp.role}
                    duration={`${formatYearMonth(exp.startDate)} - ${formatYearMonth(exp.endDate)}`}
                    description={exp.description}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div className="resume-section">
              <Title text="Education" color={THEME_COLOR} />
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <EducationInfo
                    key={i}
                    degree={edu.degree}
                    institution={edu.institution}
                    duration={`${formatYearMonth(edu.startDate)} - ${formatYearMonth(edu.endDate)}`}
                    // The description/coursework is usually handled within the EducationInfo component
                  />
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {certification.length > 0 && (
            <div className="resume-section">
              <Title text="Certifications" color={THEME_COLOR} />
              <div className="space-y-2">
                {certification.map((cert, i) => (
                  <CertificationInfo
                    key={i}
                    title={cert.title}
                    issuer={cert.issuer}
                    // Assuming CertificationInfo can also handle a simple list or description
                  />
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Column (Sidebar): Summary, Skills, Languages, Interests */}
        <div className="col-span-4 space-y-6 pt-1">
          
          {/* Summary (Note: It's in the sidebar in the image) */}
          {profileInfo.summary && (
            <div className="resume-section">
              <Title text="Summary" color={THEME_COLOR} />
              <ul className="text-sm list-disc pl-5 space-y-1">
                {profileInfo.summary.split(/\s*-\s*/).filter(item => item).map((item, i) => (
                  <li key={i}>{item.replace(/^\*\s*/, '')}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills (Note: In the image, skills are presented as a simple list) */}
          {skills.length > 0 && (
            <div className="resume-section">
              <Title text="Skills" color={THEME_COLOR} />
              <ul className="text-sm list-disc pl-5 space-y-1">
                {skills.map((skill, i) => (
                  <li key={i}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          
          {languages.length > 0 && (
            <div className="resume-section">
              <Title text="Languages" color={THEME_COLOR} />
              <ul className="text-sm list-disc pl-5 space-y-1">
                {languages.map((lang, i) => (
                  <li key={i} className="bg-gray-100 px-1.5 py-0.5 rounded-full" >
                    {lang.names}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Interests (Note: In the image, interests are presented as a simple list) */}
          {interests.length > 0 && interests.some((i) => i) && (
            <div className="resume-section">
              <Title text="Interests" color={THEME_COLOR} />
              <ul className="text-sm list-disc pl-5 space-y-1">
                {interests.map((int, i) =>
                  int ? (
                    <li key={i}>
                      {int}
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;