import { ActionCreators } from "../redux/notesReducer";

export const GetNotes = async (dispatch) => {
    try {
        // Retrive all the notes

        // TODO api call
        const response = [
            { value: 'Study for exam in 3 weeks', id: 1},
            { value: 'second note', id: 2},
            { value: 'Third note', id: 3},
            { value: 'fourth note', id: 4},
        ];

        dispatch(ActionCreators.setNotes(response));
    }
    catch {
        console.log("Error!");
    }
}