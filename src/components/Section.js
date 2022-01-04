
export class Section {
    constructor(renderer, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._container.prepend(element);
    }

    addItemDn(element) {
        this._container.append(element);
    }

    renderItem(item) {
        const cardElement = this._renderer(item);
        // Добавляем в DOM (in containerSelector)
        this.addItem(cardElement);
    }

    renderItems(items) {
        items.forEach((item) => {
            const cardElement = this._renderer(item);
            // Добавляем в DOM (in containerSelector)
            this.addItemDn(cardElement);
        });
    }

}
