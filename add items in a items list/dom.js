function clicked(){
   
    var newLi=document.createElement('li');
    newLi.className='list-item';
    
    const text=document.createTextNode(document.getElementById('val').value);
    newLi.appendChild(text);
    
    const par=document.querySelector('.task-list'); 
    par.appendChild(newLi);
    
  document.getElementById('val').value='';
   
      
}


var btn=document.querySelector('.bton');
btn.addEventListener('click',clicked);