document.addEventListener('DOMContentLoaded', () => {
    const fullname = document.querySelector("#fname");
    const lastname = document.querySelector("#lname");
    const countries = document.querySelector("#countries");
    const score = document.querySelector("#score");
    const container = document.querySelector(".score-container");
    const btn = document.querySelector("#btn");
    let scorearray = [];
console.log(scorearray);

    if (btn) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const scoreValue = Number(score.value);
     
            let obj1 = {
                id: scorearray.length + 1,
                fname: fullname.value,
                lname: lastname.value,
                countries: countries.value,
                score: scoreValue,
            };

            scorearray.push(obj1);
            name();
            displayScores();
        });
    }

    function name() {
        scorearray.sort((a, b) => b.score - a.score); 
    }

    function displayScores() {
        container.innerHTML = ""; 

        scorearray.forEach((obj1) => {
            const scoreCard = document.createElement("div");
            scoreCard.classList.add("score-card");

            const name = document.createElement("p");
            name.innerHTML = `${obj1.fname} ${obj1.lname}`;

            const country = document.createElement("p");
            country.innerHTML = `Country: ${obj1.countries}`;

            const scoreValue = document.createElement("p");
            scoreValue.innerHTML = `Score: ${obj1.score}`;

            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Delete";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", () => deleteScore(obj1, scoreCard));

            const inkerement = document.createElement("button");
            inkerement.innerHTML = "+5";
            inkerement.addEventListener("click", () => inkrementScore(obj1, scoreValue));

            const deckrement = document.createElement("button");
            deckrement.innerHTML = "-5";
            deckrement.addEventListener("click", () => deckrementScore(obj1, scoreValue));

            scoreCard.append(name, country, scoreValue, inkerement, deckrement, deleteBtn);
            container.append(scoreCard);
        });

        fullname.value = "";
        lastname.value = "";
        score.value = "";
        countries.value = "Choose Country";
    }

    function deleteScore(obj, card) {
        scorearray = scorearray.filter((item) => item !== obj);
        name()

        card.remove();
    }

    function inkrementScore(obj, scoreValueElement) {
        obj.score += 5;
        scoreValueElement.innerHTML = `Score: ${obj.score}`;
        name();
        inkrementScore();
    }

    function deckrementScore(obj, scoreValueElement) {
        obj.score -= 5;
        scoreValueElement.innerHTML = `Score: ${obj.score}`;
        name();
        deckrementScore();
    }
});
