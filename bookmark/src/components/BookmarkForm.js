import React, { useState, useEffect } from 'react';

const BookmarkForm = ({ onAddBookmark, onEditBookmark, editingIndex, bookmarks }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (editingIndex !== null) {
      const bookmark = bookmarks[editingIndex];
      setTitle(bookmark.title);
      setUrl(bookmark.url);
    }
  }, [editingIndex, bookmarks]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingIndex !== null) {
      onEditBookmark(editingIndex, title, url);
    } else {
      onAddBookmark(title, url);
    }
    setTitle('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Website Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="url">Website URL:</label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <button type="submit">
        {editingIndex !== null ? 'Update Bookmark' : 'Add Bookmark'}
      </button>
    </form>
  );
};

export default BookmarkForm;
