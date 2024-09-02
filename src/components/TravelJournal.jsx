import React, { useState } from 'react';

const initialEntries = [
  {
   id: 1,
   title: "Visiting the Gateway of India",
   location: "Gateway of India, Mumbai, Maharashtra, India",
   date: "2024-08-01",
   description: "The Gateway of India, an iconic monument in Mumbai, stands majestically overlooking the Arabian Sea. Built in 1924, it is a historical landmark that was originally erected to commemorate the visit of King George V and Queen Mary to India. The monument's stunning architecture and its location near the vibrant Colaba Causeway make it a popular spot for tourists and locals alike. The view of the sunset from the Gateway is breathtaking, providing a serene escape from the bustling city life."
  },
  {
    id: 2,
    title: "A Day in Tokyo",
    location: "Tokyo, Japan",
    date: "2024-07-22",
    description: "Spent the day exploring the bustling streets of Tokyo, visiting temples, and indulging in amazing sushi."
  },

  {
   id: 3,
   title: "Relaxing in Mahabaleshwar",
   location: "Mahabaleshwar, Maharashtra, India",
   date: "2024-06-25",
   description: "Mahabaleshwar, a picturesque hill station in the Western Ghats, is renowned for its lush green landscapes and pleasant weather. The town is famous for its panoramic viewpoints, such as Arthur's Seat and Wilson Point, which offer stunning views of the surrounding valleys and mountains. The area is also known for its strawberry farms, where visitors can enjoy fresh strawberries and cream. Mahabaleshwar's serene environment, pleasant climate, and scenic beauty make it a perfect getaway for nature lovers and those seeking a peaceful retreat."
 },

 {
   id: 4,
   title: "A Journey to the Elephanta Caves",
   location: "Elephanta Caves, Mumbai, Maharashtra, India",
   date: "2024-05-05",
   description: "The Elephanta Caves, located on Elephanta Island, are famous for their rock-cut sculptures dedicated primarily to the Hindu god Shiva. These ancient caves, carved between the 5th and 8th centuries, are a marvel of ancient Indian artistry. The island, accessible by a ferry from Mumbai, offers a serene escape with its lush greenery and historical significance. The main cave, known for its impressive depiction of the Trimurti (a three-headed Shiva), draws visitors from around the world for its historical and spiritual significance."
 },

];

const TravelJournal = () => {
  const [entries, setEntries] = useState(initialEntries);
  const [editingId, setEditingId] = useState(null);
  const [newEntry, setNewEntry] = useState({ title: '', location: '', date: '', description: '' });

  const handleInputChange = (id, field, value) => {
    const updatedEntries = entries.map(entry =>
      entry.id === id ? { ...entry, [field]: value } : entry
    );
    setEntries(updatedEntries);
  };

  const handleDelete = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const handleEdit = (entry) => {
    setEditingId(entry.id);
    setNewEntry(entry);
  };

  const handleSave = () => {
    setEntries(entries.map(entry => (entry.id === editingId ? newEntry : entry)));
    setEditingId(null);
    setNewEntry({ title: '', location: '', date: '', description: '' });
  };

  const handleCancel = () => {
    setEditingId(null);
    setNewEntry({ title: '', location: '', date: '', description: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Travel Journal</h1>
      {entries.map(entry => (
        <div key={entry.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          {editingId === entry.id ? (
            <>
              <div style={{ marginBottom: '10px' }}>
                <label>Title:</label>
                <input
                  type="text"
                  value={newEntry.title}
                  onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label>Location:</label>
                <input
                  type="text"
                  value={newEntry.location}
                  onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label>Date:</label>
                <input
                  type="date"
                  value={newEntry.date}
                  onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label>Description:</label>
                <textarea
                  value={newEntry.description}
                  onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box', height: '100px' }}
                />
              </div>
              <button className="btn btn-primary mt-2" onClick={handleSave}>Save</button>
              <button className="btn btn-secondary mt-2 ml-2" onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <h3>{entry.title}</h3>
              <p><strong>Location:</strong> {entry.location}</p>
              <p><strong>Date:</strong> {entry.date}</p>
              <p>{entry.description}</p>
              <button className="btn btn-warning" onClick={() => handleEdit(entry)}>Edit</button>
              <button className="btn btn-danger ml-2" onClick={() => handleDelete(entry.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TravelJournal;
