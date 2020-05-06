
const chatbotUI = Object.create(null);

chatbotUI.init = function (bots) {
    // I always define this helpful shorthands.
    const el = (id) => document.getElementById(id);
    const cloneTemplate = (id) => document.importNode(el(id).content, true);

    const history = []; // Each message sent and received.
    const bot = bots[0];

    const composition = el("composition");
    const messages = el("messages");
    el("send-button").onclick = function () {
        const myMessage = composition.value;
        composition.value = "";
        history.push(myMessage);
        const response = bot.response(history);
        history.push(response);

        // I prefer this method, using templates.
        const myTemplate = cloneTemplate("my-message");
        myTemplate.querySelector("[name=message]").textContent = myMessage;
        messages.appendChild(myTemplate);

        // Don't do it this way, directly manipulating the DOM.
        const botDiv = document.createElement("div");
        botDiv.className = "from-them";
        botDiv.textContent = response;
        messages.appendChild(botDiv);
    };
};

export default Object.freeze(chatbotUI);
