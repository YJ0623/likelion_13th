import React, { useState, useRef, useEffect } from 'react';
import albumData from '../datas/song.json';

export const Playlist = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);


  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [selectedImage]);

  return (
    <main className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
      {albumData.map((item, index) => (
        <section
          key={index}
          className="bg-gray-800 p-6 rounded-lg shadow cursor-pointer hover:shadow-xl transition"
          onClick={() => setSelectedImage(item.albumImage)}
        >
          <img
            src={item.albumImage}
            className="w-full rounded mb-4"
          />
          <h2 className="text-2xl font-semibold">{item.title}</h2>
          <hr className="my-4" />
          <p className="text-gray-200">🎤 가수: {item.artist}</p>
          <p className="text-gray-200">📝 작사가: {item.lyricist}</p>
          <p className="text-gray-200">🎼 작곡가: {item.composer}</p>
          <p className="text-gray-400 text-sm mt-2">
            📅 발매일: {item.releaseDate}
          </p>
        </section>
      ))}

      {/* ✨ 모달 */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div
            ref={modalRef}
            className="relative"
          >
            <button
              className="absolute top-4 right-6 text-black font-bold"
              onClick={() => setSelectedImage(null)}
            >
              𝘅
            </button>
            <img src={selectedImage} className="max-w-[90vw] max-h-[80vh]" />
          </div>
        </div>
      )}
    </main>
  );
};