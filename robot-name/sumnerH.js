"use strict";

var pick = list => list[Math.floor(Math.random()*list.length)];
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var digits = "0123456789";
var n = (f, a, n) => { var rv = ""; for(let i=0; i<n; i++) rv+=f(a); return rv }
var name = () => n(pick, letters, 2) + n(pick, digits, 3);
var used = new Set([undefined]);

module.exports = class Robot {
    constructor() {
        this.reset();
    }
    reset() {
        while(used.has(this.name)) this.name = name();
        used.add(this.name);
    }
}
