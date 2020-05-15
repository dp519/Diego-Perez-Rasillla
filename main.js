import simpleBots from "./simpleBots.js";
import chatbotUI from "./chatbotUI.js";

console.log(simpleBots.agreeBot.response());
const callback = function () {
    const bots = Object.values(simpleBots);
    chatbotUI.init(bots);
};
window.addEventListener("DOMContentLoaded", callback);