import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Announcement from './Announcement';
import Pagination from './Pagination';

/**
 * AnnouncementList Component
 * - Fetches and displays a paginated list of announcements.
 */
const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]); // State to store announcements
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const [totalPages, setTotalPages] = useState(1); // State to track the total number of pages

  // useEffect hook to fetch announcements whenever the currentPage changes
  useEffect(() => {
    fetchAnnouncements(currentPage);
  }, [currentPage]);

  /**
   * Fetch announcements from the backend API.
   * @param {number} page - The page number to fetch.
   */
  const fetchAnnouncements = async (page) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/announcements?page=${page}`); // Make an API request
      setAnnouncements(response.data.data); // Update announcements state
      setTotalPages(response.data.last_page); // Update total pages state
    } catch (error) {
      console.error('Error fetching announcements:', error); // Log errors if any
    }
  };

  return (
    <div>
      <h1>Announcements</h1>
      {announcements.map(announcement => (
        <Announcement key={announcement.id} data={announcement} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default AnnouncementList;
