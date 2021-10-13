button.addEventListener('mouseover',()=>{
    if(darkMod){
         button.style.backgroundColor = '#4e545c'
         button.style.color = '#e5e8e8'
     } else {
         button.style.backgroundColor = '#000401';
     }
 })
 button.addEventListener('mouseleave',()=>{
     if(darkMod){
         button.style.backgroundColor = '#e5e8e8';
         button.style.color = '#000401'
     } else {
         
         button.style.backgroundColor = '#4e545c';
     }
 })
 const mod = () =>{
     if(!darkMod){
         darkMod = !darkMod
         console.log(darkMod)
     } else {
         darkMod = !darkMod
         console.log(darkMod)
     }
 }
 button.addEventListener('click', ()=>{
     mod()
     if(darkMod){
         body.style.backgroundColor = "#000401 " ;
         body.style.color = "#e5e8e8" ;
 
         footer.style.backgroundColor = "#8d9797 " ;
         footer.style.color = "#000401" ;
 
         button.style.backgroundColor = '#e5e8e8';
         button.style.color = '#8d9797';
         button.innerText = 'Light Mode'
         title.innerText = " Dark Mode ON"
     } else {
         body.style.backgroundColor = '#e5e8e8'
         body.style.color = '#4e545c';
 
         footer.style.backgrounColor = '#4e545c';
         footer.style.color = '#e5e8e8';
         
         button.style.backgroundColor = '#4e545c';
         button.style.color = '#e5e8e8';
         button.innerText = 'Dark Mode'
         title.innerText = " Light Mode ON"
     }
 } )
 