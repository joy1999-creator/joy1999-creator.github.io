class Carousel {
    constructor() {
        this.container = document.querySelector('.carousel-container');
        this.items = document.querySelectorAll('.carousel-item');
        this.dots = document.querySelector('.carousel-dots');
        this.currentIndex = 0;
        this.interval = null;
        
        this.init();
    }

    init() {
        // 创建指示点
        this.items.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goTo(index));
            this.dots.appendChild(dot);
        });

        // 添加按钮事件
        document.querySelector('.prev').addEventListener('click', () => this.prev());
        document.querySelector('.next').addEventListener('click', () => this.next());

        // 触摸事件
        let startX = 0;
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.container.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) this.next();
            if (endX - startX > 50) this.prev();
        });

        this.startAutoPlay();
    }

    goTo(index) {
        this.items[this.currentIndex].classList.remove('active');
        this.dots.children[this.currentIndex].classList.remove('active');
        
        this.currentIndex = index;
        
        this.items[this.currentIndex].classList.add('active');
        this.dots.children[this.currentIndex].classList.add('active');
    }

    next() {
        const nextIndex = (this.currentIndex + 1) % this.items.length;
        this.goTo(nextIndex);
    }

    prev() {
        const prevIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.goTo(prevIndex);
    }

    startAutoPlay() {
        this.interval = setInterval(() => this.next(), 4000);
    }
} 