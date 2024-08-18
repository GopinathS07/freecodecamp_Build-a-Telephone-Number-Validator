const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

/*............FUNCTIONS........  */
/*----CHECK USER INPUT -----*/
const checkUserInput = () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
  }
  else {
    cleanUserInput(userInput.value);
  }
}

/*----CLEAN USER INPUT -----*/
const cleanUserInput = (str) => {
  const cleanedUserInput = str.replace(/[ ]/g, ""); //g matches all coincidences
validateNumber(cleanedUserInput);
}


/*-----VALIDATING NUMBER-----*/
const phonePattern = /^1?((\(\d{3}\))|\d{3})\-?\d{3}\-?\d{4}$/;
const validateNumber = (num) => {
  const isValid = phonePattern.test(num);
  resultsDiv.classList.add("border");
  if (isValid) {
    resultsDiv.innerHTML += `<p class="validNumber" style="color:green">Valid US number: ${userInput.value}<p>`
  }
  else {
    resultsDiv.innerHTML += `<p class="inValidNumber" style="color:red">Invalid US number: ${userInput.value}<p>`
  }
}
const clearResults = ( ) => {
  resultsDiv.innerHTML = "";
resultsDiv.classList.remove("border");
    }



/*............EVENTS............*/

checkBtn.addEventListener("click", checkUserInput); /*Curiosity: if I put this command BEFORE the function, does not work*/

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
    if (e.ctrlKey && e.key === "z") {
        document.getElementById("results-div").textContent = "It also works!!!"
  } /*Learn more about modifier keys..........................
  ctr + z also works without this condition deleting the input content*/
});

clearBtn.addEventListener("click", clearResults);
