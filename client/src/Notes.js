import React, { useState, useEffect } from "react";
import "./Notes.css";

const Notes = () => {
  const [text, setText] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("notesContent");
    if (saved) setText(saved);
  }, []);

  // Save to localStorage whenever text changes
  useEffect(() => {
    localStorage.setItem("notesContent", text);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="notes-container">
      <h1 className="notes-title">Your Notepad</h1>
      <textarea
        className="notes-textarea"
        placeholder="Start typing your notes here..."
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default Notes;
