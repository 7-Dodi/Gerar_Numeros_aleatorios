function gerarNumero(){
    return Math.round(Math.random() *100);
}

const button = document.querySelector("#button");
const ul = document.querySelector("ul");

button.addEventListener("click", () =>{
    const li = document.createElement("li");
    li.textContent = gerarNumero();
    ul.prepend(li);
});