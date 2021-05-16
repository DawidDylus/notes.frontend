const initialState = {
    notes: [],
}

// Enum with action names?
export const ActionTypes = {
    SET_NOTES: 'SET_NOTES',
    DELETE_NOTE: 'DELETE_NOTE',
}

// Constructor for all actions and defining what properties they take
export const ActionCreators = {
    // Payload is anything you push to this function (like function property)
    setNotes: payload => ({ type: ActionTypes.SET_NOTES, payload }),
    deleteNote: payload => ({ type: ActionTypes.DELETE_NOTE, payload }),
}

// How the action works
// NOTE only one state could be called at the time (as an enum can)
export default function NotesReducer(state = initialState, action) {
    switch (action.type) {
        // If SET_NOTES action will be called in ActionCreators, this action fill array of notes with the payload(notes)
        case ActionTypes.SET_NOTES:
            return { ...state, notes: [...action.payload] }
        case ActionTypes.DELETE_NOTE:
            for (let i = 0; i < state.notes.length; i++) {
                if (state.notes[i].id === action.payload.id) {
                    state.notes.splice(i, 1);
                    break;
                }
            }
            return { ...state, notes: [...state.notes] }
        default:
            return state;
    }
}