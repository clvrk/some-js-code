// ALSO USING THIS TO MAKE LIFE EASIER

function Person(name, age, gender, height, personality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.personality = personality;
    this.display = function() {
        console.log(this);
    }
}
let person1 = new Person('Heru', 14, 'Male', `5'6`, 'Ambivert')
person1.display;
