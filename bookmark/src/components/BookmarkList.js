import React from "react";

const BookmarkList = ({ bookmarks, onEdit, onDelete }) => {
  return (
    <div>
      <h2>All Bookmarks</h2>
      <ul>
        {bookmarks.map((bookmark, index) => (
          <li key={index}>
            <span>{bookmark.title} - </span>
            <a
              href={bookmark.url}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              {bookmark.url}
            </a>
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookmarkList;
