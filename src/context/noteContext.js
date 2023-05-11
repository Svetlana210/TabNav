import React, {useState, createContext} from 'react';

export const NoteContext = createContext();

const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState([
    {id: 1, text: 'learn React Native'},
    {id: 2, text: 'read an article'},
    {id: 3, text: 'watch the video'},
  ]);

  const value = {
    notes,
    setNotes,
  };
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
export default NoteProvider;
