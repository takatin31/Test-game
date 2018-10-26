function Flower(x ,y)
{
	this.x = x;
	this.y = y;
	this.xdir = 1;
	this.r = 30;
	this.destroy = false;  

	this.show = function()
	{
		fill(255 ,0 ,200 ,150);
		ellipse(this.x ,this.y ,this.r*2 ,this.r*2);
	}

	this.shiftDown = function()
	{
		this.xdir = -this.xdir;
		this.y += this.r;
	}

	this.check = function()
	{
		if (this.r >= 45)
		{
			this.destroy = true;
		}
	}

	this.move = function()
	{
		this.x += this.xdir;
	}

	this.grow = function()
	{
		this.r += 2;
	}
}