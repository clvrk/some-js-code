class Computer {
    constructor(CPU, color, fans, brand) {
        this._CPU = CPU;
        this.color = color;
        this._fans = fans;
        this.brand = brand;
    }
    displayInfo() {
        console.log(`CPU: ${this.CPU}\nColor: ${this.color}\nFans: ${this.fans}\nBrand: ${this.brand}`)
    
    }
    get CPU(){
        return this._CPU
    }
}

let myComputer = new Computer(`i3`, 'Black', 1, 'Acer');
// myComputer.displayInfo(); // logging values rather than objects
console.log(myComputer._CPU)


