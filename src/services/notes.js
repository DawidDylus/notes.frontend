import { ActionCreators } from '../redux/notesReducer';

export const GetNotes = async (dispatch) => {
    try {
        // Retrive all the notes

        // TODO api call
        const response = [
            { value: 'Study for exam in 3 weeks', id: 1 },
            { value: 'second note', id: 2 },
            { value: 'Third note', id: 3 },
            { value: 'fourth note', id: 4 },
        ];

        // call setNotes function that fill table of notes on the site. (frontend)
        dispatch(ActionCreators.setNotes(response));
    }
    catch {
        console.log("Error!");
    }
}

export const DeleteNote = async (dispatch, note) => {
    try {
        // Delete note

        // TODO api call

        // Call deleteNote action that deletes the note from view. (frontend)
        dispatch(ActionCreators.deleteNote(note));
    }
    catch {
        console.log("Error!");
    }
}

export const NewNote = async (dispatch, note) => {
    try {
        // Create New note
        const response = { value: note, id: 1 };

        // TODO api call

        // Call newNote action that deletes the note from view. (frontend)
        dispatch(ActionCreators.newNote(response));
    }
    catch {
        console.log("Error!");
    }
}

export const EditNote = async (dispatch, note) => {
    try {
        // Edit note
        const response = { value: note, id: 1 };
        // TODO api call

        // Call editNote action that deletes the note from view. (frontend)
        dispatch(ActionCreators.editNote(response));
    }
    catch {
        console.log("Error!");
    }
}