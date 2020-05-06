const simpleBots = Object.create(null);

const MagicOptions = [
    "You always need to give 125% of yourself in the court!",
    "My Man!",
    "Looking Good, but talent is never enough!"
];
simpleBots.MagicBot = {
    "name": "MagicBot",
    "response": function () {
        return MagicOptions[Math.floor(Math.random() * MagicOptions.length)];
    }
};

simpleBots.ShaqBot = {
    "name": "ShaqBot",
    "response": () => "No!"
};

simpleBots.MikeBot = {
    "name": "Mike Bot",
    "response": function (history) {
        return `Hmm, "${history[history.length - 1]}"? Interesting.`;
    }
};

export default Object.freeze(simpleBots);