let numberOfDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButton; i++) {
        document.querySelectorAll("button")[i].addEventListener("click", function () {
            var buttonInnerHTML = this.innerHTML;

            switch (buttonInnerHTML) {
                case "w":
                        var audio = new Audio('../Drum-kit-files/sounds/tom-1.mp3');
                        audio.play();
                    break;
                
                case "a":
                        var audio = new Audio('../Drum-kit-files/sounds/tom-2.mp3');
                        audio.play();
                        
                default:
            }
            
    });
}

// var audio = new Audio('../Drum-kit-files/sounds/tom-1.mp3');
// audio.play();