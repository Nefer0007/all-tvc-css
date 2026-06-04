document.addEventListener('click',e=>{
const icon=e.target.closest('.win-icon')
if(!icon)return
const c=icon.closest('.win-container')
if(!c)return
const p=c.querySelector('.win-panel')
if(!p)return
if(p.classList.contains('active')){
p.classList.remove('active')
p.classList.add('closing')
p.addEventListener('animationend',()=>p.classList.remove('closing'),{once:true})
}else p.classList.add('active')
})