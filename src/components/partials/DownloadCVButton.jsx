import React, { useState } from 'react';
import '../../styles/downloadCVButton.css';

const DownloadCVButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = (lang) => {
    const url =
      lang === 'en'
        ? 'https://portfoliomulaja.s3.ca-central-1.amazonaws.com/docs/Andre-Mulaja-Resume-EN.pdf'
        : 'https://portfoliomulaja.s3.ca-central-1.amazonaws.com/docs/Andre-Mulaja-Resume-FR.pdf';

    const link = document.createElement('a');
    link.href = url;
    link.download = lang === 'en' ? 'CV_Andre_Mulaja_EN.pdf' : 'CV_Andre_Mulaja_FR.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  return (
    <>
      <button className="cv-button" onClick={() => setShowModal(true)}>
        Resume
      </button>

      {showModal && (
        <div
          className="cv-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="cv-modal"
            onClick={(e) => e.stopPropagation()} // Empêche le clic sur le modal de propager vers le fond
          >
            <div className="cv-modal-header">
              <h2>Select CV Language</h2>
              <button className="cv-close-btn" onClick={() => setShowModal(false)}>
                × Close
              </button>
            </div>
            <div className="cv-modal-body">
              <button className="cv-download-btn" onClick={() => handleDownload('en')}>
                Download in English 🇬🇧
              </button>
              <button className="cv-download-btn" onClick={() => handleDownload('fr')}>
                Télécharger en Français 🇫🇷
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DownloadCVButton;
