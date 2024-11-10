
document.querySelector('button').addEventListener("click", (event) => {
    const clickedButton = event.target;
    document.querySelector("#part1").setAttribute('hidden', 'true');
    const buttonContent = clickedButton.innerHTML;
    if (buttonContent == 'happy') {
        document.querySelector("body").style.backgroundColor = 'blue';
    }
});
