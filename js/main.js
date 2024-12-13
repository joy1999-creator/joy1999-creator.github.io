document.addEventListener('DOMContentLoaded', () => {
    // 初始化轮播图
    new Carousel();
    
    // 初始化聊天窗口
    new ChatWidget();

    // 添加页面载入动画
    document.querySelectorAll('.social-link').forEach((link, index) => {
        link.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
    });
}); 