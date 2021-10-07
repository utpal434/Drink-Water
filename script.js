
const percentage = document.getElementById('percentage');

const remained = document.getElementById('remained');

const glass = document.querySelectorAll('.glass-small');

const liters = document.getElementById('liters');

let h = 0;

updateBigGlass();


glass.forEach((cup,idx)=>{

     
      cup.addEventListener('click',()=>updateSmallCups(idx));
      
      
})

function updateSmallCups(idx){
    for(let i=0;i<glass.length;i++){

          if(i<=idx&&glass[i].className!='glass glass-small active'){
                
          glass[i].classList.add('active');
          h += 12.5;
          percentage.style.height = h+'%';

          }

          else if(i>idx&&glass[i].className==='glass glass-small active'){
                
          glass[i].classList.remove('active');
          h -= 12.5;
          percentage.style.height = h+'%';
          

          }

        updateBigGlass();
    }

  
}

function updateBigGlass(){
     
      if(h!=0)
      percentage.innerText = h+"%";
      remained.style.height = (100-h)+'%';
      liters.innerText =  2*(1-(h/100))+"L\n";

    }
