
let display = document.getElementById("display")
display.value=0

let btn = document.getElementsByClassName("btn")
console.log(btn)

for(i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        if(this.innerHTML=="="){
            display.value = eval(display.value)
        }else if(this.innerHTML == "c"){
            display.value = 0
        }else if(this.innerHTML == "+/-"){
            display.value *= (-1)
        }
        else{
            if(display.value=="0"){
                display.value = this.innerHTML
            }else{
                display.value += this.innerHTML
            }
        }
    })
}