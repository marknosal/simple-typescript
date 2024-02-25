"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
React.Component.prototype.helloWorld = function () {
    return 'Hello World';
};
class MyComponent extends React.Component {
    render() {
        return (React.createElement("div", null, this.helloWorld()));
    }
}
const updateStarship = (id, starship) => { };
updateStarship(1, {
    name: 'Explorer'
});
const starships = {
    Explorer1: {
        name: 'Explorer1',
        enableHyperjump: true
    },
    Explorer2: {
        name: 'Explorer2',
        enableHyperjump: true
    }
};
let JanesDrink;
function paintStarship(id, color) { }
paintStarship(1, 'blue');
