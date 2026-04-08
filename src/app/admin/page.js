"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Image as ImageIcon, LogOut, UploadCloud, Trash2, CheckCircle2, AlertCircle, Filter, X, LayoutList } from "lucide-react";

// ─── Default data (will be replaced by Supabase later) ───
const DEFAULT_HERO_IMAGES = [
  { id: 1, src: "/hom1.jfif", name: "hom1.jfif" },
  { id: 2, src: "/hom4.jpg", name: "hom4.jpg" },
  { id: 3, src: "/hom2.jfif", name: "hom2.jfif" },
  { id: 4, src: "/hom5.jfif", name: "hom5.jfif" },
  { id: 5, src: "/hom3.jfif", name: "hom3.jfif" },
];

const DEFAULT_GALLERY_IMAGES = [
  { id: 1, src: "/wedding.jfif", category: "Wedding", name: "wedding.jfif" },
  { id: 2, src: "/prewedding.jpg", category: "Pre Wedding", name: "prewedding.jpg" },
  { id: 3, src: "/haaldi.jpg", category: "Haldi", name: "haaldi.jpg" },
  { id: 4, src: "/cinematic.jfif", category: "Cinematic Films", name: "cinematic.jfif" },
  { id: 5, src: "/newborn.jpg", category: "Newborn Baby", name: "newborn.jpg" },
  { id: 6, src: "/about-portrait.png", category: "Wedding", name: "about-portrait.png" },
];

const DEFAULT_SERVICES_IMAGES = [
  { id: 1, src: "/newborn.jpg", category: "Newborn Baby", name: "newborn.jpg" },
  { id: 2, src: "/prewedding.jpg", category: "Pre Wedding", name: "prewedding.jpg" },
  { id: 3, src: "/cinematic.jfif", category: "Cinematic Films", name: "cinematic.jfif" },
  { id: 4, src: "/wedding.jfif", category: "Wedding", name: "wedding.jfif" },
  { id: 5, src: "/haaldi.jpg", category: "Haldi", name: "haaldi.jpg" }
];

const CATEGORIES = ["Newborn Baby", "Pre Wedding", "Wedding", "Haldi", "Cinematic Films"];

// ─── Toast Notification Component ───
function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: 20, x: "-50%" }}
      className="fixed bottom-6 left-1/2 z-[100] flex items-center gap-3 px-5 py-3 rounded-lg text-sm font-medium shadow-[0_8px_30px_rgb(0,0,0,0.12)] border"
      style={{
        background: "#ffffff",
        borderColor: type === "success" ? "#dcfce7" : "#fee2e2",
        color: type === "success" ? "#15803d" : "#b91c1c",
      }}
    >
      {type === "success" ? (
        <CheckCircle2 className="w-5 h-5 text-green-600" />
      ) : (
        <AlertCircle className="w-5 h-5 text-red-600" />
      )}
      {message}
    </motion.div>
  );
}

// ─── Delete Confirmation Modal ───
function DeleteModal({ imageName, onConfirm, onCancel }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onCancel}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm mx-4 bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-6">
          <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
            <Trash2 className="w-6 h-6 text-red-500" />
          </div>
          <h3 className="text-gray-900 font-semibold text-lg mb-2">Delete Image</h3>
          <p className="text-sm text-gray-500 mb-6 font-inter leading-relaxed">
            Are you sure you want to delete <span className="font-semibold text-gray-800">{imageName}</span>? This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Image Card ───
function ImageCard({ image, onDelete, showCategory }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="relative group rounded-xl overflow-hidden aspect-square bg-gray-100 border border-gray-200 shadow-sm"
    >
      <img
        src={image.src}
        alt={image.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
        <div className="flex justify-end">
          <button
            onClick={() => onDelete(image)}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors shadow-sm cursor-pointer hover:scale-110"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        
        <div>
           {showCategory && (
            <span className="inline-block px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] uppercase tracking-wider font-semibold rounded mb-2 shadow-sm">
              {image.category}
            </span>
          )}
          <p className="text-white text-xs font-medium truncate drop-shadow-md">{image.name}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Upload Area ───
function UploadArea({ onUpload, categories, showCategorySelect, onClose }) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories?.[0] || "");
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const processFile = (f) => {
    if (f && f.type.startsWith("image/")) {
      setFile(f);
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(f);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) processFile(e.dataTransfer.files[0]);
  };

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) processFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file && preview) {
      onUpload({ file, preview, category: selectedCategory });
      setFile(null);
      setPreview(null);
      if (fileRef.current) fileRef.current.value = "";
      if(onClose) onClose();
    }
  };

  const clearPreview = () => {
    setFile(null);
    setPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
            <h3 className="font-instrument-serif text-2xl text-gray-900">Upload New Photo</h3>
            {onClose && (
                <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <X className="w-5 h-5"/>
                </button>
            )}
        </div>
        
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Drop zone */}
        <div className="flex-1">
            {!preview ? (
                <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileRef.current?.click()}
                className={`relative rounded-xl border-2 border-dashed p-8 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center h-full min-h-[200px]
                    ${dragActive ? "border-hom-gold bg-hom-gold/5" : "border-gray-200 bg-gray-50 hover:bg-gray-100/50"}
                `}
                >
                <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-hom-darkgold">
                   <UploadCloud className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-gray-700">Click or drag image to upload</p>
                <p className="text-xs text-gray-400 mt-2">SVG, PNG, JPG or GIF (max. 10MB)</p>
                </div>
            ) : (
                /* Preview */
                <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50 aspect-[4/3] flex items-center justify-center">
                    <img src={preview} alt="Preview" className="max-w-full max-h-full object-contain" />
                    <button 
                        onClick={clearPreview}
                        className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors cursor-pointer hover:scale-110"
                    >
                        <X className="w-4 h-4"/>
                    </button>
                </div>
            )}
        </div>

        {/* Controls */}
        <div className="w-full md:w-64 flex flex-col justify-between">
           <div>
               {showCategorySelect && (
                 <div className="mb-6">
                 <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                     Category Select
                 </label>
                 <select
                     value={selectedCategory}
                     onChange={(e) => setSelectedCategory(e.target.value)}
                     className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 outline-none focus:ring-2 focus:ring-hom-gold/20 focus:border-hom-gold transition-shadow appearance-none cursor-pointer"
                 >
                     {categories.map((cat) => (
                     <option key={cat} value={cat}>{cat}</option>
                     ))}
                 </select>
                 </div>
               )}
               
               {preview && (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 font-medium truncate mb-1">File Name</p>
                      <p className="text-sm text-gray-800 truncate font-semibold">{file?.name}</p>
                  </div>
               )}
           </div>

            <button
                onClick={handleUpload}
                disabled={!preview}
                className="w-full mt-6 px-4 py-3 bg-hom-black text-white hover:bg-hom-darkgold disabled:bg-gray-300 disabled:cursor-not-allowed rounded-lg text-sm font-semibold tracking-wide transition-colors flex justify-center items-center gap-2 shadow-sm cursor-pointer"
            >
                <UploadCloud className="w-4 h-4"/>
               Upload Image
            </button>
        </div>

      </div>
    </div>
  );
}

// ─── Main Admin Dashboard ───
export default function AdminDashboard() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Tabs: "gallery", "hero", "services"
  const [activeTab, setActiveTab] = useState("gallery");
  const [activeFilter, setActiveFilter] = useState("All");
  
  const [heroImages, setHeroImages] = useState(DEFAULT_HERO_IMAGES);
  const [galleryImages, setGalleryImages] = useState(DEFAULT_GALLERY_IMAGES);
  const [servicesImages, setServicesImages] = useState(DEFAULT_SERVICES_IMAGES);
  
  const [toast, setToast] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Check auth
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/check");
        if (res.ok) {
          setAuthenticated(true);
        } else {
          router.push("/login");
        }
      } catch {
        router.push("/login");
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setActiveFilter("All"); // Reset filter when tab changes
    setShowUploadModal(false);
  };

  const handleUpload = ({ preview, file, category }) => {
    const newImage = {
      id: Date.now(),
      src: preview,
      name: file.name,
      category: category || undefined,
    };
    
    if (activeTab === "hero") {
      setHeroImages((prev) => [newImage, ...prev]);
      showToast(`"${file.name}" added to Hero Banner`);
    } else if (activeTab === "gallery") {
      setGalleryImages((prev) => [newImage, ...prev]);
      showToast(`"${file.name}" added to ${category}`);
    } else if (activeTab === "services") {
      setServicesImages((prev) => [newImage, ...prev]);
      showToast(`"${file.name}" added to Services: ${category}`);
    }
    
    setShowUploadModal(false);
  };

  const handleDelete = (image) => {
    setDeleteModal({ image, section: activeTab });
  };

  const confirmDelete = () => {
    if (!deleteModal) return;
    const { image, section } = deleteModal;
    if (section === "hero") {
      setHeroImages((prev) => prev.filter((img) => img.id !== image.id));
    } else if (section === "gallery") {
      setGalleryImages((prev) => prev.filter((img) => img.id !== image.id));
    } else if (section === "services") {
      setServicesImages((prev) => prev.filter((img) => img.id !== image.id));
    }
    showToast(`Deleted successfully`);
    setDeleteModal(null);
  };

  // Compute what images to show
  let currentImages = [];
  if (activeTab === "hero") {
    currentImages = heroImages;
  } else if (activeTab === "gallery") {
    currentImages = activeFilter === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter);
  } else if (activeTab === "services") {
    currentImages = activeFilter === "All" ? servicesImages : servicesImages.filter((img) => img.category === activeFilter);
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-hom-gold/30 border-t-hom-gold rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!authenticated) return null;

  return (
    <div className="h-screen w-full flex bg-[#f8f9fa] font-inter overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      </AnimatePresence>

      {/* Delete Modal */}
      <AnimatePresence>
        {deleteModal && (
          <DeleteModal
            imageName={deleteModal.image.name}
            onConfirm={confirmDelete}
            onCancel={() => setDeleteModal(null)}
          />
        )}
      </AnimatePresence>

      {/* ─── Sidebar ─── */}
      <aside className="w-64 bg-[#14151a] text-white flex-col flex-shrink-0 hidden md:flex border-r border-[#1f2025]">
        {/* Brand Area */}
        <div className="h-20 flex flex-col justify-center px-6 border-b border-white/5 bg-[#1a1b22] shrink-0">
          <h1 className="text-[22px] font-instrument-serif text-hom-gold tracking-wide">HOM Photography</h1>
          <p className="text-[10px] text-gray-400 tracking-[0.15em] font-medium mt-0.5">STUDIO ADMIN</p>
        </div>

        {/* Navigation Tools */}
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {[
            { id: "gallery", label: "Gallery Photos", icon: <ImageIcon className="w-4 h-4" /> },
            { id: "hero", label: "Hero Banners", icon: <LayoutDashboard className="w-4 h-4" /> },
            { id: "services", label: "Services Images", icon: <LayoutList className="w-4 h-4" /> },
          ].map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive 
                    ? "bg-hom-gold text-hom-black" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Footer Area / Logout */}
        <div className="p-4 border-t border-white/5 shrink-0">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Logout Session
          </button>
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <main className="flex-1 flex flex-col min-w-0 bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.05)] z-10 h-screen">
        
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-gray-100 bg-white shrink-0">
             <div>
                <h1 className="text-xl font-instrument-serif text-hom-darkgold">HOM Photography</h1>
            </div>
            <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-gray-900 cursor-pointer"
            >
                <LogOut className="w-5 h-5" />
            </button>
        </header>

        {/* Mobile Navigation Tabs */}
        <div className="md:hidden flex overflow-x-auto border-b border-gray-100 bg-white px-2 shrink-0">
            {[ "gallery", "hero", "services" ].map((id) => (
                <button
                    key={id}
                    onClick={() => handleTabChange(id)}
                    className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                        activeTab === id ? "border-hom-gold text-hom-darkgold" : "border-transparent text-gray-500 hover:text-gray-800"
                    }`}
                >
                    {id === "gallery" ? "Gallery Photos" : id === "hero" ? "Hero Banners" : "Services Images"}
                </button>
            ))}
        </div>

        {/* Scrollable Main Area */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto">
          
          {/* Header Action Area */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-instrument-serif text-gray-900 mb-2">
                {activeTab === "hero" ? "Hero Banner Manager" : activeTab === "services" ? "Services Manager" : "Photo Gallery Manager"}
              </h2>
              <p className="text-sm text-gray-500 max-w-xl font-inter">
                 {activeTab === "hero" 
                    ? "Upload and manage premium images appearing on your homepage hero slider." 
                    : "Upload and manage categorised images appearing on your portfolio and services grids."}
              </p>
            </div>
            
            <div className="flex shrink-0 items-center gap-3">
               {/* Global Category Dropdown (Not for Hero Banners) */}
               {activeTab !== "hero" && (
                  <div className="relative hidden md:block">
                    <select
                      value={activeFilter}
                      onChange={(e) => setActiveFilter(e.target.value)}
                      className="pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 outline-none focus:ring-2 focus:ring-hom-gold/20 focus:border-hom-gold transition-shadow appearance-none cursor-pointer shadow-sm"
                    >
                      <option value="All">All Categories</option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
               )}

               <button
                  onClick={() => setShowUploadModal(!showUploadModal)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors flex items-center gap-2 shadow-sm cursor-pointer ${
                    showUploadModal ? "bg-gray-100 text-gray-700 hover:bg-gray-200" : "bg-hom-black hover:bg-hom-darkgold text-white"
                  }`}
               >
                   {showUploadModal ? <X className="w-4 h-4"/> : <UploadCloud className="w-4 h-4"/>}
                   {showUploadModal ? "Cancel Upload" : "Upload Photo"}
               </button>
            </div>
          </div>

          {/* Upload Modal Drawer */}
          <AnimatePresence>
            {showUploadModal && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: "auto", marginBottom: 32 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                className="overflow-hidden"
              >
                 <UploadArea 
                    onUpload={handleUpload} 
                    categories={CATEGORIES}
                    showCategorySelect={activeTab !== "hero"}
                    onClose={() => setShowUploadModal(false)}
                 />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Filters Chips (Gallery and Services Only) */}
          {activeTab !== "hero" && (
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 text-gray-400 shrink-0">
                <Filter className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Categories</span>
              </div>
              <div className="w-px h-6 bg-gray-200 mx-2 shrink-0"></div>
              
              <div className="flex gap-2 shrink-0">
                {["All", ...CATEGORIES].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                      activeFilter === cat
                        ? "bg-hom-black text-white"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Grid Area */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            <AnimatePresence>
              {currentImages.map((img) => (
                <ImageCard 
                    key={img.id} 
                    image={img} 
                    onDelete={handleDelete} 
                    showCategory={activeTab !== "hero"} 
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {currentImages.length === 0 && (
            <div className="w-full py-20 flex flex-col items-center justify-center bg-gray-50 rounded-2xl border border-gray-100 border-dashed mt-8">
               <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-gray-300">
                   <ImageIcon className="w-8 h-8" />
               </div>
               <h3 className="text-gray-900 font-medium text-lg">No photos found</h3>
               <p className="text-gray-500 text-sm mt-1">Upload a photo to get started here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
