const initialState = {
    notes: [],
}

// Enum with action names?
export const ActionTypes = {
    SET_NOTES: 'SET_NOTES',
    DELETE_NOTE: 'DELETE_NOTE',
    NEW_NOTE: 'NEW_NOTE',
    EDIT_NOTE: 'EDIT_NOTE',
}

// Constructor for all actions and defining what properties they take
export const ActionCreators = {
    // Payload is anything you push to this function (like function property)
    setNotes: payload => ({ type: ActionTypes.SET_NOTES, payload }),
    deleteNote: payload => ({ type: ActionTypes.DELETE_NOTE, payload }),
    newNote: payload => ({ type: ActionTypes.NEW_NOTE, payload }),
    editNote: payload => ({ type: ActionTypes.EDIT_NOTE, payload }),
}

// How the action works
// NOTE only one state could be called at the time (as an enum can)
export default function NotesReducer(state = initialState, action) {
    switch (action.type) {
        // If SET_NOTES action will be called in ActionCreators, this action fill array of notes with the payload(notes)
        case ActionTypes.SET_NOTES:
            return { ...state, notes: [...action.payload] }
        case ActionTypes.DELETE_NOTE:
            return { ...state, notes: [...state.notes.filter(note => note.id !== action.payload.id)] }
        case ActionTypes.NEW_NOTE:
            return { ...state, notes: [...state.notes, action.payload] } // append new note
        case ActionTypes.EDIT_NOTE:
            let notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    note = action.payload
                }
                return note;
            })
            return { ...state, notes: [...notes] }
        default:
            return state;
    }
}