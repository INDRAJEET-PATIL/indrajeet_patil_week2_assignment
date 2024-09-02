import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Home from './components/Home';
import AddEntry from './components/AddEntry';
import ViewEntries from './components/ViewEntries';
import EditEntry from './components/EditEntry';
import './index.css';
import TravelJournal from "./components/TravelJournal";

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const editEntry = (updatedEntry) => {
    setEntries(entries.map(entry => entry.id === updatedEntry.id ? updatedEntry : entry));
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <a className="navbar-brand" href="#">Travel Journal</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add Entry</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view">View Entries</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEntry addEntry={addEntry} />} />
          <Route path="/view" element={<ViewEntries entries={entries} deleteEntry={deleteEntry} />} />
          <Route path="/edit/:id" element={<EditEntry entries={entries} editEntry={editEntry} />} />
        </Routes>

        {/* some travel journals */}
        <TravelJournal />
      </div>
    </Router>
  );
}

export default App;
