class CircularList {
    #index;
    #elements;
    constructor(...args) {
        if ([...args].length == 0) {
            throw new Error("Empty list");
        }
        this.#elements = [...args];
        this.#index = -1;
    }

    next() {
        this.#index = (this.#index >= this.#elements.length - 1) ? -1 : this.#index;
        return this.#elements[++this.#index];
    }

    prev() {
        this.#index = (this.#index <= 0) ? this.#elements.length : this.#index;
        return this.#elements[--this.#index];
    }
}