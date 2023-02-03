import { generateId } from "../Utils/generateId.js";


export class Note {
    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.dateCreated = '12/12'
        this.dateUpdated = '1/1'
        this.color = data.color
        this.body = data.body
    }

    get ListTemplate() {
        return `
        <h1 onclick="app.notesController.setNote('${this.id}')" class="selectable">${this.title} <i class="mdi mdi mdi-dots-circle cir-color-${this.color} fs-5"></i></h1>
        `
    }

    get ActiveNoteTemplate() {
        return `
    <div class="row">
        <div class="col-3">
            <h1>${this.title} <i class="mdi mdi mdi-dots-circle cir-color-${this.color} fs-5"></i></h1>
            <h5>Date Created:</h5>
            <h5>Date Updated:</h5>
        </div>
        <div class="col-8">
            <textarea class="form-control my-5" name="body" id="body" style="height: 50vh;">

            </textarea>
        </div>
        <div class="col-1">
            <button onclick="" class="btn btn-danger fs-1"><i class="mdi mdi-delete-circle"></i></button>
        </div>
        </div>
        `
    }

}