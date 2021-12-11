
export class Section {
    constructor( items, renderer, containerSelector) {
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
            this._renderer(item);
    }

    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item);
        });
    }
}
