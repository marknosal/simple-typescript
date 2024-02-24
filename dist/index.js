"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function X(obj) {
    return obj.a + obj.b + obj.c;
}
function combine(objA, objB) {
    return { ...objA, ...objB };
}
const objA = { a: 1 };
const objB = { b: 2 };
const resultObj = combine(objA, objB);
