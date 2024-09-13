// define the winner score
const winnerScore = 10;
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

// 1. start game button
document.getElementById("startGame").addEventListener("click", () => {
    // get user 1 and user 2 names
    const firstUserName = document.getElementById("firstUserNameInput").value;
    const secondUserName = document.getElementById("secondUserNameInput").value;

    // insert the names in DOM
    document.querySelector("#firstUser h3").innerText = "User1: " + firstUserName;
    document.querySelector("#secondUser h3").innerText = "User2: " + secondUserName;
    // remove start game form from page and replace it with game page
    document.getElementById("startGameForm").style.display = "none";
    document.querySelector('body').style.alignItems = "center";
    document.getElementById("StartGameParent").style.display = "none"
    document.getElementById("game").style.display = "flex";
    document.getElementById('ax').style.display = 'flex'
    document.getElementById('footer').style.display = 'none'


});

// 2. define dice function to get dice count
function dice() {
    // get number between 1 to 6



    //////////////
    const axChildren = document.getElementById('ax').children
    console.log(axChildren[0].children)
    /////////////



    const count = Math.floor(Math.random() * 6) + 1;
    // insert dice count to DOM
    if (count === 6) {
        document.getElementById("dice").innerText = count + " Hoooray you can role dice again!";

        ///
        axChildren[0].innerHTML = axChildren[count - 1].innerHTML
        ////
    } else {
        document.getElementById("dice").innerText = count;
        ////
        axChildren[0].innerHTML = axChildren[count - 1].innerHTML
        ////
    }
    // return dice count for use it
    return count;
}

// 3. get user 1 and user 2 buttons from DOM
const firstUserDiceButton = document.querySelector("#firstUser button");
const secondUserDiceButton = document.querySelector("#secondUser button");



// 4. define user 1 and user 2 default scores
let firstUserScore = 0;
let secondUserScore = 0;


/////
const ax = document.getElementById('ax')
let flag = 0
/////


// 5. make a click event for user 1 button
firstUserDiceButton.addEventListener("click", () => {
    // get dice count
    const diceCount = dice();

    //////////////////

    ax.classList.add('ax')
    setTimeout(() => {
        ax.classList.remove('ax')

    }, 4000);

    //////////////////

    // add dice count to user 1 score
    firstUserScore = firstUserScore + diceCount;
    // update user 1 score in DOM
    document.querySelector("#firstUser p").innerText = "Score: " + firstUserScore;
    // check if user 1 wins or not
    if (firstUserScore >= winnerScore) {
        // if user 1 wins show an alert and reload the page to start a new game
        alert("User 1 wins");
        window.location.reload();
    } else {
        // if user 1 is not win and dice is not 6 , make user 1 dice button disable and make user 2 button active
        if (diceCount !== 6) {
            firstUserDiceButton.setAttribute("disabled", "true");
            btn2.style.backgroundColor = '#d35211e5'
            secondUserDiceButton.removeAttribute("disabled");
            btn1.style.backgroundColor = 'rgb(246, 210, 145)'
            if (diceCount == 6){
                btn2.style.backgroundColor = '#d35211e5'
                btn1.style.backgroundColor = 'rgb(246, 210, 145)'
            }
            /////////

            ///////
        }
        // is dice count is 6 , user 1 can role dice again
    }
});

// 6. make a click event for user 2 button
secondUserDiceButton.addEventListener("click", () => {
    // get dice count
    const diceCount = dice();


    //////////////////

    ax.classList.add('ax')

    setTimeout(() => {
        ax.classList.remove('ax')

    }, 4000);
    //////////////////

    // add dice count to user 2 score
    secondUserScore = secondUserScore + diceCount;
    // update user 2 score in DOM
    document.querySelector("#secondUser p").innerText = "Score: " + secondUserScore;
    // check if user 2 wins or not
    if (secondUserScore >= winnerScore) {
        // if user 2 wins show an alert and reload the page to start a new game
        alert("User 2 wins");
        window.location.reload();
    } else {
        // if user 2 is not win and dice is not 6 , make user 2 dice button disable and make user 1 button active
        if (diceCount !== 6) {
            secondUserDiceButton.setAttribute("disabled", "true");
            btn1.style.backgroundColor = '#d35211e5'
            firstUserDiceButton.removeAttribute("disabled");
            btn2.style.backgroundColor = 'rgb(246, 210, 145)'
            if (diceCount == 6){
                btn1.style.backgroundColor = '#d35211e5'
                btn2.style.backgroundColor = 'rgb(246, 210, 145)'
            }
        }
        // is dice count is 6 , user 2 can role dice again
    }
});
