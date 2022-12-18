let header__item = document.querySelectorAll(".header__item");

for (let item of header__item) {
    item.addEventListener("click", function(){
        for (let other of header__item) {
            other.classList.remove("header__item_active");
        }
        this.classList.add("header__item_active");
    });
};