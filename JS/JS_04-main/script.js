
const firstInput = document.createElement('input');
firstInput.classList.add('form-control');
firstInput.style.margin = "0 0 1rem 0";
firstInput.placeholder = "Pierwsza liczba";

const secondInput = document.createElement('input');
secondInput.classList.add('form-control');
secondInput.style.margin = "0 0 1rem 0";
secondInput.placeholder = "Druga liczba";

///select
const select = document.createElement('select');
select.classList.add('form-control');
select.style.margin = "0 0 1rem 0";

const options = ["+", "-", "*", "/"];
for(const optTxt of options){
    let opt =  document.createElement("option");
    opt.innerText = optTxt;
    select.appendChild(opt);
}

///button
const button = document.createElement('button');
button.innerText = "Oblicz";
button.classList.add('btn', 'btn-primary');

const app = document.getElementById('app');
app.appendChild(firstInput);
app.appendChild(select);
app.appendChild(secondInput);
app.appendChild(button);
