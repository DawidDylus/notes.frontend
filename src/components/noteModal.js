import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, InputGroup, Button, Modal, FormControl } from 'react-bootstrap';
import { NewNote, EditNote } from '../services/notes';

export const NewNoteModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-success'>New Note</Button>
        <NoteModal show={show} handleClose={handleClose} handleFormSubmit={NewNote} note={null} />
    </div>
}

export const EditNoteModal = ({ note }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-warning'>Edit Note</Button>
        <NoteModal show={show} handleClose={handleClose} handleFormSubmit={EditNote} note={note} />
    </div>
}

const NoteModal = ({ show, handleClose, handleFormSubmit, note }) => {

    const [modalNote, setModalNote] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setModalNote(note);
    }, [note]); // execute every time note changes



    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault(); // prevent refresh on the page
                handleFormSubmit(dispatch, modalNote);
            }}>

                <Modal.Body>
                    <InputGroup>
                        <FormControl value={modalNote === null ? '' : modalNote} onChange={event => setModalNote(event.target.value)} />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button type="submit" variant="primary" onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

//render(<NoteModal />);