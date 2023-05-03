/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const moodBox = document.querySelector('.mood-box');
const moodButtons = moodBox.querySelectorAll('.mood-button');
const selectedMood = moodBox.querySelector('.selected-mood');
const submitButton = moodBox.querySelector('.submit-button');

moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    // remove selected class from previously selected button (if any)
    const prevSelected = moodBox.querySelector('.selected');
    if (prevSelected) {
      prevSelected.classList.remove('selected');
    }
    // add selected class to the clicked button
    button.classList.add('selected');
    // update the selected mood text
    selectedMood.textContent = `You are feeling ${button.dataset.mood} today.`;
  });
});

submitButton.addEventListener('click', () => {
  const selectedButton = moodBox.querySelector('.selected');
  if (selectedButton) {
    const selectedMoodValue = selectedButton.dataset.mood;
    // TODO: add code to submit the selected mood value to a database or server
    alert(`Your mood (${selectedMoodValue}) has been submitted!`);
  } else {
    alert('Please select a mood before submitting.');
  }
});