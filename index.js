
document.querySelectorAll(".header__item").forEach(item => {
    item.onclick = () => {
        document.querySelectorAll(".header__item").forEach(other => {
            other.classList.remove("header__item_active");
        });
        item.classList.add("header__item_active");
    };
});

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

document.querySelectorAll(".article-news_small").forEach(item => {
    item.onmouseenter = () => {
        item.childNodes[1].childNodes[1].classList.add("article-news_hover");
    }
    item.onmouseleave = () => {
        item.childNodes[1].childNodes[1].classList.remove("article-news_hover");
    }
});