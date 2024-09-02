import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EntryForm from './EntryForm';

const EditEntry = ({ entries, editEntry }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const entry = entries.find(entry => entry.id.toString() === id);

  if (!entry) {
    return <p>Entry not found!</p>;
  }

  const handleSubmit = (updatedEntry) => {
    editEntry({ ...updatedEntry, id: entry.id });
    navigate('/view');
  };

  return (
    <div>
      <h2>Edit Entry</h2>
      <EntryForm onSubmit={handleSubmit} initialData={entry} />
    </div>
  );
};

export default EditEntry;
