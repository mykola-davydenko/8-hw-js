let t=document.getElementById("bookmarkInput"),e=document.getElementById("addBookmarkBtn"),a=document.getElementById("bookmarkList"),l=[];function n(t){a.innerHTML=t.map((t,e)=>`<li class="bookmark" data-idx= "${e}">
    <a class="url" target="_blank" href="https://${t}">${t}</a>
<button type="button" class="delete">Delete</button>
</li>`).join("")}e.addEventListener("click",()=>{let e=t.value.trim();e&&(l.push(e),t.value="",n(l))}),a.addEventListener("click",t=>{if(t.target.dataset.idx,t.target.classList.contains("delete")){let e=Number(t.target.closest("li").dataset.idx);l.splice(e,1),n(l)}});
//# sourceMappingURL=8-HW-JS.12717481.js.map
