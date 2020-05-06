const simpleBots = Object.create(null);


const agreeOptions = [
    "In life, winning and losing will both happen.",
    "Talent is never enough",
    "I always give 125% of me in the court"
];
simpleBots.MagicBot = {
    "name": "MagicBot",
    "response": function () {
        return agreeOptions[Math.floor(Math.random() * agreeOptions.length)];
    }
};

simpleBots.ShaqBot = {
    "name": "ShaqBot",
    "response": () => "Not in my house!"
};

simpleBots.MJBot = {
    "name": "MJBot",
    "response": function (History) {
        return `Hmm,"${(history[history.length-1])}",? man!, gottabe like Mike`;
    }
}; 

export default Object.freeze(simpleBots)