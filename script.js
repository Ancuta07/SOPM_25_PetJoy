function openMap(address) {
    const apiKey = 'AIzaSyBJNRBYaYIvzxX1_vSq69iV6YOEaImCMQs';
    const url = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}`;
    window.open(url, '_blank', 'width=800,height=600');
}

function toggleChat() {
    const windowEl = document.getElementById('chatWindow');
    if (windowEl.style.display === 'flex') {
        windowEl.style.display = 'none';
    } else {
        windowEl.style.display = 'flex';
        windowEl.style.flexDirection = 'column';
    }
}

function handleChat(event) {
    if (event.key === "Enter") {
        const input = document.getElementById('chatInput');
        const msg = input.value.trim();
        if (msg === "") return;

        addMessage(msg, 'user');
        input.value = "";

        setTimeout(() => {
            if (!window.botStep) window.botStep = 1;

            if (window.botStep === 1) {
                addMessage("Ce cabinet vă interesează?", 'bot');
                window.botStep = 2;
            } else if (window.botStep === 2) {
                addMessage("O să vă contacteze un coleg în cel mai scurt timp.", 'bot');
                window.botStep = 3;
            }
        }, 600);
    }
}

function addMessage(text, sender) {
    const chat = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.textContent = text;
    div.className = sender === 'bot' ? 'bot-message' : 'user-message';
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}
