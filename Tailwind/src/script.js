const toggleButton = document.getElementById('theme-toggle');
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });

        const getStartedBtn = document.getElementById('get-started-btn');
        const mainContent = document.getElementById('main-content');

        function loadChatPage() {
            mainContent.innerHTML = `
                <div class="container mx-auto w-4/5 chat-container p-2">
                    <div id="chat-area" class="flex flex-col">
                        <!-- Example Messages -->
                        
                    </div>
                    <div class="container mx-auto flex mt-4">
                        <textarea id="user-prompt" class="flex-1 p-4 rounded-l-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-black focus:outline-none resize-none" placeholder="Ask anything..." rows="1"></textarea>
                        <button id="submit-btn" class="px-6 py-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">Send</button>
                    </div>
                </div>
            `;

            attachChatEventListeners();
        }

        function attachChatEventListeners() {
            const userPrompt = document.getElementById('user-prompt');
            const submitBtn = document.getElementById('submit-btn');
            const chatArea = document.getElementById('chat-area');

            function handleAIInteraction() {
                const prompt = userPrompt.value.trim();
                if (prompt) {
                    const userMessage = document.createElement('div');
                    userMessage.classList.add('chat-bubble', 'user-message');
                    userMessage.textContent = `User: ${prompt}`;
                    chatArea.appendChild(userMessage);

                    const aiMessage = document.createElement('div');
                    aiMessage.classList.add('chat-bubble', 'ai-message');
                    aiMessage.textContent = `AI: Simulated response for "${prompt}".`;
                    chatArea.appendChild(aiMessage);

                    chatArea.scrollTop = chatArea.scrollHeight;
                    userPrompt.value = '';
                }
            }

            submitBtn.addEventListener('click', handleAIInteraction);
            userPrompt.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault(); // Prevents new line from being added
                    handleAIInteraction();
                }
            });
        }

        getStartedBtn.addEventListener('click', loadChatPage);