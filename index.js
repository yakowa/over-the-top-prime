function getDataForButton() {
    // Remove children nodes from #primes
    var primes = document.querySelector('#primes').innerHTML = "";

    // Display Reslts Table
    document.querySelector('#notPrimeLabel').style.display = "block";
    document.querySelector('#primeLabel').style.display = "block";

    var lower = document.querySelector('#lower').value;
    var upper = document.querySelector('#upper').value;
    checkPrimeRange(lower, upper)
    var SFXprime = new sound("SFX 1.wav", false);
    SFXprime.play()
}

function addPrime(primeNumber) {
    var primes = document.querySelector('#primes');
    let newLi = document.createElement('li');
    newLi.innerText = primeNumber;
    primes.appendChild(newLi);
}
function addNotPrime(notPrimeNumber) {
    var notPrimes = document.querySelector('#notPrimes');
    let newLi = document.createElement('li');
    newLi.innerText = notPrimeNumber;
    notPrimes.appendChild(newLi);
}

function checkPrimeRange(lowerBound, UpperBound) {
    lowerBound = parseInt(lowerBound)
    UpperBound = parseInt(UpperBound)
    var notPrime = false;

    for (let i = lowerBound; i <= UpperBound; i++) {
        for (let j = 2; j <= i/2; j++) {
            if ((i % j) == 0) {
                console.log(i, 'not prime', j, i/j);
                addNotPrime(i)
                notPrime = true;
                break;
            }
        }
        if (!notPrime && !(i == 1)) {
            console.log(i, 'prime')
            addPrime(i)
        }
        notPrime = false;
    }

}


// Making sound effects or music that can be played
function sound(src, repeat) {
    // Creating an audio tag
    this.sound = document.createElement("audio");
    // Setting the source
    this.sound.src = src;
    // Setting preload to auto
    this.sound.setAttribute("preload", "auto");
    // Disabling controls
    this.sound.setAttribute("controls", "none");
    // Making the audio tag not render on the page (not canvas)
    this.sound.style.display = "none";
    // Add the sound tag to the HTML body
    document.body.appendChild(this.sound);
    // Play function for this sound effect
    this.play = function() {
        // Play the sound
        this.sound.play();
        // If repeating is true
        if (repeat) {
            // Set repeat to true
            this.sound.loop = true;
        }
    }
    // Stop function for this sound effect
    this.stop = function() {
        // Pause the sound
        this.sound.pause();
    }
}