import React from 'react';
import AnnouncementList from './components/AnnouncementList';
import './App.css';

/**
 * App Component
 * - The root component that renders the AnnouncementList.
 */
function App() {
  return (
    <div className="App">
      <AnnouncementList /> {/* Render the AnnouncementList component */}
    </div>
  );
}

export default App;
