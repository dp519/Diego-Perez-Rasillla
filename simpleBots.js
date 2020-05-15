const simpleBots = Object.create(null);

const agreeOptions = [
    "Yes!",
    "My Man!",
    "Looking Good!"
];
simpleBots.agreeBot = {
    "name": "AgreeBot",
    "response": function () {
        return agreeOptions[Math.floor(Math.random() * agreeOptions.length)];
    }
};

simpleBots.grumpyBot = {
    "name": "GrumpyBot",
    "response": () => "No!"
};

simpleBots.reflectBot = {
    "name": "Reflect Bot",
    "response": function (history) {
        return `Hmm, "${history[history.length - 1]}"? Interesting.`;
    }
};

export default Object.freeze(simpleBots);
