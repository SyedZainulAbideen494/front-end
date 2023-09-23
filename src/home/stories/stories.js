import React, { useState } from 'react';

function AddStory() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);
    formData.append('video', video);

    try {
      const response = await fetch('/api/stories', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Story created successfully');
        setTitle('');
        setContent('');
        setImage(null);
        setVideo(null);
      } else {
        console.error('Error creating story');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      {/* Form for adding stories with image and video inputs */}
      {/* Similar to the previous example */}
    </div>
  );
}

export default AddStory;