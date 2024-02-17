import React, { Fragment, useState } from 'react';
import './my-profile-edit.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';

function ProfileSettings() {
    const [privacySetting, setPrivacySetting] = useState('all');

    const handlePrivacyChange = (setting) => {
        setPrivacySetting(setting);
    };

    return (
      <Fragment>
      <div className='settings-container'>
        <div className='settings-header'>
          <header>
            <h2>Settings</h2>
            <div className="button-wrapper">
              <Link to='/profile'>
                <button className="back-button">Back</button>
              </Link>
              <Link to='/edit/myprofile'>
                <button className="edit-button">Edit</button>
              </Link>
            </div>
          </header>
        </div>
        <div className='section-1-settings'>
          <section>
            <h3>Privacy Settings</h3>
            <h4>People who can message me on whatsApp</h4>
            <div className='privacy-option'>
              <p>All</p>
              <div className="switch-container">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={privacySetting === 'all'}
                    onChange={() => handlePrivacyChange('all')}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className='privacy-option'>
              <p>People who have linked with me</p>
              <div className="switch-container">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={privacySetting === 'linked'}
                    onChange={() => handlePrivacyChange('linked')}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className='privacy-option'>
              <p>People who have linked with me and I have linked with them too</p>
              <div className="switch-container">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={privacySetting === 'bothLinked'}
                    onChange={() => handlePrivacyChange('bothLinked')}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className='privacy-option'>
              <p>No one</p>
              <div className="switch-container">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={privacySetting === 'noOne'}
                    onChange={() => handlePrivacyChange('noOne')}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
    );
}


export default ProfileSettings;