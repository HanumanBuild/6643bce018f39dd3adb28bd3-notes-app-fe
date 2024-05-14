import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/notes`);
        setNotes(response.data);
      } catch (error) {
        console.error('Fetch notes error:', error.response.data);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className='p-4'>
      {notes.map(note => (
        <div key={note._id} className='card w-96 bg-base-100 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title'>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;