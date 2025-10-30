import React from "react";
import Navbar from "../components/Navbar.jsx";

const About = () => {
  return (
     
    <div className="bg-gray-50 text-black py-10 px-8 pt-4 sm:px-12 lg:px-20">
      <Navbar/>
      {/* 1. Main Header and Core Mission */}
      <header className="max-w-6xl mx-auto text-center mb-16 pt-8">
        <p className="text-2xl font-semibold uppercase tracking-widest text-red-500 mb-3">
          Who We Are
        </p>
        <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight">
          Building the Future with{" "}
          <span className="text-red-500">Precision</span> &{" "}
          <span className="text-red-500">Power</span>
        </h1>
      </header>

      {/* 2. Mission & Values Section */}
      <div className="max-w-6xl mx-auto mb-20 bg-gray-900 p-10 sm:p-14 rounded-3xl shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
          <div>
            <h3 className="text-4xl font-bold mb-4 text-red-500">
              Our Defining Mission
            </h3>
            <p className="text-xl leading-relaxed text-gray-300">
              AAt Resumebuilder, we believe that your first impression should
              always be your best one. We’re a team of developers, designers,
              and career experts dedicated to helping individuals craft
              professional, personalized resumes with ease. Our platform
              empowers users to create, customize, and download visually
              appealing resumes that stand out in today’s competitive job
              market. Whether you're a fresh graduate or a seasoned
              professional, Resumebuilder simplifies the resume creation process
              — combining modern design with intelligent suggestions to
              highlight your strengths. We value simplicity, creativity, and
              impact. Our goal is to make resume building effortless, so you can
              focus on what truly matters — achieving your career dreams. Join
              thousands of users who trust Resumebuilder to turn their
              experience into opportunity.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-4">Core Principles</h3>
            <ul className="space-y-4 text-xl text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 text-3xl mr-3 font-extrabold flex-shrink-0">
                  •
                </span>
                Integrity:Absolute transparency and ethical execution.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-3xl mr-3 font-extrabold flex-shrink-0">
                  •
                </span>
                Impact: Every effort must deliver measurable, significant
                results.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-3xl mr-3 font-extrabold flex-shrink-0">
                  •
                </span>
                Agility: A swift, decisive response to every challenge.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. The Team - The Engine of Our Success */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-5xl font-extrabold text-center mb-16">
          Meet The{" "}
          <span className="text-red-500 border-b-4 border-red-500">
            Team
          </span>
        </h3>

        {/* Team Grid (Bigger Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Team Member 1: CEO */}
          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-4 border-4 border-black group-hover:bg-black transition-colors duration-500 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5NWATYB-uSmqEX3f5rhBLHfYU3xrg1DPhjzwIw0fSzQ2jzWo95WgQ6cVQQuIHPAiydI&usqp=CAU"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="text-3xl font-bold text-center mb-1">Arjo Ghosh</h4>
            <p className="text-red-500 text-center font-semibold mb-4">
              Chief Executive Officer
            </p>
            <p className="text-gray-700 text-center text-sm italic">
              "The black and red of our brand reflects our focus: solid strategy
              meets dynamic execution."
            </p>
          </div>

          {/* Team Member 2: CTO */}
          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-4 border-4 border-black group-hover:bg-black transition-colors duration-500 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5NWATYB-uSmqEX3f5rhBLHfYU3xrg1DPhjzwIw0fSzQ2jzWo95WgQ6cVQQuIHPAiydI&usqp=CAU"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-3xl font-bold text-center mb-1">
              Sayan Adhikari
            </h4>
            <p className="text-red-500 text-center font-semibold mb-4">
              Chief Creative Officer
            </p>
            <p className="text-gray-700 text-center text-sm italic">
              "Our designs are bold, clear, and focused—just like the contrast
              of black and red."
            </p>
          </div>

          {/* Team Member 3: CCO (Creative) */}
          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-4 border-4 border-black group-hover:bg-black transition-colors duration-500 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5NWATYB-uSmqEX3f5rhBLHfYU3xrg1DPhjzwIw0fSzQ2jzWo95WgQ6cVQQuIHPAiydI&usqp=CAU"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-3xl font-bold text-center mb-1">
              Srija Das
            </h4>
            <p className="text-red-500 text-center font-semibold mb-4">
              Chief Creative Officer
            </p>
            <p className="text-gray-700 text-center text-sm italic">
              "Our designs are bold, clear, and focused—just like the contrast
              of black and red."
            </p>
          </div>

          {/* Team Member 4: COO */}
          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-4 border-4 border-black group-hover:bg-black transition-colors duration-500 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5NWATYB-uSmqEX3f5rhBLHfYU3xrg1DPhjzwIw0fSzQ2jzWo95WgQ6cVQQuIHPAiydI&usqp=CAU"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-3xl font-bold text-center mb-1">
              Rohan Mondol
            </h4>
            <p className="text-red-500 text-center font-semibold mb-4">
              Chief Operating Officer
            </p>
            <p className="text-gray-700 text-center text-sm italic">
              "Flawless execution is our standard. We ensure every promise is
              delivered with intensity."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
