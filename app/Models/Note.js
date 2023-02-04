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
        this.charCount = data.charCount || 0
        this.wordCount = data.wordCount || 0
    }

    get ListTemplate() {
        return `
        <h1 type="button" data-bs-dismiss="offcanvas" onclick="app.notesController.setNote('${this.id}')" class="selectable">${this.title} <i class="mdi mdi mdi-dots-circle text-${this.color} fs-5"></i></h1>
        `
    }

    get ActiveNoteTemplate() {
        return `
    <div class="row">
        <div class="col-12 col-md-3 d-flex flex-column justify-content-between">
        <div>
            <h1>${this.title} <i class="mdi mdi mdi-dots-circle text-${this.color} fs-5"></i></h1>
            <h5 class="text-yellow" >date created: <small class="text-wwhite">${this.dateCreated}</small></h5>
            <h5 class="text-yellow">cate updated: <small class="text-wwhite">${this.dateUpdated}</small></h5>
        </div>
        <div class="">
        <h6 class="text-wwhite">words: <span class="text-yellow"> ${this.wordCount}</span>  characters: <span class="text-yellow"> ${this.charCount}</span></h6>
        </div>
        </div>
        <div class="col-12 col-md-8">
            <textarea onblur="app.notesController.saveNote()" class="form-control my-5 bg-wwhite text-blue textarea1" name="body" id="body" style="height: 50vh;">
${this.body}
            </textarea>
        </div>
        <div class="col-1">
            <button onclick="app.notesController.deleteNote('${this.id}')" class="btn bg-pink text-blue fs-1 mt-3"><i class="mdi mdi-delete-circle"></i></button>
        </div>
    </div>
        `
    }

    static EmptyImg() {
        return `
    <div>
        <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/024a2b26-70b7-4f67-a9ba-3fecc402f70a/d2wz27k-f61f9786-4f7f-4ef1-b115-6e0b97480809.png/v1/fill/w_900,h_616,strp/fractal_png_14_by_variety_stock_d2wz27k-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE2IiwicGF0aCI6IlwvZlwvMDI0YTJiMjYtNzBiNy00ZjY3LWE5YmEtM2ZlY2M0MDJmNzBhXC9kMnd6MjdrLWY2MWY5Nzg2LTRmN2YtNGVmMS1iMTE1LTZlMGI5NzQ4MDgwOS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.V33qdkQQnBykHWJGvRgu9sDkrQLnUAsjMI8lSeBEJkY"
            alt="">
    </div>
        `
    }

}