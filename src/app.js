const input = document.getElementById("bookmarkInput");
const button = document.getElementById("addBookmarkBtn");
const list = document.getElementById("bookmarkList");


const bookmarks = []


button.addEventListener("click", () => {
    const value = input.value.trim()
    if(value){
        bookmarks.push(value)
        input.value = "";
        renderList(bookmarks)
    }
})






function renderList(array){
    list.innerHTML = array
    .map((item, index) =>{
        return `<li class="bookmark" data-idx= "${index}">
    <a class="url" target="_blank" href="https://${item}">${item}</a>
<button type="button" class="delete">Delete</button>
</li>`;
       
    }).join("");
}




list.addEventListener("click", (event) => {
const index = event.target.dataset.idx
if(event.target.classList.contains("delete")){
    const li = event.target.closest("li")      // знаходимо li
        const index = Number(li.dataset.idx)
    bookmarks.splice(index, 1)
    renderList(bookmarks)
}


})
 
