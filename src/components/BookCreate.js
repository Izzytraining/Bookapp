import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  //remember to add arg event object
  //and update state eg. setTitle with event listener eg. event target.value
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  //calling event handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle(""); //this will set the value to an empty string so it does not show the previous input
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
