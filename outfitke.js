document.addEventListener('click',function(e){
  const i=e.target.closest('.TVC-kattintos-icon');
  if(!i)return;

  const k=i.getAttribute('data-katt');
  const root=i.closest('.TVC-hatter-targy');
  if(!root)return;

  root.querySelectorAll('.TVC-kattintos-icon').forEach(x=>x.classList.remove('active'));
  root.querySelectorAll('.TVC-kep-panel').forEach(p=>p.classList.remove('active'));

  i.classList.add('active');

  const p=root.querySelector('.TVC-kep-panel.'+k);
  if(p)p.classList.add('active');
});