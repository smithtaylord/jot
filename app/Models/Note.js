import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Note {
    constructor(data) {
        this.id = generateId()
        this.title = data.title
        // this.date = new Date().toLocaleString('en-US')
        // this.dateCreated = data.date
        // this.dateUpdated = new Date().toLocaleString('en-US') || '12/12'
        this.dateCreated = data.dateCreated || new Date().toLocaleString('en-US')
        this.dateUpdated = data.dateUpdated || new Date().toLocaleString('en-US')
        this.color = data.color
        this.body = data.body || ''
    }

    get ListTemplate() {
        return `
        <h1 type="button" data-bs-dismiss="offcanvas" onclick="app.notesController.setNote('${this.id}')" class="selectable">${this.title} <i class="mdi mdi mdi-dots-circle cir-color-${this.color} fs-5"></i></h1>
        `
    }

    get ActiveNoteTemplate() {
        return `
    <div class="row">
        <div class="col-3">
            <h1>${this.title} <i class="mdi mdi mdi-dots-circle cir-color-${this.color} fs-5"></i></h1>
            <h5 class="text-yellow" >Date Created: <small class="text-wwhite">${this.dateCreated}</small></h5>
            
            <h5 class="text-yellow" >Date Updated: <small class="text-wwhite">${this.dateUpdated}</small></h5>
        </div>
        <div class="col-8">
            <textarea onblur="app.notesController.saveNote()" class="form-control my-5 bg-wwhite text-blue" name="body" id="body" style="height: 50vh;">
${this.body}
            </textarea>
        </div>
        <div class="col-1">
            <button onclick="app.notesController.deleteNote('${this.id}')" class="btn bg-pink text-blue fs-1 mt-3"><i class="mdi mdi-delete-circle"></i></button>
        </div>
        </div>
        `
    }

}