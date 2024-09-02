import React from 'react';
import EntryForm from './EntryForm';

const AddEntry = ({ addEntry }) => {
  const handleSubmit = (entry) => {
   
    const newEntry = { ...entry, id: Date.now() + Math.random() };
    addEntry(newEntry);
  };

  return (
    <div>
      <h2>Add New Entry</h2>
      <EntryForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEntry;
