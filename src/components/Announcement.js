import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * Announcement Component
 * - Displays a single announcement with author, date, and body rendered as HTML from Markdown.
 * 
 * @param {object} data - The announcement data.
 */
const Announcement = ({ data }) => {
  return (
    <div className="announcement">
      <h2>{data.author}</h2>
      <p><em>{new Date(data.created_at).toLocaleDateString()}</em></p> {/* Display the date */}
      <ReactMarkdown>{data.body}</ReactMarkdown> {/* Render Markdown as HTML */}
    </div>
  );
};

export default Announcement;
