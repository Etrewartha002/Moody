document.querySelectorAll('button').forEach(button => {
    button.addEventListener("click", (event) => {
        const clickedButton = event.target;
        console.log("Button clicked:", clickedButton.innerHTML);
        document.querySelector("#part1").setAttribute('hidden', 'true');
        const buttonContent = clickedButton.innerHTML.trim(); 
        switch (buttonContent) {
            case "Happy":
                document.querySelector("body").style.backgroundColor = "rgb(255, 253, 55)";
                document.getElementById("p2").innerText = buttonContent;
                document.querySelector("#part2").setAttribute('hidden', "false")
                break;
            case "Sad":
                document.querySelector("body").style.backgroundColor = "rgb(54,69,79)";
                document.getElementById("p2").innerText = buttonContent;
                document.querySelector("#part2").setAttribute('hidden', "false");
                break;
            case "Annoyed":
                document.querySelector("body").style.backgroundColor = "rgb(40, 240, 18)";
                document.getElementById("p2").innerText = buttonContent;
                document.querySelector("#part2").setAttribute('hidden', "false");
                break;
            case "Excited":
                document.querySelector("body").style.backgroundColor = "rgb(246, 38, 129)";
                document.getElementById("p2").innerText = buttonContent;
                document.querySelector("#part2").setAttribute('hidden', "false");
                break;
            case "Angry":
                document.querySelector("body").style.backgroundColor = "rgb(208, 28, 31)";
                document.getElementById("p2").innerText = buttonContent;
                document.querySelector("#part2").setAttribute('hidden', "false");
                break;
            case "Calm":
                document.querySelector("body").style.backgroundColor = "rgb(147, 202, 237)";
                document.getElementById("p2").innerText = buttonContent;
                document.querySelector("#part2").setAttribute('hidden', "false");
                break;
            default:
                console.log("No matching case for button content:", buttonContent);
        }
    });
});
