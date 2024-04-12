export default class ArrayBufferConverter {
    constructor() {
        this.bufferConverter = null;
    }
    
    load(buffer) {
        this.bufferConverter = new  Uint16Array(buffer);
    }

    toString() {
        return [...this.bufferContainer];
    }
}