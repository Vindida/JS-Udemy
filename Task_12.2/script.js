class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv() {
		let newDiv = document.createElement('div');
		document.body.appendChild(newDiv);
		let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		elem.style.cssText = param;
	}
}

const item = new Options(400, 800, "green", 16, "center");
const itemTwo = new Options(300, 300, "red", 16, "center");
item.createDiv();
itemTwo.createDiv();