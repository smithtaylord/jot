import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { saveState } from "../Utils/Store.js";


class NotesService {
    saveNote(updatedBody) {
        let note = appState.note
        // @ts-ignore
        note.body = updatedBody
        // @ts-ignore
        note.dateUpdated = new Date().toLocaleString('en-US')
        saveState('notes', appState.notes)

        appState.emit('notes')


    }
    deleteNote(noteId) {
        let noteIndex = appState.notes.findIndex(n => n.id == noteId)

        if (noteIndex == -1)
            throw new Error('this is a bad note ID')

        appState.notes.splice(noteIndex, 1)
        appState.note = null
        saveState('notes', appState.notes)
        appState.emit('notes')
        appState.emit('note')
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
        saveState('notes', appState.notes)
        appState.emit('notes')
    }


}

export const notesService = new NotesService();