import { appState } from "../AppState.js";
import { notesService } from "../Services/NotesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawNotes() {
    let template = ''
    appState.notes.forEach(n => template += n.ListTemplate)
    setHTML('note-list', template)
    setText('jot-count', `Jots  -  ${appState.notes.length}`)
}

function _drawNote() {

    let note = appState.note
    if (note != null) {
        setHTML('activeNote', note.ActiveNoteTemplate)
    } else {
        setHTML('activeNote', '<h1>EMPTY</h1>')
    }
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

    async deleteNote(noteId) {
        try {
            const yes = await Pop.confirm('Are you sure you want to delete this note?')
            if (!yes) { return }
            console.log(noteId);
            notesService.deleteNote(noteId)

        } catch (error) {
            Pop.error(error)
        }

    }

    saveNote() {
        try {
            let textArea = document.getElementById('body')
            // @ts-ignore
            let updatedBody = textArea.value
            console.log('blurred', updatedBody);
            notesService.saveNote(updatedBody)

        } catch (error) {
            Pop.error(error)
        }
    }

}