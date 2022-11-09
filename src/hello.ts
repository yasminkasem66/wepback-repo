
function age(constructor:Function){
    console.log(`in decorator,${constructor}`);
    constructor.prototype.age = 20;
}

@age

class Greatings {
    name: string;
    msg: string;
    constructor(name: string, msg: string) {
        this.name = name
        this.msg = msg
    }

    sayHello(){
        console.log(`${this.name},${this.msg}, your age is: ${this.age}`);
        
    }

}

console.log(new Greatings("jasmin","Hello").sayHello());