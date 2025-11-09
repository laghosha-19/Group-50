//შექმენით ქვემოთ მოცემული ობიექტის მსგავსი ობიექტი თქვენს სასურველ მანქანაზე და დაამატეთ ფუნქცია CarFullInfo, რომლის გამოძაღებაზეც გამოიტანს მთლიან ინფორმაციას მანქანაზე(აუცილებლად გამოიყენეთ string formatting

const carBrand = {
    brand : "Toyota",
    Model : "Aqua",
    Year : 2019,
    color : "Silver",
    isElectric : true,
    fullCarInfo(){
        return `Car name is ${this.brand} model is ${this.Model} this car's color is ${this.color} it is year ${this.Year} it is electric ${isElectric} `
    }
}
console.log(carBrand);
console.log(carBrand.fullCarInfo);

