
document.querySelector('button').addEventListener("click", (event) => {
    const clickedButton = event.target;
    document.querySelector("#part1").setAttribute('hidden', 'true');
    const buttonContent = clickedButton.innerHTML;
    switch (buttonContent) {
        case "Happy":
            document.querySelector("body").style.backgroundColor = "rgb(255, 253, 55)";
          break;
        case "Sad":
            document.querySelector("body").style.backgroundColor = "rgb(54,69,79)";
          break;
        case "Annoyed":
            document.querySelector("body").style.backgroundColor = "rgb(40, 240, 18)";
          break;
        case "Excited":
            document.querySelector("body").style.backgroundColor = "rgb(246, 38, 129)";
        case "Angry":
            document.querySelector("body").style.backgroundColor = "rgb(208, 28, 31)";
            break;
        case "Calm":
            document.querySelector("body").style.backgroundColor = "rgb(147, 202, 237)";
}})
