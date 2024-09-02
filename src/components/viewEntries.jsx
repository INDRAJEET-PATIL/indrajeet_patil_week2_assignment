import React from 'react';
import { Link } from 'react-router-dom';

const ViewEntries = ({ entries, deleteEntry }) => {
  if (entries.length === 0) {
    return <p className="text-center">No entries available. Add some travels!</p>;
  }

  return (
    <div>
      <h2 className="text-center mb-4">Travel Entries</h2>
      <ul className="list-group">
        {entries.map(entry => (
          <li className="list-group-item" key={entry.id}>
            <h5>{entry.title}</h5>
            <p><strong>Location:</strong> {entry.location}</p>
            <p><strong>Date:</strong> {entry.date}</p>
            <p><strong>Description:</strong> {entry.description}</p>
            <div className="d-flex justify-content-between">
              <Link className="btn btn-warning btn-sm" to={`/edit/${entry.id}`}>Edit</Link>
              <button className="btn btn-danger btn-sm" onClick={() => deleteEntry(entry.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewEntries;

