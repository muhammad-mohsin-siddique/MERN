
let username;

document.getElementById('login-button').onclick = () => {
    username = document.getElementById('username-input').value;
    if (username.trim() !== '') {
        document.getElementById('login-container').classList.remove('active');
        document.getElementById('chat-container').classList.add('active');
    }
};

const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Connected to server');
};

ws.onmessage = (event) => {
    const messageContainer = document.createElement('div');
    const timestamp = new Date().toLocaleTimeString();
    messageContainer.textContent = `[${timestamp}] ${event.data}`;
    document.getElementById('messages').appendChild(messageContainer);
};

ws.onclose = () => {
    console.log('Disconnected from server');
};

ws.onerror = (error) => {
    console.error('WebSocket error:', error);
};

document.getElementById('message-form').onsubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById('message-input');
    const message = input.value;
    if (message.trim() !== '') {
        ws.send(`${username}: ${message}`);
        input.value = '';
    }
};