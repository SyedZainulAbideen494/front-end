import React, { Fragment, useState, useEffect } from 'react';
import './my-profile-edit.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProfileSettings() {
    const [privacySetting, setPrivacySetting] = useState('all');
    const [token, setToken] = useState('');

    useEffect(() => {
        // Fetch user's current privacy setting from the server when component mounts
        // Fetch token from local storage
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);

        // You can replace this with your actual API endpoint
        axios.get('https://apifordropment.online/api/user/privacy-setting', {
            params: { token: storedToken }
        })
            .then(response => {
                setPrivacySetting(response.data.privacySetting);
            })
            .catch(error => {
                console.error('Error fetching privacy setting:', error);
            });
    }, []);

    const handlePrivacyChange = (setting) => {
        // Update state and send the new setting to the server
        setPrivacySetting(setting);
        // Send the new setting to the server to update the database
        axios.post('https://apifordropment.online/api/user/update-privacy-setting', { token, privacySetting: setting })
            .then(response => {
                console.log('Privacy setting updated successfully:', response.data);
            })
            .catch(error => {
                console.error('Error updating privacy setting:', error);
            });
    };

    return (
        <Fragment>
            <div className='settings-container'>
                <div className='settings-header'>
                    <header>
                        <h2>Settings</h2>
                        <div className="button-wrapper">
                            <Link to='/profile'>
                                <button className="edit-button-settings">Back</button>
                            </Link>
                            <Link to='/edit/myprofile'>
                                <button className="edit-button-settings">Edit</button>
                            </Link>
                        </div>
                    </header>
                </div>
                <div className='section-1-settings'>
                    <section>
                        <h3>Privacy Settings</h3>
                        <h4>People who can message with me on WhatsApp</h4>
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
                            <p>People who have linked with me and I am linked with them</p>
                            <div className="switch-container">
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={privacySetting === 'who_follow_me'}
                                        onChange={() => handlePrivacyChange('who_follow_me')}
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
                                        checked={privacySetting === 'none'}
                                        onChange={() => handlePrivacyChange('none')}
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