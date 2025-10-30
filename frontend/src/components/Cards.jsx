import { useState, useContext,useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { Clock, Trash2, Edit, Check, Zap } from "lucide-react";
import { cardStyles } from "../assets/dummystyle";



export const ProfileInfoCard = () => {
  const navigate = useNavigate();
  const { user, clearUser } = useContext(UserContext);
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div
      ref={cardRef}
      className="relative flex items-center justify-center bg-transparent"
    >
      {/* Avatar Button */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="
          w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
          bg-red-500
          rounded-xl flex items-center justify-center
          shadow-md text-white font-black
          text-base sm:text-lg md:text-xl
          transition-transform duration-300 hover:scale-105
        "
      >
        {user.name ? user.name.charAt(0).toUpperCase() : ""}
      </button>

      {/* Expandable Info Dropdown */}
      <div
        className={`
          absolute top-full right-0 mt-4
          bg-white text-lg border border-gray-200  shadow-lg
          flex flex-col items-start
          overflow-hidden
          transform transition-all duration-300 origin-top-right
          ${expanded ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
          w-36 sm:w-40 md:w-44
        `}
      >
        <div className="w-full px-4 py-2 text-black font-bold text-sm sm:text-base truncate">
          {user.name}
        </div>
        <button
          onClick={handleLogout}
          className="
            w-full text-left px-4 py-2 text-3xl sm:text-sm  font-black
            text-red-600  hover:text-red-700
            transition-colors duration-200
          "
        >
          Logout
        </button>
      </div>
    </div>
  );
};



// ResumeSummaryCard with red/grey theme


export const ResumeSummaryCard = ({
  imgUrl = '/placeholder.png',
  title = 'Untitled Resume',
  createdAt = null,
  updatedAt = null,
  onSelect,
  onDelete,
  completion = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const formattedCreatedDate = createdAt
    ? new Date(createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : '—';

  const formattedUpdatedDate = updatedAt
    ? new Date(updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : '—';

  const getCompletionColor = () => {
    if (completion >= 90) return 'from-red-500 to-red-600';
    if (completion >= 70) return 'from-red-400 to-red-500';
    return 'from-red-200 to-red-300';
  };

  const getCompletionIcon = () => {
    if (completion >= 90) return <Check size={12} className="text-red-500" />;
    if (completion >= 70) return <Zap size={12} className="text-red-400" />;
    return <Zap size={12} className="text-red-400" />;
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (onDelete) onDelete();
  };

  const generateDesign = () => {
    const colors = [
      'from-red-50 to-red-100',
      'from-gray-100 to-gray-200',
      'from-red-100 to-gray-100',
      'from-gray-50 to-red-50',
    ];
    return colors[title.length % colors.length];
  };

  const designColor = generateDesign();

  return (
    <div
      className={`group relative h-[360px] sm:h-[380px] lg:h-[400px] flex flex-col rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:border-violet-300 bg-gray-900 border border-gray-700`}
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Completion indicator */}
      <div className={cardStyles.completionIndicator}>
        <div className={`${cardStyles.completionDot} bg-gradient-to-r ${getCompletionColor()}`}>
          <div className={cardStyles.completionDotInner} />
        </div>
        <span className="text-black">{completion}%</span>
        {getCompletionIcon()}
      </div>

      {/* Preview area with thumbnail */}
      <div className={`${cardStyles.previewArea} bg-gradient-to-br ${designColor} relative`}>
        {/* Thumbnail image */}
        <img
          src={imgUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-40"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3">
            <Edit size={28} className="text-white" />
          </div>
          <span className="text-black  text-xl font-extrabold">{title}</span>
          <span className="text-black text-lg leading-10 font-bold mt-1">{completion === 0 ? 'Start building' : `${completion}% completed`}</span>

          {/* Mini resume sections */}
          <div className="mt-4 flex gap-2">
            {['Profile', 'Work', 'Skills', 'Edu'].map((section, i) => (
              <div
                key={i}
                className={`px-2 py-1 text-xs rounded-md ${
                  i < Math.floor(completion / 25) ? 'bg-red-600 text-white font-medium' : 'bg-gray-700 text-gray-300'
                }`}
              >
                {section}
              </div>
            ))}
          </div>
        </div>

        {/* Hover overlay */}
        {isHovered && (
          <div className={cardStyles.actionOverlay}>
            <div className={cardStyles.actionButtonsContainer}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (onSelect) onSelect();
                }}
                className={`${cardStyles.editButton} bg-red-600 hover:bg-red-700`}
                title="Edit"
              >
                <Edit size={18} className="text-white" />
              </button>
              <button
                onClick={handleDeleteClick}
                className={`${cardStyles.deleteButton} bg-gray-700 hover:bg-red-600`}
                title="Delete"
              >
                <Trash2 size={18} className="text-white" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Info area */}
      <div className={cardStyles.infoArea}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h5 className="text-black font-bold">{title}</h5>
            <div className="flex items-center gap-2 text-black text-xs mt-1">
              <Clock size={12} />
              <span>Created At: {formattedCreatedDate}</span>
              <span>Updated At: {formattedUpdatedDate}</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${getCompletionColor()} rounded-full transition-all duration-700`}
            style={{ width: `${completion}%` }}
          ></div>
        </div>

        <div className="flex justify-between items-center mt-2 text-black text-xs font-medium">
          <span>{completion < 50 ? 'Getting Started' : completion < 80 ? 'Almost There' : 'Ready to Go!'}</span>
          <span>{completion}% Complete</span>
        </div>
      </div>
    </div>
  );
};


// TemplateCard with red/grey theme
export const TemplateCard = ({ thumbnailImg, isSelected, onSelect }) => {
  return (
    <div
      className={`group h-auto md:h-[300px] lg:h-[320px] flex flex-col bg-gray-800 border-2 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-lg rounded-3xl
      ${isSelected
          ? "border-red-500 shadow-lg shadow-red-500/20 bg-red-50"
          : "border-gray-700 hover:border-red-400"
        }`} 
      onClick={onSelect}
    >
      {thumbnailImg ? (
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={thumbnailImg || "/placeholder.svg"}
            alt="Template Preview"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {isSelected && (
            <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center">
              <div className="w-16 h-16 bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Check size={24} className="text-red-600" />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-[200px] flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-gray-100">
          <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center mb-3">
            <Edit size={20} className="text-white" />
          </div>
          <span className="text-gray-700 font-bold">No Preview</span>
        </div>
      )}
    </div>
  );
};
