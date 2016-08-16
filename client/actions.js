// It is nice to keep all action types in one file.

// This can make debugging easier:
// If you have a typo in your action type, it will throw
// an error "CLAR_TXT is not defined" instead of dispatching
// {type: 'CLAR_TXT'} which would be harder to figure out.

export const UPDATE_TEXT = 'UPDATE_TEXT';
export const CLEAR_TEXT = 'CLEAR_TEXT';
