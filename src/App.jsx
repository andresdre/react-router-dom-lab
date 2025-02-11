// src/App.jsx

import { useState } from 'react';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import NavBar from './components/NavBar/NavBar.jsx'

import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [mailboxes, setMailboxes] = useState([
    {_id: 1, boxSize: "Small", boxOwner: "Alex"},
    {_id: 2, boxSize: "Medium", boxOwner: "Jordan"},
    {_id: 3, boxSize: "Large", boxOwner: "Sam"},
  ]);

  const addBox = (newMailbox) => {
    setMailboxes((prevMailboxes) => [...prevMailboxes, {_id: Date.now(), ...newMailbox}]);
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}/>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>}/>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>}/>
        <Route path='*' element={<h2>Whoops Nothing Here</h2>}/>
      </Routes>
    </>
  );
};

export default App;
