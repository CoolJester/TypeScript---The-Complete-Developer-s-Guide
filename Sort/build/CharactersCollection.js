"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const chars = this.data.split('');
        const lesser = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = lesser;
        this.data = chars.join();
    }
}
exports.CharactersCollection = CharactersCollection;
