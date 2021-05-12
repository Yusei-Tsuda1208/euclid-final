document.getElementById("euclid").addEventListener("click",function (){
    let a = document.getElementById("warareru").value;
    let b = document.getElementById("waru").value;
    let r,q;
    
    while(r!==0){
    q = a/b;
    q = parseInt(q,10);
    r = a%b;
    document.getElementById("ans").value += (a+"="+b+"*"+q+"+"+r) + "\n";
    a=b;
    b=r;
    }
    document.getElementById("ans").value　+=　("最大公約数は"+a);
});