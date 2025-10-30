"use client";

import { Input } from "./Inputs";
import { RatingInput } from "./ResumeSection";
import { Plus, Trash2 } from "lucide-react";

// Shared dark theme styles for all forms
const formStyles = {
  container: "bg-gray-900 p-6 rounded-lg shadow-md mb-8",
  heading: "text-xl font-bold text-red-500 mb-6",
  sectionHeading: "text-lg font-bold text-white mb-4 flex items-center gap-2",
  dotViolet: "w-3 h-3 rounded-full bg-violet-500",
  dotOrange: "w-3 h-3 rounded-full bg-orange-500",
  item: "bg-gray-800 p-4 rounded-lg relative",
  addButton: "flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all",
  trashButton: "absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors",
  textarea: "w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-red-500 outline-none",
  ratingLabel: "block text-gray-100 font-medium mb-2",
};

/* -------------------- AdditionalInfoForm -------------------- */
export const AdditionalInfoForm = ({ languages, interests, updateArrayItem, addArrayItem, removeArrayItem }) => (
  <div className={formStyles.container}>
    <h2 className={formStyles.heading}>Additional Information</h2>

    {/* Languages */}
    <div className="mb-10">
      <h3 className={formStyles.sectionHeading}>
        <div className={formStyles.dotOrange}></div> Languages
      </h3>
      <div className="space-y-8">
        {languages?.map((lang, index) => (
          <div key={index} className={formStyles.item}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 items-start gap-12 ">
              <Input
                label="Language"
                placeholder="e.g. English"
                value={lang.names || ""}
                onChange={({ target }) => updateArrayItem("languages", index, "names", target.value)}
              />
              <div className="gap-y-8 mt-6">
                <label className="block text-gray-100 font-medium mb-4 ">Proficiency</label>
                <RatingInput
                  value={lang.progress || 0}
                  total={5}
                  color="#f59e0b" bgColor="#374151"
                  onChange={(value) => updateArrayItem("languages", index, "progress", value)}
                />
              </div>
            </div>
            {languages.length > 1 && (
              <button type="button" className={formStyles.trashButton} onClick={() => removeArrayItem("languages", index)}>
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}
        <button type="button" className={formStyles.addButton} onClick={() => addArrayItem("languages", { names: "", progress: 0 })}>
          <Plus size={16} /> Add Language
        </button>
      </div>
    </div>

    {/* Interests */}
    <div className="mb-6">
      <h3 className={formStyles.sectionHeading}>
        <div className={formStyles.dotOrange}></div> Interests
      </h3>
      <div className="space-y-4">
        {interests?.map((interest, index) => (
          <div key={index} className={formStyles.item}>
            <Input
              placeholder="e.g. Reading, Photography"
              value={interest || ""}
              onChange={({ target }) => updateArrayItem("interests", index, null, target.value)}
            />
            {interests.length > 1 && (
              <button type="button" className={formStyles.trashButton} onClick={() => removeArrayItem("interests", index)}>
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}
        <button type="button" className={formStyles.addButton} onClick={() => addArrayItem("interests", "")}>
          <Plus size={16} /> Add Interest
        </button>
      </div>
    </div>
  </div>
);

/* -------------------- CertificationInfoForm -------------------- */
export const CertificationInfoForm = ({ certification, updateArrayItem, addArrayItem, removeArrayItem }) => (
  <div className={formStyles.container}>
    <h2 className={formStyles.heading}>Certifications</h2>
    <div className="space-y-6 mb-6">
      {certification.map((cert, index) => (
        <div key={index} className={formStyles.item}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Certificate Title" placeholder="Full Stack Web Developer" value={cert.title || ""} onChange={({ target }) => updateArrayItem(index, "title", target.value)} />
            <Input label="Issuer" placeholder="Coursera / Google / etc." value={cert.issuer || ""} onChange={({ target }) => updateArrayItem(index, "issuer", target.value)} />
            <Input label="Year" placeholder="2025" value={cert.year || ""} onChange={({ target }) => updateArrayItem(index, "year", target.value)} />
          </div>
          {certification.length > 1 && (
            <button type="button" className={formStyles.trashButton} onClick={() => removeArrayItem(index)}>
              <Trash2 size={16} />
            </button>
          )}
        </div>
      ))}
      <button type="button" className={formStyles.addButton} onClick={() => addArrayItem({ title: "", issuer: "", year: "" })}>
        <Plus size={16} /> Add Certification
      </button>
    </div>
  </div>
);

/* -------------------- ContactInfoForm -------------------- */
export const ContactInfoForm = ({ contactInfo, updateSection }) => (
  <div className={formStyles.container}>
    <h2 className={formStyles.heading}>Contact Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2">
        <Input label="Address" placeholder="Short Address" value={contactInfo.location || ""} onChange={({ target }) => updateSection("location", target.value)} />
      </div>
      <Input label="Email" placeholder="john@example.com" type="email" value={contactInfo.email || ""} onChange={({ target }) => updateSection("email", target.value)} />
      <Input label="Phone Number" placeholder="1234567890" value={contactInfo.phone || ""} onChange={({ target }) => updateSection("phone", target.value)} />
      <Input label="LinkedIn" placeholder="https://linkedin.com/in/username" value={contactInfo.linkedin || ""} onChange={({ target }) => updateSection("linkedin", target.value)} />
      <Input label="GitHub" placeholder="https://github.com/username" value={contactInfo.github || ""} onChange={({ target }) => updateSection("github", target.value)} />
      <div className="md:col-span-2">
        <Input label="Portfolio / Website" placeholder="https://yourwebsite.com" value={contactInfo.website || ""} onChange={({ target }) => updateSection("website", target.value)} />
      </div>
    </div>
  </div>
);

/* -------------------- EducationDetailsForm -------------------- */
export const EducationDetailsForm = ({ educationInfo, updateArrayItem, addArrayItem, removeArrayItem }) => (
  <div className={formStyles.container}>
    <h2 className={formStyles.heading}>Education</h2>
    <div className="space-y-6 mb-6">
      {educationInfo.map((edu, index) => (
        <div key={index} className={formStyles.item}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Degree" placeholder="BTech in Computer Science" value={edu.degree || ""} onChange={({ target }) => updateArrayItem(index, "degree", target.value)} />
            <Input label="Institution" placeholder="XYZ University" value={edu.institution || ""} onChange={({ target }) => updateArrayItem(index, "institution", target.value)} />
            <Input label="Start Date" type="month" value={edu.startDate || ""} onChange={({ target }) => updateArrayItem(index, "startDate", target.value)} />
            <Input label="End Date" type="month" value={edu.endDate || ""} onChange={({ target }) => updateArrayItem(index, "endDate", target.value)} />
          </div>
          {educationInfo.length > 1 && <button type="button" className={formStyles.trashButton} onClick={() => removeArrayItem(index)}><Trash2 size={16} /></button>}
        </div>
      ))}
      <button type="button" className={formStyles.addButton} onClick={() => addArrayItem({ degree: "", institution: "", startDate: "", endDate: "" })}>
        <Plus size={16} /> Add Education
      </button>
    </div>
  </div>
);

/* -------------------- ProfileInfoForm -------------------- */
export const ProfileInfoForm = ({ profileData, updateSection }) => (
  <div className={formStyles.container}>
    <h2 className={formStyles.heading}>Personal Information</h2>
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Full Name" className="block text-gray-100 font-medium mb-2" placeholder="John Doe" value={profileData.fullName || ""} onChange={({ target }) => updateSection("fullName", target.value)} />
        <Input label="Designation" placeholder="Full Stack Developer" value={profileData.designation || ""} onChange={({ target }) => updateSection("designation", target.value)} />
        <div className="md:col-span-2">
          <label className="block text-gray-100 font-medium mb-2">Summary</label>
          <textarea className={formStyles.textarea} rows={4} placeholder="" value={profileData.summary || ""} onChange={({ target }) => updateSection("summary", target.value)} />
        </div>
      </div>
    </div>
  </div>
);

/* -------------------- ProjectDetailForm -------------------- */
export const ProjectDetailForm = ({ projectInfo, updateArrayItem, addArrayItem, removeArrayItem }) => (
  <div className={formStyles.container}>
    <h2 className={formStyles.heading}>Projects</h2>
    <div className="space-y-6 mb-6">
      {projectInfo.map((project, index) => (
        <div key={index} className={formStyles.item}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Input label="Project Title" placeholder="Portfolio Website" value={project.title || ""} onChange={({ target }) => updateArrayItem(index, "title", target.value)} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-100 font-medium mb-2">Description</label>
              <textarea className={formStyles.textarea} rows={3} placeholder="Short description about the project" value={project.description || ""} onChange={({ target }) => updateArrayItem(index, "description", target.value)} />
            </div>
            <Input label="GitHub Link" placeholder="https://github.com/username/project" value={project.github || ""} onChange={({ target }) => updateArrayItem(index, "github", target.value)} />
            <Input label="Live Demo URL" placeholder="https://yourproject.live" value={project.liveDemo || ""} onChange={({ target }) => updateArrayItem(index, "liveDemo", target.value)} />
          </div>
          {projectInfo.length > 1 && <button type="button" className={formStyles.trashButton} onClick={() => removeArrayItem(index)}><Trash2 size={16} /></button>}
        </div>
      ))}
      <button type="button" className={formStyles.addButton} onClick={() => addArrayItem({ title: "", description: "", github: "", liveDemo: "" })}>
        <Plus size={16} /> Add Project
      </button>
    </div>
  </div>
);

/* -------------------- SkillsInfoForm -------------------- */
export const SkillsInfoForm = ({ skillsInfo, updateArrayItem, addArrayItem, removeArrayItem }) => {
  return (
  <div className={formStyles.container}>
    <h2 className={formStyles.heading}>Skills</h2>
    <div className="space-y-6 mb-6">
      {skillsInfo.map((skill, index) => (
        <div key={index} className={formStyles.item}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Input label="Skill Name" placeholder="JavaScript" value={skill.name || ""} onChange={({ target }) => updateArrayItem(index, "name", target.value)} />
            <div className="pt-4">
              <label className="block text-gray-100 font-medium mb-4">Proficiency ({skill.progress ? Math.round(skill.progress / 20) : 0}/5)</label>
              <RatingInput value={skill.progress || 0} total={5} color="#f59e0b" bgColor="#374151" onChange={(newValue) => updateArrayItem(index, "progress", newValue)} />
            </div>
          </div>
          {skillsInfo.length > 1 && <button type="button" className={formStyles.trashButton} onClick={() => removeArrayItem(index)}><Trash2 size={16} /></button>}
        </div>
      ))}
      <button type="button" className={formStyles.addButton} onClick={() => addArrayItem({ name: "", progress: 0 })}>
        <Plus size={16} /> Add Skill
     </button>
      </div>
    </div>
  );
};

  // return (
  //         <WorkExperienceForm
  //           workExperience={resumeData?.workExperience}
  //           updateArrayItem={(index, key, value) => {
  //             updateArrayItem("workExperience", index, key, value)
  //           }}
  //           addArrayItem={(newItem) => addArrayItem("workExperience", newItem)}
  //           removeArrayItem={(index) => removeArrayItem("workExperience", index)}
  //         />
  //       )
// WorkExperienceForm Component
export const WorkExperienceForm = ({ workExperience, updateArrayItem, addArrayItem, removeArrayItem }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold text-white mb-6">Work Experience</h2>
      <div className="space-y-6 mb-6">
        {workExperience.map((experience, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Company"
                placeholder="ABC Corp"
                value={experience.company || ""}
                onChange={({ target }) => updateArrayItem(index, "company", target.value)}
              />

              <Input
                label="Role"
                placeholder="Frontend Developer"
                value={experience.role || ""}
                onChange={({ target }) => updateArrayItem(index, "role", target.value)}
              />
              </div>
              <div className="flex flex-wrap gap-6 mx-auto">
              <Input
                label="Start Date"
                type="month"
                value={experience.startDate || ""}
                onChange={({ target }) => updateArrayItem(index, "startDate", target.value)}
              />

              <Input
                label="End Date"
                type="month"
                value={experience.endDate || ""}
                onChange={({ target }) => updateArrayItem(index, "endDate", target.value)}
              />
            </div>

            <div className="mt-6">
              <label className="block text-gray-100 font-medium mb-2">Description</label>
              <textarea
                placeholder="What did you do in this role?"
                className="w-full px-4 py-2 bg-gray-800 text-gray-100 placeholder-gray-400 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-red-500 outline-none"
                rows={3}
                value={experience.description || ""}
                onChange={({ target }) => updateArrayItem(index, "description", target.value)}
              />
            </div>

            {workExperience.length > 1 && (
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                onClick={() => removeArrayItem(index)}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all"
          onClick={() =>
            addArrayItem({
              company: "",
              role: "",
              startDate: "",
              endDate: "",
              description: "",
            })
          }
        >
          <Plus size={16} />
          Add Work Experience
        </button>
      </div>
    </div>
  );
};
