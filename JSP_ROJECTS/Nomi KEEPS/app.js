/* <div class="note">
<div class="main"></div>
<div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
    <textarea class=""> </textarea>
</div> */

const addButton = document.querySelector("#add");

const addNewNote=(text = '')=>{

    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `<div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main ${text ? "" : "hidden"}"> </div>
    <textarea class="${text ? "hidden" : ""} "> </textarea>`;

    note.insertAdjacentHTML(`afterbegin`,htmlData);


const editButton = note.querySelector('.edit');
const deleteButton = note.querySelector('.delete');
const mainDiv = note.querySelector('.main');
const textarea = note.querySelector('textarea');


deleteButton.addEventListener('click',()=>{
    note.remove();
})


    document.body.appendChild(note);
}

addButton.addEventListener('click', () => addNewNote());