import { ActionCreators } from '../redux/notesReducer';
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:5001/api/Notes',
})

export const GetNotes = async (dispatch) => {
    try {
        // Retrive all the notes
        const { data } = await axiosInstance.get();

        // call setNotes function that fill table of notes on the site. (frontend)
        dispatch(ActionCreators.setNotes(data));
    }
    catch {
        console.log("Error! Could not load the notes.");
    }
}

export const DeleteNote = async (dispatch, note) => {
    try {
        // Delete note
        await axiosInstance.delete(`/${note.id}`);

        // Call deleteNote action that deletes the note from view. (frontend)
        dispatch(ActionCreators.deleteNote(note));
    }
    catch {
        console.log("Error! Could not delete the notes.");
    }
}

export const NewNote = async (dispatch, note) => {
    try {
        // Create New note
        const { data } = await axiosInstance.post('', note);

        // Call newNote action that deletes the note from view. (frontend)
        dispatch(ActionCreators.newNote(data));
    }
    catch {
        console.log("Error! Could not add new note.");
    }
}

export const EditNote = async (dispatch, note) => {
    try {
        // Edit note
        await axiosInstance.put(`/${note.id}`, note);

        // Call editNote action that deletes the note from view. (frontend)
        dispatch(ActionCreators.editNote(note));
    }
    catch {
        console.log("Error! Could not edit the note.");
    }
}