import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetNotes } from '../services/notes';

export function NotesTable() {
    const notes = useSelector(state => state.notesReducer.notes)
    const dispatch = useDispatch();

    useEffect(() => {
        GetNotes(dispatch);
    },
        []
    );

    return <table className="table table-dark">
        <tbody>
            {
                notes.map(n =>
                    <tr>
                        <td style={{ textAlign: 'left' }}>{n.value}</td>
                    </tr>)
            }
        </tbody>
    </table>
}