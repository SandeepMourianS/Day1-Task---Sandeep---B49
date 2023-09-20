import React from 'react';

const AuthorList = ({ authors, editAuthor, deleteAuthor }) => {
  return (
    <div>
      <h2>Author List</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            {author.name}
            <button onClick={() => editAuthor(author)}>Edit</button>
            <button onClick={() => deleteAuthor(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
