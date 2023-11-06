import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const TextEditor = ({ initialText, onSave }) => {
  const [text, setText] = useState(initialText);

  const handleSave = () => {
    onSave(text);
  };

  return (
    <div>
      <ReactQuill value={text} onChange={setText} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default TextEditor;