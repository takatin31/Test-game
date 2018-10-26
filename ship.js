function Ship() {
	this.x = width/2;
	this.xdir = 0;
	this.die = false;
	this.y = height - 31;

	this.show = function()
	{
		fill(255);
		rectMode(CENTER);
		rect(this.x ,this.y ,20 ,60);
	}

	this.setDir = function(dir)
	{
		this.xdir = dir;
	}

	this.check = function(flower)
	{
		if (dist(this.x,this.y,flower.x,flower.y) <= flower.r)
			this.die = true;
	}

	this.move = function()
	{
		if ((this.x <= 0 && this.xdir == -1)|| (this.x >= width && this.xdir == 1))
		{
			this.xdir = 0;
		}
		this.x += this.xdir*5;
	}
}