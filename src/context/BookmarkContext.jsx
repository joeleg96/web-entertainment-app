import React, { createContext, useReducer, useContext, useEffect } from "react";

const BOOKMARKS_KEY = "entertainment_bookmarks";

const BookmarkContext = createContext();

const initialState = {
  bookmarks: JSON.parse(localStorage.getItem(BOOKMARKS_KEY)) || []
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_BOOKMARK": {
      const id = action.payload;
      const exists = state.bookmarks.includes(id);
      const updated = exists
        ? state.bookmarks.filter(b => b !== id)
        : [...state.bookmarks, id];
      return { ...state, bookmarks: updated };
    }

    case "SET_BOOKMARKS": {
      return { ...state, bookmarks: action.payload || [] };
    }

    default:
      return state;
  }
}

export function BookmarkProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // persist to localStorage whenever bookmarks change
  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(state.bookmarks));
    } catch (err) {
      console.error("Could not persist bookmarks", err);
    }
  }, [state.bookmarks]);

  return (
    <BookmarkContext.Provider value={{ bookmarks: state.bookmarks, dispatch }}>
      {children}
    </BookmarkContext.Provider>
  );
}

// custom hook for easier consumption
export function useBookmarks() {
  const ctx = useContext(BookmarkContext);
  if (!ctx) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return ctx;
}
