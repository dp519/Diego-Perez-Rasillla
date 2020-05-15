import simpleBots from "./simpleBots.js";

const chatbotUI = Object.create(null);

chatbotUI.init = function (bots) {
    // I always define this helpful shorthands.
    const el = (id) => document.getElementById(id);
    const cloneTemplate = (id) => document.importNode(el(id).content, true);

    console.log(bots);
    
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

        const theirTemplate = ("my-messasge");
        const theirMessage = theirTemplate.querySelector(["name=message"]);
        theirMessage.textContent = response;
        messages.appendChild(theirTemplate);
        theirMessage.scrollIntoView();

    };
    const botlist = el("bot-list");
    const botTitle = el("bot-title");
    bots.forEach(function(b, i) {
        const botTemplate = cloneTemplate("bot-listing");
        const botName = botTemplate.querySelector(["name=bot"]);
        botnames.push(botName)
        botname.textContent = b.name;
        botlist.appendChild(botTemplate);

        botname.onclick =function () {
            bot = b;
            BotTitle.textContent = `Chatting with`  ${b.name} ;
            botNames.forEach(function(bn) {
                bn.setAttribute("aria-selected", false);
            });
            botName.setAttribute("aria-selected", true);

        };
        if (i === 0) {
            botName.onclick();
        }    

    });
};

export default Object.freeze(chatbotUI);
