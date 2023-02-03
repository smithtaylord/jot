import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";


class NotesService {
    saveNote() {
        console.log('saveNote service works');
    }
    deleteNote() {
        console.log('delete Note service works');
    }
    setNote(noteId) {
        let note = appState.notes.find(n => n.id == noteId)
        // @ts-ignore
        appState.note = note
    }
    createNote(formData) {
        // console.log('create note service works');
        let newNote = new Note(formData)
        appState.notes.push(newNote)
        appState.note = newNote
        // SAVESTATE WILL GO HERE IN THE FUTURE!!!
        appState.emit('notes')
    }


}

export const notesService = new NotesService();