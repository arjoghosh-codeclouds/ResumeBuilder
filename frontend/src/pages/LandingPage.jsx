import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  LayoutTemplate,
  Zap,
  Download,
  Menu,
  X,
  FileUser,
  
} from "lucide-react";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { UserContext } from "../context/userContext";
import { ProfileInfoCard } from "../components/Cards";
import { landingPageStyles } from "../assets/dummystyle";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Example from "../components/Testimonial";

  

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };
 const handleViewTemplate= ()=>{
  if(!user){
    setOpenAuthModal(true);
  }
  else{
    navigate("")
  }
 }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full  bg-gradient-to-br from-slate-50 via-white to-violet-50">   
        
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-grey-600 backdrop-blur-xl border-b border-violet-100/50">
        <div className=" mx-auto px-8 sm:px-8 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            
              <FileUser color="#e40101" />
            <span className="text-xl max-md:text-xl font-black bg-red-500 bg-clip-text text-transparent">
              ResumeBuilder
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className={landingPageStyles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className={landingPageStyles.mobileMenuIcon} />
            ) : (
              <Menu size={24} className={landingPageStyles.mobileMenuIcon} />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className={landingPageStyles.desktopAuthButton}
                onClick={() => setOpenAuthModal(true)}
              >
                <div
                  className={landingPageStyles.desktopAuthButtonOverlay}
                ></div>
                <span className={landingPageStyles.desktopAuthButtonText}>
                  Get Started
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className={landingPageStyles.mobileMenu}>
            <div className={landingPageStyles.mobileMenuContainer}>
              {user ? (
                <div className={landingPageStyles.mobileUserInfo}>
                  
                  <button
                    className={landingPageStyles.mobileDashboardButton}
                    onClick={() => {
                      navigate("/dashboard");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Go to Dashboard
                  </button>
                </div>
              ) : (
                <button
                  className={landingPageStyles.mobileAuthButton}
                  onClick={() => {
                    setOpenAuthModal(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-5 bg-white ">
        
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-20">
          <div className="flex flex-col justify-between gap-10 lg:gap-12 items-center">
            <div className="w-full min-h-screen space-y-8 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center items-center max-h-full  text-center sm:text-4xl sm:mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl lg:text-8xl  font-black w-full leading-tight">
                  <span className="block  text-gray-800">World's</span>
                  <span className="block bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent space-x-12">
                    Leading
                  </span>
                  <span className="block text-gray-800 ml-2 sm:ml-5">Resumemaker</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg font-semibold font-display text-center px-4">
                Expertly designed templates that are ATS-friendly, recruiter-approved, and tailored to your career goals helping you stand out and get hired faster.
              </p>

              <div className={landingPageStyles.ctaButtons}>
                <button className={landingPageStyles.primaryButton} onClick={handleCTA}>
                  <div className={landingPageStyles.primaryButtonOverlay}></div>
                  <span className={landingPageStyles.primaryButtonContent}>
                    Start Building
                    <ArrowRight size={18} className={landingPageStyles.primaryButtonIcon} />
                  </span>
                </button>

                <button onClick={handleViewTemplate} className={landingPageStyles.secondaryButton}>
                  View Templates
                </button>
              </div>

              <div className={landingPageStyles.statsContainer}>
                {[
                  {
                    value: "50K+",
                    label: "Resumes Created",
                    gradient: "from-violet-600 to-fuchsia-600",
                  },
                  {
                    value: "4.9★",
                    label: "User Rating",
                    gradient: "from-orange-500 to-red-500",
                  },
                  {
                    value: "5 Min",
                    label: "Build Time",
                    gradient: "from-emerald-500 to-teal-500",
                  },
                ].map((stat, idx) => (
                  <div key={idx} className={landingPageStyles.statItem}>
                    <div className="text-xl sm:text-3xl lg:text-4xl font-black bg-black bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
               </div>
              </div>
           </section>

                {/* Features Section */}
                <section className="bg-white py-16 sm:py-24">
                  <div className={landingPageStyles.featuresContainer}>
                    <div className="text-center mb-12 sm:mb-20 ">
                      <h2 className={"text-3xl gap-y-4 sm:pl-1.5 sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 sm:mb-10 text-4xl"}>

                        Why Choose{" "}
                        <span className="bg-red-600 text-6xl  bg-clip-text text-transparent mx-auto sm:pl-2">
                          ResumeBuilder?
                        </span>
                      </h2>
                      <p className={landingPageStyles.featuresDescription}>
                        Everything you need to create a professional resume that stands
                        out
                      </p>
                    </div>

                    <div className={landingPageStyles.featuresGrid}>
                      {[
                        {
                          icon: <Zap className={landingPageStyles.featureIcon} />,
                          title: "Content Enhancement",
                          description:
                            "Offer a database of suggested, job-specific bullet points that users can insert and customize.This will help you getting your first job.",
                          gradient: landingPageStyles.featureIconViolet,
                          bg: landingPageStyles.featureCardViolet,
                        },
                        {
                          icon: (
                            <LayoutTemplate className={landingPageStyles.featureIcon} />
                          ),
                          title: "Job Description Matcher",
                          description:
                            "Allow the user to paste a target job description (JD). The tool then analyzes the JD against the user's resume",
                          gradient: landingPageStyles.featureIconFuchsia,
                          bg: landingPageStyles.featureCardFuchsia,
                        },
                        {
                          icon: <Download className={landingPageStyles.featureIcon} />,
                          title: "Visual Skill Rating",
                          description:
                            "Allow users to represent skills visually using progress bars, circles, or proficiency levels that dynamically update on the template.",
                          gradient: landingPageStyles.featureIconOrange,
                          bg: landingPageStyles.featureCardOrange,
                        },
                      ].map((feature, index) => (
                        <div key={index} className={landingPageStyles.featureCard}>
                          <div className={landingPageStyles.featureCardHover}></div>
                          <div
                            className={`${landingPageStyles.featureCardContent} ${feature.bg}`}
                          >
                            <div
                              className={`${landingPageStyles.featureIconContainer} ${feature.gradient}`}
                            >
                              {feature.icon}
                            </div>
                            <h3 className={landingPageStyles.featureTitle}>
                              {feature.title}
                            </h3>
                            <p className={landingPageStyles.featureDescription}>
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

        {/* CTA Section */}
        <section className={landingPageStyles.ctaSection}>
          <div className={landingPageStyles.ctaContainer}>
            <div className={landingPageStyles.ctaCard}>
              <div className={landingPageStyles.ctaCardBg}></div>
              <div className={landingPageStyles.ctaCardContent}>
                <h2 className="text-4xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
                  Ready to Dive in?{" "}
                  <br/>
                  <span className="bg-red-500 bg-clip-text text-transparent text-3xl">
                    Start your free trial today!
                  </span>
                </h2>
                <p className={landingPageStyles.ctaDescription}>
                  Join thousands of professionals who landed their dream jobs
                  with our platform
                </p>
                <button
                  className={landingPageStyles.primaryButton}
                  onClick={handleCTA}
                >
                  <div
                    className={landingPageStyles.desktopAuthButtonOverlay}
                  ></div>
                  <span className={landingPageStyles.desktopAuthButtonText}>
                    Start Building Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Example/>
      <Logo/>
      <Footer/>

      {/* Modal */}
      <Modal
        isOpen={openAuthModal} 
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      > 
        <div>
          {currentPage === "login" && <Login  setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal> 
    </div>
  );
};

export default LandingPage