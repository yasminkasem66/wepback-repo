var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function age(constructor) {
    console.log("in decorator,".concat(constructor));
    constructor.prototype.age = 20;
}
var Greatings = /** @class */ (function () {
    function Greatings(name, msg) {
        this.name = name;
        this.msg = msg;
    }
    Greatings.prototype.sayHello = function () {
        console.log("".concat(this.name, ",").concat(this.msg, ", your age is: ").concat(this.age));
    };
    Greatings = __decorate([
        age
    ], Greatings);
    return Greatings;
}());
console.log(new Greatings("jasmin", "Hello").sayHello());
