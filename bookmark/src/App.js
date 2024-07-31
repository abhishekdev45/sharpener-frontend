import React, { useState } from 'react';

import './App.css';
import BookmarkForm from './components/BookmarkForm';
import BookmarkList from './components/BookmarkList';

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addBookmark = (title, url) => {
    setBookmarks([...bookmarks, { title, url }]);
  };

  const editBookmark = (index, title, url) => {
    const updatedBookmarks = bookmarks.map((bookmark, i) =>
      i === index ? { title, url } : bookmark
    );
    setBookmarks(updatedBookmarks);
    setEditingIndex(null);
  };

  const deleteBookmark = (index) => {
    const updatedBookmarks = bookmarks.filter((_, i) => i !== index);
    setBookmarks(updatedBookmarks);
  };

  return (
    <div className="app">
      <h1>Bookmark Website</h1>
      <BookmarkForm
        onAddBookmark={addBookmark}
        onEditBookmark={editBookmark}
        editingIndex={editingIndex}
        bookmarks={bookmarks}
      />
      <BookmarkList
        bookmarks={bookmarks}
        onEdit={(index) => setEditingIndex(index)}
        onDelete={deleteBookmark}
      />
    </div>
  );
};

export default App;
