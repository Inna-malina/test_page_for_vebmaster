//using classes chapter 48-49
class SliderCard {
    constructor(src, alt, title, price, data) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.price = price;
        this.data = title;
    }

    render() {
        let parent = document.querySelector('.slider-card__box');
        let element = document.createElement('div');
        element.classList.add('slider-card');
        element.innerHTML = `
            <img class="card__img" src=${this.src} alt=${this.alt}>
            <div class="card-description__box">
                <div class="description__title">${this.title}</div>
                <div class="description__prise">${this.price}</div>
                <button class="card__button" data-name = ${this.title}>Заказать</button>
            </div>

        `;
        parent.append(element);
    }
}

export default SliderCard;