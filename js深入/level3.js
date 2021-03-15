function Animal() {
    this.species = "动物";
}

function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat1 = new Cat("hh","11");
console.log(cat1.species);