import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
const Deshboard = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [text, setText] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    setNotes([...notes, { text }]);
    setText("");
  };

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="dashboard">
      <form className="dashboardForm" onSubmit={addNote}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>Add Note</button>
      </form>
      <ul className="noteContaner">
        {notes.map((note, index) => (
          <div className="noteList">
            <li key={index}>{note.text}</li>
            
            <div className="deleteeditBtn">
            <DeleteForeverIcon/>
              <ModeEditOutlineIcon/>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Deshboard;
