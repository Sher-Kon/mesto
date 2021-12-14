
export class Section {
    constructor(items, renderer, containerSelector) {
        this._items = items;
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

    renderItems() {
        this._items.forEach((item) => {
            const cardElement = this._renderer(item);
            // Добавляем в DOM (in containerSelector)
            this.addItem(cardElement);
        });
    }
}
