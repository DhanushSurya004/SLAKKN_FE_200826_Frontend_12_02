//Factorial

let i = 1;
let m = 5;
let str ="";
for(let f=1;f<=m;f++){
    i *= f;
    if(f<m){str +=f +"x"}
    else{str +=f}
 
}
console.log("Factorial of 5:"+ str +"="+ i)

document.write("Check the console")

//Fibanocci

let a = 0;
let b = 1;

let string="";
for(let n =0 ;n<10 ;n++){
    if(n<2){
        string += n + " "
    }else if(n>=2){
      let c = a+b;
    
      a = b;
      b = c;
      string+= c +" "
    }
    
}
console.log(string)