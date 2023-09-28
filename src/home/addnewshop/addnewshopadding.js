import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './addshop.css';

function CreateStoreButton() {
  const [creatingStore, setCreatingStore] = useState(false);

  return (
    <div className="create-store-button-container">
      {creatingStore ? (
        <div className="creating-store-message">
          Creating a new store...
        </div>
      ) : (
        <Link to="/Addshoppage1" className="create-store-link">
          <FontAwesomeIcon icon={faPlus} className="plus-icon" />
          Create New Store
        </Link>
      )}
    </div>
  );
}

export default CreateStoreButton;
