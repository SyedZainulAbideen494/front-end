import React, { useState, Fragment } from 'react';
import axios from 'axios';
import './StoryUpload.css';

const AddStories = () => {
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    setMedia(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('token', token);
    formData.append('content', content);
    formData.append('media', media);

    try {
      await axios.post('https://apifordropment.online/api/stories', formData);
      // After a successful upload, redirect to /home
      window.location.href = '/home';
    } catch (error) {
      console.error('Error uploading story: ', error);
    }
  };

  return (
    <Fragment>
      <div className="story-upload-container">
        <h2>Upload a BlinkShare</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="context">Context:</label>
            <input
              type="text"
              id="context"
              placeholder="Add context for your BlinkShare"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="media">Media:</label>
            <input
              type="file"
              id="media"
              accept="image/*,video/*"
              onChange={handleMediaUpload}
              required
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddStories;
