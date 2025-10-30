import React, { useState, useRef, useEffect } from 'react';
import { Eye, EyeOff, Edit, Camera, Trash2, Check } from 'lucide-react';

// ---------------- Input Component ----------------
export const Input = ({ value, onChange, label, placeholder, type = 'text' }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full mb-4 mt-4">
      {label && <label className="block text-white font-medium mb-1">{label}</label>}
      <div className={`relative border rounded-lg overflow-hidden transition-all duration-200 ${
        isFocused ? 'border-red-500 ring-red-500' : 'border-gray-700'
      }`}>
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full px-4 py-2 bg-gray-800 text-gray-100 placeholder-gray-400 outline-none"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

// ---------------- ProfilePhotoSelector Component ----------------
export const ProfilePhotoSelector = ({ setImage, preview, setPreview }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(preview || null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (preview) setPreviewUrl(preview);
    return () => { previewUrl && URL.revokeObjectURL(previewUrl); } // cleanup
  }, [preview]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      previewUrl && URL.revokeObjectURL(previewUrl); // cleanup old URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setPreview?.(url);
      setImage(file);
    } else {
      alert('Please select a valid image file');
    }
  };

  const handleRemove = () => {
    setImage(null);
    setPreviewUrl(null);
    setPreview?.(null);
  };

  const chooseFile = () => inputRef.current.click();

  return (
    <div className="relative w-32 h-32 mx-auto mb-4">
      <input type="file" accept="image/*" ref={inputRef} onChange={handleImageChange} className="hidden" />

      {!previewUrl ? (
        <div
          onClick={chooseFile}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer border-2 transition-colors ${
            hovered ? 'border-red-500' : 'border-gray-700'
          }`}
        >
          <Camera size={20} className="text-gray-300" />
        </div>
      ) : (
        <div
          className="relative w-32 h-32 rounded-full overflow-hidden cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src={previewUrl} alt="profile" className="w-full h-full object-cover" onClick={chooseFile} />
          {hovered && (
            <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center gap-2">
              <button
                onClick={chooseFile}
                className="p-2 bg-gray-700 rounded-full hover:bg-red-500 transition-colors"
              >
                <Edit size={16} className="text-gray-100" />
              </button>
              <button
                onClick={handleRemove}
                className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
              >
                <Trash2 size={16} className="text-white" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ---------------- TitleInput Component ----------------
export const TitleInput = ({ title, setTitle }) => {
  const [editing, setEditing] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex items-center gap-2 mb-5">
      {editing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoFocus
            className={`px-4 py-2 rounded-lg w-full bg-gray-200 text-white-600 placeholder-gray-400 outline-none transition-all duration-200 ${
              focused ? 'border-red-500 ring-red-500' : 'border-gray-700 border'
            }`}
          />
          <button
            onClick={() => setEditing(false)}
            className="bg-red-500 hover:bg-red-600 rounded-lg p-2 transition-all"
          >
            <Check size={16} className="text-black" />
          </button>
        </>
      ) : (
        <>
          <h1 className="text-black-600 font-bold text-xl">{title}</h1>
          <button
            onClick={() => setEditing(true)}
            className="text-red-400 hover:text-red-500 transition-colors"
          >
            <Edit size={16} />
          </button>
        </>
      )}
    </div>
  );
};
