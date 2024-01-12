
let AllowSound = false;
let input = null;
let IsWrongMessageComplete = true
let playonce = true
let AmountWrong = 0

function Transparency(Value,Item){
    let number;
    number=20*(100-Value)

    setTimeout(function(){
        Item.style.opacity = Value/100;

         if(Value==0){
            setTimeout(function(){
                IsWrongMessageComplete = true;
            },0)
         }

    },number)

   

}

setInterval(function(){
    if(input == null && document.querySelector("input")){
    const input = document.querySelector("input");

    input.addEventListener('keyup', (e) => {
        if(e.keyCode === 13){
            
                if(e.target.value != 17){
                    if(AllowSound == true){
                    document.getElementById("WrongSound").currentTime = 0;
                    document.getElementById("WrongSound").volume = .3
                    document.getElementById("WrongSound").play();
                    }

                    //This will control the hint buttons showing up
                    
                    if(AmountWrong>=0){
                        document.getElementsByClassName("HintBox1")[0].style.opacity = 1;
                        AmountWrong += 1;
                       
                    }
                    if(AmountWrong>1){
                        document.getElementsByClassName("HintBox2")[0].style.opacity = 1;
                    }

                    if(IsWrongMessageComplete){
                        IsWrongMessageComplete = false
                        for(let Index=100;Index >= 0; Index--){

                            Transparency(Index, document.getElementsByClassName("WrongBox")[0])
                        }
                    }
                    
                }
                else{
                    if(AllowSound == true){
                    document.getElementById("RightSound").currentTime = 0;
                    document.getElementById("RightSound").volume = .3
                    document.getElementById("RightSound").play();
                    }
                    if(playonce){
                        playonce = false
                        for(let Index=100;Index >= 0; Index--){

                            Transparency(Index, document.getElementsByClassName("RightBox")[0])
                        }
                        setTimeout(function(){
                            document.getElementsByClassName("MoveBackground3Up")[0].style.transform = "translateY(100%)"
                            document.getElementsByClassName("MoveBackground3Down")[0].style.transform = "translateY(-100%)"
                        },100)
                    }
                };
            
        }
        })
    }
},3000)

function HappyBirthdayCassie(){
    if(AllowSound){
        document.getElementById("BirthdaySound").play();
    }
    setTimeout(function(){
        document.getElementById("BirthdaySound").volume = 0;
    },5000)

    document.getElementById("my-canvas").style.zIndex = 100;
    document.getElementsByClassName("Reveal")[0].style.visibility = "hidden";
    document.getElementsByClassName("Reveal")[1].style.visibility = "hidden";

    document.getElementsByClassName("Pretty_Girl")[0].style.visibility = "visible";
    document.getElementsByClassName("heart")[0].style.visibility = "visible";
    document.getElementsByClassName("RevealOpen")[0].style.visibility = "visible";
    document.getElementsByClassName("RevealOpen")[1].style.visibility = "visible";
}

function ScreenOneComplete(){
    document.getElementsByClassName("Container")[0].style.visibility = "hidden";
    document.getElementsByClassName("MoveBoxRight")[0].style.transform = "translateX(100%)";
    document.getElementsByClassName("MoveBoxLeft")[0].style.transform = "translateX(-100%)"
    
    setTimeout(function(){
        document.getElementsByClassName("PasswordContainer")[0].style.zIndex = "0";
    },500)
}

function PlayMusic(){
    document.getElementById("Music").play();
    document.getElementById("Music").volume = .5;
    AllowSound = true;
    ScreenOneComplete();
}


/*
This is code I used for while i was learning how to code

var Boolean;
var Playonce = "Apple";

function ScreenMoveContinued(Value,Direction){
    let number;
    if(Direction=="UP"){
        number=20*Value;
    }
    if(Direction=="Down"){
        number=20*(100-Value)
    }
    setTimeout(function(){
        let Box = document.getElementsByClassName("Box")[0];
        Box.style.bottom = Value + "%"; 

        if(Value==100 && Direction == "UP"){
                setTimeout(function(){
                    Playonce = "Bee";
                },1000)
         }
         if(Value==0 && Direction == "Down"){
            setTimeout(function(){
                Playonce = "Apple";
            },1000)
         }

    },number)

   

}

function ScreenMove(){
    console.log("first one",Playonce=="Apple")
    console.log("Second one",Playonce=="Bee")
    if(Playonce == "Apple"){
        Playonce = null;
        
    
        for(let Index=0;Index <= 100; Index++){
            
            ScreenMoveContinued(Index,"UP")
            
        }
        
    
    
    
    }
    if(Playonce == "Bee"){
        Playonce = null;
       
        for(let Index=100;Index >= 0; Index--){

            ScreenMoveContinued(Index,"Down")
            
        }
    }
}

function ChangeColors(){


    if(Boolean == true){
        document.getElementsByClassName("Box")[0].style.backgroundColor="rgb(0, 238, 255)";
        Boolean = false
    }
    else{

        document.getElementsByClassName("Box")[0].style.backgroundColor="rgb(0,0,0)";
        Boolean = true
    }
    console.log("Hi");
}*/