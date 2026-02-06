import { useEffect } from 'react';
import './Lightbox.css';

const Lightbox = ({ imageSrc, imageAlt, onClose }) => {
  useEffect(() => {
    // Close on Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
        ×
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt={imageAlt} className="lightbox-image" />
      </div>
    </div>
  );
};

export default Lightbox;
