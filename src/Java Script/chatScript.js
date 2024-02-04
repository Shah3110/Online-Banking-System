// chatScript.js

document.addEventListener('DOMContentLoaded', function () {
    var sendButton = document.querySelector('#chat-input button');
    sendButton.addEventListener('click', sendMessage);
});

function sendMessage() {
    var messageInput = document.querySelector('#chat-input textarea');
    var messageText = messageInput.value.trim();

    if (messageText !== '') {
        var sentMessage = createMessageElement('sent', messageText);

        var chatContainer = document.querySelector('#chat-container');
        chatContainer.appendChild(sentMessage);

        messageInput.value = '';

        simulateReceivedResponse();
    }
}

function simulateReceivedResponse() {
    setTimeout(function () {
        var receivedMessage = createMessageElement('received', 'Thank you for your message! How else can we assist you?');

        var chatContainer = document.querySelector('#chat-container');
        chatContainer.appendChild(receivedMessage);
    }, 1000);
}

function createMessageElement(className, text) {
    var messageElement = document.createElement('div');
    messageElement.className = 'chat-message ' + className;
    messageElement.textContent = text;
    return messageElement;
}
