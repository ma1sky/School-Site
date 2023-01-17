

//Присваивает активный класс новости при наведении
document.querySelectorAll(".article-news").forEach(item => {
    item.onmouseenter = () => {
        item.childNodes[3].childNodes[1].classList.add("article-news_hover");
        item.childNodes[1].childNodes[1].classList.add("article-news__image_hover");
    }
    item.onmouseleave = () => {
        item.childNodes[3].childNodes[1].classList.remove("article-news_hover");
        item.childNodes[1].childNodes[1].classList.remove("article-news__image_hover");
    }
});

//Присваивает активный класс меньшей новости при наведении
document.querySelectorAll(".article-news_small").forEach(item => {
    item.onmouseenter = () => {
        item.childNodes[1].childNodes[1].classList.add("article-news_hover");
    }
    item.onmouseleave = () => {
        item.childNodes[1].childNodes[1].classList.remove("article-news_hover");
    }
});

//Присваивание активного класса в навигации при скролле
window.addEventListener('scroll', () => {
    document.querySelectorAll(".section").forEach((item, i) => {
        if (item.offsetTop - document.querySelector(".header").clientHeight - 150 <= window.scrollY) {
            //проверка наличия активного класса и удаление при нахождении
            document.querySelectorAll(".header__item").forEach((item) => {
                if (item.classList.contains("header__item_active")) {
                    item.classList.remove("header__item_active")
                }
            })
            document.querySelectorAll(".header__item")[i].classList.add("header__item_active");
        }
    });
});

document.querySelectorAll(".header__item").forEach(item => {
    item.onclick = () => {
        document.querySelectorAll(".header__item").forEach(other => {
            other.classList.remove("header__item_active");
        });
        item.classList.add("header__item_active");
    };
    item.addEventListener("click", function(el) {
        el.preventDefault;
        const anchorAttr = this.getAttribute("href").substring(1);
        const scrollTarget = document.getElementById(anchorAttr);
        const topOffset = document.querySelector(".header").clientHeight;
        const elementPosition = scrollTarget.offsetTop;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        })
    })
})