// Declare variables below to save the different divs of your story.
let title = document.querySelector(".title");
let buttons = document.querySelector(".buttons");
let opening = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneOneEnd = document.querySelector(".option-oneOne-end");
let optionOneTwoEnd = document.querySelector(".option-oneTwo-end");
let optionTwoOneEnd = document.querySelector(".option-twoOne-end");
let optionTwoTwoEnd = document.querySelector(".option-twoTwo-end");
let optionOneOneOneEnd = document.querySelector(".option-oneOneOne-end");
let optionOneOneTwoEnd = document.querySelector(".option-oneOneTwo-end");
let optionOneOneOneTwoEnd = document.querySelector(".option-oneOneOneTwo-end");
let optionOneOneOneOneEnd = document.querySelector(".option-oneOneOneOne-end");
let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let button11 = document.querySelector(".option-one_yes");
let button12 = document.querySelector(".option-one_no");
let button21 = document.querySelector(".option-two_yes");
let button22 = document.querySelector(".option-two_no");
let button111 = document.querySelector(".option-one_yes_pay");
let button112 = document.querySelector(".option-one_yes_run");
let button1111 = document.querySelector(".option-one_yes_pay_leave");
let button1112 = document.querySelector(".option-one_yes_pay_study");
let submitButton = document.querySelector(".submit");
let results = document.querySelector(".results");
let end = document.querySelector(".ending");
let endGood = document.querySelector(".ending_good");


// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.
submitButton.addEventListener('click', function() {
    results.style.display = "block";
    let myName = document.querySelector(".name").value;
    let myBand = document.querySelector(".band").value;
    let myPlace = document.querySelector(".place").value;
    results.innerHTML = "<h3 class='results'>"+"Generating "+myName+"'s "+myBand+" concert in "+myPlace+"..."+"(Scroll down)"+"</h3>";
})

button1.addEventListener('click', function(){
    opening.style.display = "none";
    button1.style.display = "none";
    button2.style.display = "none";
    optionOneScreen.style.display = "block";
    button11.style.display =  "inline-block";
    button12.style.display = "inline-block";
 
 });
    button11.addEventListener('click', function(){
        optionOneScreen.style.display = "none";
        button11.style.display = "none";
        button12.style.display = "none";
        optionOneOneEnd.style.display = "block";
        button111.style.display = "inline-block";
        button112.style.display = "inline-block";
    });
        button111.addEventListener('click', function(){
            optionOneOneEnd.style.display = "none";
            button111.style.display = "none";
            button112.style.display = "none";
            optionOneOneOneEnd.style.display = "block";
            button1112.style.display = "inline-block";
            button1111.style.display = "inline-block";
        });
            button1111.addEventListener('click', function(){
                optionOneOneOneEnd.style.display = "none";
                button1111.style.display = "none";
                button1112.style.display = "none";
                optionOneOneOneOneEnd.style.display = "block";
                end.style.display = "block";
            });
            button1112.addEventListener('click', function(){
                optionOneOneOneEnd.style.display = "none";
                button1111.style.display = "none";
                button1112.style.display = "none";
                optionOneOneOneTwoEnd.style.display = "block";
                endGood.style.display = "block";
            });
        button112.addEventListener('click', function(){
            optionOneOneEnd.style.display = "none";
            button111.style.display = "none";
            button112.style.display = "none";
            optionOneOneTwoEnd.style.display = "block";
            end.style.display = "block";
        })
    button12.addEventListener('click', function(){
        optionOneScreen.style.display = "none";
        button11.style.display = "none";
        button12.style.display = "none";
        optionOneTwoEnd.style.display = "block";
        end.style.display = "block";
    });

button2.addEventListener('click', function(){
    opening.style.display = "none";
    button1.style.display = "none";
    button2.style.display = "none";
    optionTwoScreen.style.display = "block";
    button21.style.display = "inline-block";
    button22.style.display = "inline-block";
 });
    button21.addEventListener('click', function(){
        optionTwoScreen.style.display = "none";
        button21.style.display = "none";
        button22.style.display = "none";
        optionTwoOneEnd.style.display = "block";
        end.style.display = "block";
    });
    button22.addEventListener('click', function(){
        optionTwoScreen.style.display = "none";
        button21.style.display = "none";
        button22.style.display = "none";
        optionTwoTwoEnd.style.display = "block";
        end.style.display = "block";
    });
end.addEventListener('click', function(){
    optionTwoTwoEnd.style.display = "none";
    optionTwoOneEnd.style.display = "none";
    optionOneOneEnd.style.display = "none";
    optionOneTwoEnd.style.display = "none";
    optionOneOneOneEnd.style.display = "none";
    optionOneOneTwoEnd.style.display = "none";
    optionOneOneOneOneEnd.style.display = "none";
    optionOneOneOneTwoEnd.style.display = "none";
    end.style.display = "none";
    opening.style.display = "block";
    button1.style.display = "inline-block";
    button2.style.display = "inline-block";
})
endGood.addEventListener('click', function(){
    optionTwoTwoEnd.style.display = "none";
    optionTwoOneEnd.style.display = "none";
    optionOneOneEnd.style.display = "none";
    optionOneTwoEnd.style.display = "none";
    optionOneOneOneEnd.style.display = "none";
    optionOneOneTwoEnd.style.display = "none";
    optionOneOneOneOneEnd.style.display = "none";
    optionOneOneOneTwoEnd.style.display = "none";
    endGood.style.display = "none";
    opening.style.display = "block";
    button1.style.display = "inline-block";
    button2.style.display = "inline-block";
})