document.getElementById("btn").addEventListener("click",function(e){
   const show=document.querySelector('.display');
   const xhr=new XMLHttpRequest();
   const number=document.querySelector('#textfield').value;

xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
xhr.onload=function(){
  if(this.status ===200){
   let out="";
  
     const parsed=JSON.parse(this.responseText);
     if(parsed.type==="success"){
   parsed.value.forEach(function(para){

     out+=`<li>${para.joke}</li>`;
     show.innerHTML =out;

   })
      

     }








  }






}




 xhr.send();  
})