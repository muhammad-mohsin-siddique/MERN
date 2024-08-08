(() => {
    const sendBtn = document.querySelector('#senMessage');
    const messagesBox = document.querySelector('#messageBox');
    const messages = document.querySelector('#messages');
    const loginBtn = document.querySelector('#login-button');

    let ws;
    let username = "Anonymous";

    function showMessages(message) {
        messages.textContent += `\n\n${message}`;
        messages.scrollTop = messages.scrollHeight;
        messagesBox.value = '';
    }

    function sendMessage() {
        const messageContent = messagesBox.value.trim();
        if (!messageContent) {
            showMessages("Cannot send an empty message");
            return;
        }
        if (ws) {
            const messageSend = `${username}: ${messageContent}`;
            ws.send(messageSend);
            showMessages(messageSend); // Display the message sent
        } else {
            showMessages("No WebSocket Connected");
        }
    }

    function login(){
        username = document.querySelector('#username-input').value;
        if (username.trim() !== '') {
            document.getElementById('login-container').classList.remove('active');
            document.getElementById('chat-container').classList.add('active');
            // Send username to server
            if (ws) {
                ws.send(`USERNAME:${username}`);
            }
        }
    }
    function init() {
        if (ws) {
            ws.onopen = ws.onerror = ws.onclose = null;
            ws.close();
        }

        ws = new WebSocket('ws://localhost:6969');
        ws.onopen = () => {
            console.log('Connection opened!');
        };

        ws.onmessage = ({ data }) => {
            try {
                console.log(data);
                showMessages(data);
            } catch (error) {
                console.error('Error parsing message:', error);
            }
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        ws.onclose = () => {
            console.log(`${username} left`);
            ws = null; // Clear the WebSocket reference
        };
    }
    document.querySelector('#username-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevents the default newline character from being added
            login();
        }
    });
    loginBtn.addEventListener('click', login)
    sendBtn.addEventListener('click', sendMessage);

    // Add event listener for Enter key
    messagesBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevents the default newline character from being added
            sendMessage();
        }
    });

    init();
})();