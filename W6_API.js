class Snake {
	
	constructor(){
		this.lng = 0;
		this.body = [];
		this.body[0] = createVector(floor(w/2), floor(h/2));
		this.xdir = 0;
		this.ydir = 0;
	}

	setDir(x, y){
		this.xdir = x;
		this.ydir = y;
	}

	update(){
		let head = this.body[this.body.length-1].copy();
		this.body.shift();
		head.x += this.xdir;
		head.y += this.ydir;
		this.body.push(head);
		
		//modification: snake body to remain in the frame
		// head.x = constrain(head.x, 0, width);
		// head.y = constrain(head.y, 0, height);
	}

	grow(){
		let head = this.body[this.body.length-1].copy();
		this.lng++;
		this.body.push(head);
	}

	eat(pos){
		let x = this.body[this.body.length-1].x;
		let y = this.body[this.body.length-1].y;
		if (x == pos.x && y == pos.y){
			this.grow();
			return true;
		}
		return false;
	}

	show(){
		for(let i = 0; i < this.body.length; i++){
		noStroke();
		//modification: the color gradually changes
		let from = color(255, 67, 67);
		let to = color(253, 254, 2);
		let interA = lerpColor(from, to, this.body.length/50);
		fill(interA);
		rect(this.body[i].x, this.body[i].y, 1, 1);
		}
	}

	//modification: added a function for a start message
	gameStart(a){
		let txt = 'Press Enter';
		textSize(25);
		fill(255, a);
		textAlign(CENTER);
		text(txt, floor(width / 2), floor(height / 2));
	}
}
