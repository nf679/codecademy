let messageComponents = {
    "activity": [
        "Watch a movie",
        "Watch an NFL game",
        "Go for a walk",
        "Go for a run",
        "Do some yoga",
        "Paint",
        "Do some colouring",
        "Read a book",
        "Do some knitting",
        "Go paddleboarding",
        "Listen to some music",
        "Play the drums",
        "Play guitar",
        "Play video games",
        "Build some lego",
        "Do some journalling",
        "Take a bath",
    ],
    "snack": [
        "Chocolate",
        "Cookies",
        "Brownies",
        "Cake",
        "Popcorn",
        "Crisps",
        "Pastries",
        "Nuts",
        "Rice cake",
    ],
    "outfit": [
        "Oversized hoodie with shorts",
        "Oversized hoodie with leggings",
        "Oversized hoodie with baggy jeans",
        "Crop top with baggy jeans",
        "Crop top with sweatpants",
        "Pjs",
        "Oversized tee with shorts",
        "Oversized tee with leggings",
        "Dungarees!",
        "Vintage jumper with flares",
        "NFL jersey with shorts",
        "NFL jersey tucked into jeans",
        "Oodie",
        "Nice dress",
    ],
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateMessage(components) {
    let activity = getRandomItem(components.activity);
    let snack = getRandomItem(components.snack);
    let outfit = getRandomItem(components.outfit);

    return `Here is the plan for your day: you will ${activity}, eat ${snack}, and wear ${outfit}.`;
}

// Example run:
console.log(generateMessage(messageComponents));
