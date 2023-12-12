import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './StoryUpload.css';
import { useParams, Link } from 'react-router-dom';

function Stories() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [stories, setStories] = useState([]);
  const [noStoriesMessage, setNoStoriesMessage] = useState('');
  const [user, setUser] = useState([])
  const params = useParams();

  useEffect(() => {
    async function fetchStories() {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('https://apifordropment.online/api/stories', {
          headers: {
            Authorization: params.user_id, // Replace yourToken with the actual token
          },
        });
        setStories(response.data);
      } catch (error) {
        console.error('Error fetching stories: ', error);
      }
    }

    fetchStories();
  }, [params.user_id]);

  const currentStory = stories[currentStoryIndex];

  const goToNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex((prevIndex) => prevIndex + 1);
    } else {
      // If on the last story, redirect to /home
      window.location.href = '/home';
    }
  };

  const goToPreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prevIndex) => prevIndex - 1);
    } else {
      // If on the 1st story, redirect to /home
      window.location.href = '/home';
    }
  };

  useEffect(() => {
    // Automatically transition to the next story after 5 seconds
    const timer = setTimeout(() => {
      if (currentStoryIndex < stories.length - 1) {
        setCurrentStoryIndex((prevIndex) => prevIndex + 1);
      } else {
        // If on the last story, redirect to /home
        window.location.href = '/home';
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentStoryIndex, stories]);

  useEffect(() => {
    // Display a message when there are no stories for 5 seconds
    const messageTimer = setTimeout(() => {
      if (stories.length === 0) {
        setNoStoriesMessage('No Stories from this user');
      } else {
        setNoStoriesMessage('');
      }
    }, 5000);

    return () => clearTimeout(messageTimer);
  }, [stories]);

  const fetchusershandler1 = useCallback(async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("https://apifordropment.online/user/chat/details/1", {
      headers: {
        Authorization: params.user_id,
      },
    });
    const data = await response.json();
    const transformeduser = data.user.map((userdata) => {
      return {
        first_name: userdata.first_name,
        last_name: userdata.last_name,
        profilepic: `https://apifordropment.online/images/${userdata.porfilepic}`,
        user_id: userdata.user_id
      };
    });
    setUser(transformeduser);
  }, []);
  
  useEffect(() => {
    fetchusershandler1();
  }, []);

  return (
    <div className="stories-container">
      <div className="story-upload-container">
        {noStoriesMessage && <p className="no-stories-message">{noStoriesMessage}</p>}
        {currentStory && (
          <div className="story-card">
            <Link to={`/user/${currentStory.user_id}`}>
            <p>{currentStory.name}</p>
            </Link>
            {currentStory.media_type === 'image' && (
              <img
                src={`https://apifordropment.online/images/${currentStory.media_path}`}
                alt="Story Media"
                className="story-image"
              />
            )}
            {currentStory.media_type === 'video' && (
              <video
                autoPlay
                controls
                loop
                className="story-video"
              >
                <source src={`https://apifordropment.online/videos/${currentStory.media_path}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <h4 className="story-title">{currentStory.name}</h4>
          </div>
        )}
        <button onClick={goToPreviousStory} className="story-button">
          {currentStoryIndex > 0 ? 'Previous' : 'Back'}
        </button>
        <button onClick={goToNextStory} className="story-button">
          {currentStoryIndex < stories.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
}

export default Stories;