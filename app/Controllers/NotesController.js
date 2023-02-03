import { notesService } from "../Services/NotesService.js";

function _drawNotes() {
    console.log('_drawNotes Works');
}

function _drawNote() {
    console.log('_drawNotes Works');
}

export class NotesController {

    constructor() {
        console.log('Notes Constructor Working!');
        // Testing that functions are hooked up can be removed late
        _drawNote()
        _drawNotes()
        this.createNote()
        this.setNote()
        this.deleteNote()
        this.saveNote()

    }

    createNote() {
        console.log('create note controller works');
        notesService.createNote()
    }

    setNote() {
        console.log('set note controller works');
        notesService.setNote()
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