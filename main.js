import simpleBots from "./simpleBots.js";
import chatbotUI from "./chatbotUI.js";

window.addEventListener("DOMContentLoaded", function () {
    const bots = Object.values(simpleBots);
    chatbotUI.init(bots);
});