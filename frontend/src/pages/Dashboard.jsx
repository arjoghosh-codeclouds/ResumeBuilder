import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';
import DashboardLayout from '../components/DashboardLayout';
import { LuCirclePlus, LuFilePlus, LuTrash2 } from 'react-icons/lu';
import moment from 'moment';
import { ResumeSummaryCard } from '../components/Cards';
import CreateResumeForm from '../components/CreateResumeForm';
import Modal from '../components/Modal';
import toast from 'react-hot-toast';
import Footer from '../components/Footer';
import ThemeSelector from "../components/ThemeSelector"
const Dashboard = () => {
  const navigate = useNavigate();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [allResumes, setAllResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resumeToDelete, setResumeToDelete] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [openThemeSelector, setOpenThemeSelector] = useState(false);
  const [currentResumeId, setCurrentResumeId] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAllResumes();
  }, []);
 
const updateTheme = async (newTheme) => {
  if (!currentResumeId) {
    console.error(" No resumeId found when updating theme");
    return;
  }

  // Update local state
  setResumeData((prev) => ({
    ...prev,
    template: { ...prev.template, theme: newTheme },
  }));

  // Persist to backend
  try {
    await axiosInstance.put(API_PATHS.RESUME.UPDATE(currentResumeId), {
      template: { theme: newTheme },
    });
    toast.success("Theme updated successfully!");
  } catch (error) {
    toast.error("Failed to update theme");
    console.error("Theme update error:", error);
  }
};
 const [resumeData, setResumeData] = useState({
     title: "Professional Resume",
     thumbnailLink: "",
     profileInfo: {
       fullName: "",
       designation: "",
       summary: "",
     },
     template: {
       theme: "modern",
       colorPalette: []
     },
     contactInfo: {
       email: "",
       phone: "",
       location: "",
       linkedin: "",
       github: "",
       website: "",
     },
     workExperience: [
       {
         company: "",
         role: "",
         startDate: "",
         endDate: "",
         description: "",
       },
     ],
     education: [
       {
         degree: "",
         institution: "",
         startDate: "",
         endDate: "",
       },
     ],
     skills: [
       {
         name: "",
         progress: 0,
       },
     ],
     projects: [
       {
         title: "",
         description: "",
         github: "",
         liveDemo: "",
       },
     ],
     certification: [
       {
         title: "",
         issuer: "",
         year: "",
       },
     ],
     languages: [
       {
         names: "",
         progress: 0,
       },
     ],
     interests: [""],
   })
  const calculateCompletion = (resume) => {
    let completedFields = 0;
    let totalFields = 0;

    totalFields += 3;
    if (resume.profileInfo?.fullName) completedFields++;
    if (resume.profileInfo?.designation) completedFields++;
    if (resume.profileInfo?.summary) completedFields++;

    totalFields += 2;
    if (resume.contactInfo?.email) completedFields++;
    if (resume.contactInfo?.phone) completedFields++;

    resume.workExperience?.forEach(exp => {
      totalFields += 5;
      if (exp.company) completedFields++;
      if (exp.role) completedFields++;
      if (exp.startDate) completedFields++;
      if (exp.endDate) completedFields++;
      if (exp.description) completedFields++;
    });

    resume.education?.forEach(edu => {
      totalFields += 4;
      if (edu.degree) completedFields++;
      if (edu.institution) completedFields++;
      if (edu.startDate) completedFields++;
      if (edu.endDate) completedFields++;
    });

    resume.skills?.forEach(skill => {
      totalFields+=2
      if (skill.name) completedFields++;
      if (skill.progress > 0) completedFields++;
    });

    resume.projects?.forEach(project => {
      totalFields += 4;
      if (project.title) completedFields++;
      if (project.description) completedFields++;
      if (project.github) completedFields++;
      if (project.liveDemo) completedFields++;
    });

    resume.certification?.forEach(cert => {
      totalFields+=3;
      if (cert.title) completedFields++;
      if (cert.issuer) completedFields++;
      if (cert.year) completedFields++;
    });

    resume.languages?.forEach(lang => {
      totalFields+=2;
      if (lang.names) completedFields++;
      if (lang.progress > 0) completedFields++;
    });

    totalFields += (resume.interests?.length || 0);
    completedFields += (resume.interests?.filter(i => i?.trim() !== "").length || 0);

    return Math.round((completedFields / totalFields) * 100);
  };

  const fetchAllResumes = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL);
      const resumesWithCompletion = response.data.map(resume => ({
        ...resume,
        completion: calculateCompletion(resume)
      }));
      setAllResumes(resumesWithCompletion);
    } catch (error) {
      console.error('Error fetching resumes:', error);
      toast.error('Failed to fetch resumes');
    } finally {
      setLoading(false);
    }
  };

  const getCompletionColor = (completion) => {
    if (completion >= 90) return 'bg-green-500';
    if (completion >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getCompletionStatus = (completion) => {
    if (completion < 50) return "Getting Started";
    if (completion < 80) return "Almost There";
    return "Ready to Go!";
  };

  const handleDeleteResume = async () => {
    if (!resumeToDelete) return;

    try {
      await axiosInstance.delete(API_PATHS.RESUME.DELETE(resumeToDelete));
      toast.success('Resume deleted successfully');
      fetchAllResumes();
    } catch (error) {
      console.error('Error deleting resume:', error);
      toast.error('Failed to delete resume');
    } finally {
      setResumeToDelete(null);
      setShowDeleteConfirm(false);
    }
  };

  const handleDeleteClick = (id) => {
    setResumeToDelete(id);
    setShowDeleteConfirm(true);
  };

  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 space-y-10 bg-gray-50 min-h-screen">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">My Resumes</h1>
            <p className="text-gray-600 text-lg">
              {allResumes.length > 0
                ? `You have ${allResumes.length} resume${allResumes.length !== 1 ? 's' : ''}`
                : 'Start building your professional resume'}
            </p>
          </div>

          <button
            className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
            onClick={() => setOpenCreateModal(true)}
          >
            <LuFilePlus size={20} /> Create New
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Empty State */}
        {!loading && allResumes.length === 0 && (
          <div className="flex flex-col items-center text-center py-20 space-y-4">
            <LuFilePlus size={40} className="text-gray-400" />
            <h3 className="text-2xl font-bold text-gray-800">No Resumes Yet</h3>
            <p className="text-gray-600 max-w-md">
              You haven't created any resumes yet. Start building your professional resume to land your dream job.
            </p>
            <button
              className="mt-4 flex items-center gap-2 px-6 py-3 bg-amber-100 text-black font-bold rounded-xl hover:scale-105  transition-transform"
              onClick={() => setOpenCreateModal(true)}
            >
              <LuFilePlus size={20} /> Create Your First Resume
            </button>
          </div>
        )}

        {/* Resume Grid */}
        {!loading && allResumes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* New Resume Card */}
            <div
              className="flex flex-col justify-center items-center bg-amber-100 text-black rounded-xl p-6 cursor-pointer hover:scale-105 hover:shadow-xl transition-transform"
              onClick={() => setOpenCreateModal(true)}
            >
              <LuCirclePlus size={36} />
              <h3 className="text-xl font-bold mt-2">Create New Resume</h3>
              <p className="text-black mt-1">Start building your career</p>
            </div>

            {allResumes.map(resume => (
              <ResumeSummaryCard
                key={resume._id}
                imgUrl={resume.thumbnailLink || '/placeholder.png'}
                title={resume.title}
                createdAt={resume.createdAt}
                updatedAt={resume.updatedAt}
                onSelect={() => navigate(`/resume/${resume._id}`)}
                onDelete={() => handleDeleteClick(resume._id)}
                completion={resume.completion || 0}
                completionColor={getCompletionColor(resume.completion || 0)}
                completionStatus={getCompletionStatus(resume.completion || 0)}
                isPremium={resume.isPremium}
                isNew={moment().diff(moment(resume.createdAt), 'days') < 7}
              />
            ))}
          </div>
        )}

      </div>

      

      {/* Create Resume Modal */}
      <Modal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        hideHeader
        maxWidth="max-w-3xl"
      >
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h3 className="text-2xl font-bold text-gray-900">Create New Resume</h3>
            <button onClick={() => setOpenCreateModal(false)} className="text-gray-500 hover:text-gray-900 text-xl">✕</button>
          </div>
          <CreateResumeForm
              onSuccess={(newResumeId) => {
                console.log("Sucess creating the form")
                setCurrentResumeId(newResumeId); 
                setOpenThemeSelector(true);
                setTimeout(() => setOpenCreateModal(false), 400);
                fetchAllResumes();
              }}
            />

        </div>
      </Modal>

    <Modal isOpen={openThemeSelector} onClose={() => setOpenThemeSelector(false)} title="Change Theme">
        <div className="w-[90vw] h-[80vh]">
        <ThemeSelector
          resumeId={currentResumeId} // ✅ pass it here
          selectedTheme={resumeData?.template?.theme}
          setSelectedTheme={updateTheme}
          onClose={() => {
             setOpenThemeSelector(false) 
             navigate(`/resume/${currentResumeId}`)}}
        />
        </div>
    </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        title="Confirm Deletion"
        showActionBtn
        actionBtnText="Delete"
        actionBtnClassName="bg-red-600 hover:bg-red-700"
        onActionClick={handleDeleteResume}
      >
        <div className="p-6 text-center space-y-4">
          <LuTrash2 size={28} className="text-orange-600 mx-auto" />
          <h3 className="text-xl font-bold text-gray-800">Delete Resume?</h3>
          <p className="text-gray-600">Are you sure you want to delete this resume? This action cannot be undone.</p>
        </div>
      </Modal>

    </DashboardLayout>
  );
};

export default Dashboard;
