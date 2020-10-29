class newHill {
	constructor() {
		let s;
		this.x1 = 0;
		this.y1 = horizon;
	}

//two forms of island that can be reshaped by adjusting shared nodes
//variables xH and xW are for positioning
	//Two planes
	type1(xH, xW, p1, p2, p3, s, col) {
		push();
		let x = this.x1 + xH;
		let y = this.y1 + xW;
		translate(0, 0);
		scale(s);
		stroke(col);
		strokeJoin(ROUND);
		fill(0, 175);
		beginShape();
		vertex(x, y);
		vertex(x + p2, y + p1);
		vertex(x + p3, y - p2);
		vertex(x + 12, y - 33);
		endShape(CLOSE);
		beginShape();
		vertex(x + p2, y + p1);
		vertex(x + p3, y - p2);
		vertex(x + 120, y - 12);
		vertex(x + 147, y);
		endShape(CLOSE);
		pop();
	}

	//Five planes
	type2(xH, xW, p1, p2, p3, s, col) {
		push();
		let x = this.x1 + xH;
		let y = this.y1 + xW;
		translate(0, 0);
		scale(s);
		stroke(col);
		strokeJoin(ROUND);
		fill(0, 175);
		beginShape();
		vertex(x, y);
		vertex(x + 30, y + 12);
		vertex(x + 39, y - p1);
		endShape(CLOSE);
		beginShape();
		vertex(x + 39, y - p1);
		vertex(x + 30, y + 12);
		vertex(x + 66, y - 18);
		vertex(x + 60, y - 30);
		endShape(CLOSE);
		beginShape();
		vertex(x + 30, y + 12);
		vertex(x + 120, y + 18);
		vertex(x + 66, y - 18);
		endShape(CLOSE);
		beginShape();
		vertex(x + 66, y - 18);
		vertex(x + 60, y - 30);
		vertex(x + 99, y - p2);
		vertex(x + 120, y + 18);
		endShape(CLOSE);
		beginShape();
		vertex(x + 99, y - p2);
		vertex(x + 186, y - 12);
		vertex(x + 240, y + p3);
		vertex(x + 120, y + 18);
		endShape(CLOSE);
		pop();
	}

	//function to apply the movement all at once
	move(a, b){
		this.x1 = this.x1 + a;
		this.y1 = this.y1 + b;
	}
}