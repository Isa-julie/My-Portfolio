
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
document.addEventListener("DOMContentLoaded", () => {
    const easterEggBtn = document.querySelector(".cta-button"); 

    if (easterEggBtn) {
        easterEggBtn.addEventListener("click", () => {
            playRockPaperScissors();
        });
    }
});

function playRockPaperScissors() {
    let playGame = confirm("Shall we play Rock, Paper, or Scissors?");

    if (playGame) {
        let playerChoice = prompt("Choose rock, paper, or scissors");

        if (playerChoice) {
            let playerOne = playerChoice.trim().toLowerCase(); 

            if (["rock", "paper", "scissors"].includes(playerOne)) {

                let computerChoice = Math.floor(Math.random() * 3) + 1; 
                let computer =
                    computerChoice === 1
                        ? "rock"
                        : computerChoice === 2
                        ? "paper"
                        : "scissors";

                console.log(`Player: ${playerOne}, Computer: ${computer}`);

                let result = "";
                if (playerOne === computer) {
                    result = "It's a tie!";
                } else if (
                    (playerOne === "rock" && computer === "scissors") ||
                    (playerOne === "scissors" && computer === "paper") ||
                    (playerOne === "paper" && computer === "rock")
                ) {
                    result = "You win!";
                } else {
                    result = "You lose!";
                }

                alert(`You chose: ${playerOne}\nComputer chose: ${computer}\n${result}`);

                let playAgain = confirm("Do you want to play again?");
                if (playAgain) {
                    playRockPaperScissors(); 
                } else {
                    alert("Thanks for playing!");
                }
            } else {
                alert("Invalid choice! Please select rock, paper, or scissors.");
            }
        } else {
            alert("It's alright, maybe next time!");
        }
    } else {
        alert("Maybe next time!");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactform");

    if (localStorage.getItem("formSubmitted")) {
        alert("✅ Form submitted successfully!");
        localStorage.removeItem("formSubmitted"); 
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("❌ Invalid email! Example: yourname@example.com");
            return;
        }

        const mobilePattern = /^(?:\+?[1-9]\d{1,3})?\d{9,14}$/;
        if (!mobilePattern.test(mobile)) {
            alert("❌ Invalid phone number! Example: +2507000000 or 07000000");
            return;
        }
        if (message.length < 5) {
            alert("❌ Message must contain at least 5 characters.");
            return;
        }
        localStorage.setItem("formSubmitted", "true");
        contactForm.submit();
    });
});

