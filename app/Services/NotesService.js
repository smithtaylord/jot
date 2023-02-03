

class NotesService {
    saveNote() {
        console.log('saveNote service works');
    }
    deleteNote() {
        console.log('delete Note service works');
    }
    setNote() {
        console.log('set Note service works');
    }
    createNote() {
        console.log('create note service works');
    }
    constructor() {
        console.log('Notes Service Working!');
    }

}

export const notesService = new NotesService();