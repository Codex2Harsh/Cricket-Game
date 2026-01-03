 let choice;

 function generateChoice(){
    let randomNumber = Math.random() * 3;
   
    if(randomNumber >0 && randomNumber<=1){
        choice = 'Bat';
        
    }else if(randomNumber >1 && randomNumber <=2){
        choice ='Ball';
        
    }else{
        choice = 'Stump';
        
    }
 }