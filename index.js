
function isprime(n){
    if(n===1 || n===0){
        return false;
    }
    for(let j= 2; j<n; j++){
        if(n%j===0){
            return false;
        }

    }return true;




}
const div=document.querySelector(".container");

var n=20;

for(let i=1; i<=n; i++){
    if(isprime(i)){

        
        const r=div.append(i);
        

        
    // console.log(i);
    }
    


}
