"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World");
function TEST(github) {
    github.getUser("ewsgit").then(user => {
        console.log(user.getEmail());
    });
}
exports.default = TEST;
