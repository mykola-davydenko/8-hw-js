let e=document.getElementById("bookmarkInput"),t=document.getElementById("addBookmarkBtn"),a=document.getElementById("bookmarkList"),l=[];function o(e){a.innerHTML=e.map((e,t)=>`<li class="bookmark" data-idx= "${t}">
    <a class="url" target="_blank" href="https://${e}">${e}</a>
<button type="button" class="delete">Delete</button>
</li>`).join("")}t.addEventListener("click",()=>{let t=e.value.trim();t&&(l.push(t),e.value="",o(l))}),a.addEventListener("click",e=>{if(e.target.dataset.idx,e.target.classList.contains("delete")){let t=Number(e.target.closest("li").dataset.idx);l.splice(t,1),o(l)}});let s=document.querySelector("#username"),n=document.querySelector("#password"),r=document.querySelector("#saveBtn");s.value=localStorage.getItem("username")||"",n.value=localStorage.getItem("password")||"",r.addEventListener("click",()=>{localStorage.setItem("username",s.value),localStorage.setItem("password",n.value)});
//# sourceMappingURL=8-hw-js.fce842c8.js.map
