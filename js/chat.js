document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const chatContainer = document.getElementById('chatContainer');

    // 点击按钮切换聊天窗口
    chatButton.addEventListener('click', function() {
        chatContainer.classList.toggle('active');
    });
});