


const form = document.querySelector("form");

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const score = document.querySelector("#score");
const country = document.querySelector("#country");

const resultsDiv = document.querySelector("#results");

const data = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!fname.value || !lname.value || !country.value || !score.value || isNaN(score.value)) {
        alert("Please fill in all fields with a valid score.");
        return;
    }
    const obj = {};
    obj.name = fname.value + " " + lname.value;
    obj.country = country.value;
    obj.score =Number( score.value);

    data.push(obj);

    fname.value = "";
    lname.value = "";
    score.value = "";
    country.value = "";
    console.log(data);
    showData(data);
    sortData()

});

function sortData() {
    data.sort((a, b) => b.score - a.score); // Sort by score in descending order
    showData(data); // Show sorted data
}
// function sortData() {
//     data.sort((a, b) => {    b.score - a.score; 
//        return

//     });
//     sortData(data)

// }




function showData(arr) {
    resultsDiv.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        const parent = document.createElement("div");
        const name = document.createElement("p");
        const score = document.createElement("p");
        const country = document.createElement("p");
        const plusFive = document.createElement("span");
        const minusFive = document.createElement("span");
        const del = document.createElement("button");

        parent.classList.add("data");

        name.innerText = arr[i].name;
        score.innerText = arr[i].score;
        country.innerText = arr[i].country;

        plusFive.innerText = "+5";
        minusFive.innerText = "-5";
        del.innerText = "Delete";

        plusFive.addEventListener("click", () => {
            addFive(i);
        });

        minusFive.addEventListener("click", () => {
            subtractFive(i);
        });

        del.addEventListener("click", () => {
            deleteData(i);
        });

        const actions = document.createElement("div");
        actions.append(plusFive, minusFive, del);

        parent.append(name, score, country, actions);
        resultsDiv.append(parent);
    }
}




function deleteData(index) {
    data.splice(index, 1);
    showData(data);
    sortData() 
}

// function deleteData(value) {
//     data.remove(value);  
//     showData(data); 
// }

function addFive(index) {
    data[index].score = Number(data[index].score) + 5;
    showData(data);
    sortData() 
}

function subtractFive(index) {
    if (data[index].score >= 5) {
        data[index].score = Number(data[index].score) - 5;
        showData(data);
        sortData();
    } else {
        alert("Score cannot be less than 0.");
    }
}