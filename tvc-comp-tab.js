(function(){
const tabs=document.querySelectorAll('.computer-gallery-tvc-tab');
const panels=document.querySelectorAll('.computer-gallery-tvc-panel');
tabs.forEach((tab,i)=>{
tab.addEventListener('click',()=>{
tabs.forEach(t=>t.classList.remove('is-active'));
panels.forEach(p=>p.classList.remove('is-active'));
tab.classList.add('is-active');
panels[i].classList.add('is-active');
});
});
})();