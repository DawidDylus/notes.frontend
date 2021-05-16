import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteNote, GetNotes } from '../services/notes';

export function NotesTable() {
    const notes = useSelector(state => state.notesReducer.notes)
    const dispatch = useDispatch();

    // useEffect is a way to call functions without a class (hooks) for the time being just remember that and i am sure it will get more clear later.
    useEffect(() => {
        GetNotes(dispatch);  // GetNotes is a function(service) that is used to get informations from the database and then use reducer and it's action to set the array of notes.
    },
        []
    );

    return <table className="table table-dark">
        <tbody>
            {

                /* what .map does
                                 React.Children.map(children, function[(thisArg)])
                 Invokes a function on every immediate child contained within children with this set to thisArg.
                 If children is an array it will be traversed and the function will be called for each child in the array.
                 If children is null or undefined, this method will return null or undefined rather than an array.

                 In the code below .map for every n (where n is a object in an array of notes) it's value is displayed on the site (array of notes).
                */
                notes.map(n =>
                    <tr>
                        <td style={{ width: '3rem' }}>
                            <Button className='btn btn-danger' onClick={() => DeleteNote(dispatch, n)}>Delete</Button>
                        </td>
                        <td style={{ textAlign: 'left' }}>{n.value}</td>
                    </tr>)
            }
        </tbody>
    </table>
}