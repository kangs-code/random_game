const game_form = document.querySelector("#Random-game");
const scope = document.querySelector(".scope");
const choose = document.querySelector(".choose");
const Text = document.querySelector(".Text");
const result = document.querySelector(".result");







function submitEvent(event){
    event.preventDefault();
    const scope_number = parseInt(scope.value);
    let machine_number = Math.ceil(Math.random()*scope_number);
    Text.innerText = `You chose: ${choose.value}, the machine chose: ${machine_number}`;
    Text.classList.remove("hidden");


    if(parseInt(choose.value) === machine_number){
        result.innerHTML = "<div style='margin-bottom:0px; margin-top:-20px'>You won!</div>"
        result.classList.remove("hidden");
    }
    else{
        result.innerHTML = "<div style='margin-bottom:0px; margin-top:-20px'>You lost!</div>"
        result.classList.remove("hidden")
    }
}

game_form.addEventListener("submit", submitEvent)