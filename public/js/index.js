
document.querySelector('button').addEventListener("click", (event) => {
    const clickedButton = event.target;
    clickedButton.setAttribute('hidden', 'true');
});
