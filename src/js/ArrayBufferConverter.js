export default class ArrayBufferConverter {
    constructor() {
        this.bufferContainer = null;
    }
    
    load(buffer) {
        this.bufferContainer = new  Uint16Array(buffer);
    }

    toString() {
        const arr = [];
        this.bufferContainer.forEach(function(item) {
            arr.push(item);
        });

        return arr;
    }
}