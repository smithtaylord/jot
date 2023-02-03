import { appState } from "../AppState.js";
import { notesService } from "../Services/NotesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawNotes() {
    let template = ''
    appState.notes.forEach(n => template += n.ListTemplate)
    setHTML('note-list', template)
    console.log(appState.notes)
}

function _drawNote() {
    let note = appState.note
    // @ts-ignore
    setHTML('activeNote', note.ActiveNoteTemplate)
}

export class NotesController {

    constructor() {
        // Testing that functions are hooked up can be removed late
        _drawNotes()
        appState.on('notes', _drawNotes)
        appState.on('note', _drawNote)

    }

    createNote() {
        try {
            // @ts-ignore
            window.event.preventDefault()
            // @ts-ignore
            const form = window.event.target
            const formData = getFormData(form)
            notesService.createNote(formData)
            // @ts-ignore
            form.reset()

        } catch (error) {
            Pop.error(error)
        }
    }

    setNote(noteId) {
        try {
            notesService.setNote(noteId)
        } catch (error) {
            Pop.error(error)
        }
    }

    deleteNote() {
        console.log('delete note controller works');
        notesService.deleteNote()
    }

    saveNote() {
        console.log('saveNote controller works');
        notesService.saveNote()
    }

}