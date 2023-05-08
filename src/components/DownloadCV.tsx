'use client';

import { saveAs } from 'file-saver';

const DownloadCVButton = () => {
  const downloadCV = async () => {
    const res = await fetch('/assets/CV Alexandre Araujo.pdf', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf'
      }
    });
    const file = await res.blob();

    saveAs(file, 'CV Alexandre Araujo.pdf');
  };

  return (
    <button
      className="p-5 bg-red-500 text-white font-normal text-xl rounded-md max-w-xs transition-all duration-200 hover:bg-red-400"
      onClick={downloadCV}
    >
      Download CV
    </button>
  );
};

export default DownloadCVButton;
