import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Modal({ onClose, onDelete }) {
  const handleBackdrop = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const onCancel = () => {
    onClose();
  };

  return (
    <div className="Overlay" onClick={handleBackdrop}>
      <div className="Modal">
        <p className="Modal-text">Are you sure you want to delete this note?</p>
        <div className="Modal-button--position">
          <button className="Modal-button" onClick={onDelete}>
            Delete
          </button>
          <button className="Modal-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
