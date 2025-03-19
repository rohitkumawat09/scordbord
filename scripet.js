const best = document.querySelector("#one");
const lastname = document.querySelector("#two");
const number = document.querySelector("#number");
const btn = document.querySelector("button");
const india = document.querySelector("#india select");
const parent = document.querySelector(".parent");
btn.addEventListener("click", (event) => {
    event.preventDefault();


    const paraFirst = document.createElement("p");
    const name = best.value
    paraFirst.textContent = name;
    parent.appendChild(paraFirst);

    const paraLast = document.createElement("p");
    const nextname = lastname.value
    paraLast.textContent = nextname;
    parent.appendChild(paraLast);

    const paraNumber = document.createElement("p");
    const number2 = number.value
    paraNumber.textContent = number2;
    parent.appendChild(paraNumber);

    const paraCountry = document.createElement("p");
    const a = india.value; 
    paraCountry.textContent = a;
    parent.appendChild(paraCountry);


    best.value = '';
    lastname.value = '';
    number.value = '';
    india.selectedIndex = 0;
    console.log(parent);
    console.log(paraCountry);

});
