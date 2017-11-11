var iPhone6S = new Phone("Apple", 2250, "silver");
var galaxyS6 = new Phone("Samsung", 1980, "gray");
var onePlus  = new Phone("One Plus One", 1749, "black");

function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

iPhone6S.printInfo();
galaxyS6.printInfo();
onePlus.printInfo();