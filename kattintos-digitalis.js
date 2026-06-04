(function(){
  const root=document.querySelector('.digital-teloszamitogep-katt');
  if(!root)return;

  const nav=root.querySelector('.digital-teloszamitogep-katt__nav');
  const tabs=[...root.querySelectorAll('.digital-teloszamitogep-katt__tab')];
  const panels=[...root.querySelectorAll('.digital-teloszamitogep-katt__panel')];

  let indicator=nav.querySelector('.digital-teloszamitogep-katt__indicator');
  if(!indicator){
    indicator=document.createElement('div');
    indicator.className='digital-teloszamitogep-katt__indicator';
    nav.prepend(indicator);
  }

  function moveIndicator(tab){
    const navRect=nav.getBoundingClientRect();
    const tabRect=tab.getBoundingClientRect();
    indicator.style.width=tabRect.width+'px';
    indicator.style.height=tabRect.height+'px';
    indicator.style.transform=`translate(${tabRect.left-navRect.left}px,-50%)`;
  }

  function setActive(i){
    tabs.forEach(t=>t.classList.remove('is-active'));
    panels.forEach(p=>p.classList.remove('is-active'));
    tabs[i].classList.add('is-active');
    panels[i].classList.add('is-active');
    moveIndicator(tabs[i]);
  }

  tabs.forEach((tab,i)=>{
    tab.addEventListener('click',()=>setActive(i));
  });

  requestAnimationFrame(()=>setActive(0));

  window.addEventListener('resize',()=>{
    const active=nav.querySelector('.digital-teloszamitogep-katt__tab.is-active');
    if(active)moveIndicator(active);
  });
})();