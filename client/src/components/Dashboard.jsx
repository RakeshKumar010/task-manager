import React, { useState } from "react";
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
  let localData = localStorage.getItem("user");
  localData= JSON.parse(localData)

  return (
    <div className="dashboard">
      <h3 className="deshboardHead">Welcome, {localData[0].name}</h3>
      <form className="dashboardForm" onSubmit={addNote}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>Add Note</button>
      </form>
      <ul className="noteContaner">
        {notes.map((note, index) => (
          <div className="noteList">
            <li key={index}>{note.text}</li>
            
            <div className="deleteeditBtn">
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Deshboard;
