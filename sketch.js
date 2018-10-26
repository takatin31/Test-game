var ship;
var flowers = [];
var drops = [];
var end = false;

function kteb()
{
	console.log("chekla");
	window.setTimeout("kteb();", 1000);
}

function setup()
{
	console.log();
	window.setTimeout("kteb();", 100);
	createCanvas(600 ,400);
	ship = new Ship();
	for (var i = 0 ;i < 6 ;i++)
	{
		flowers[i] = new Flower(i*80+80,50);
	}
}

function youDied()
{
	end = true;
	fill(255);
	rect(width/2-20,height/2-20,40,40);
}

function draw()
{
	background(51);
	if (!end)
	{
		ship.show();
		ship.move();
		var edge = false;

		for (var i = 0 ;i < flowers.length ;i++)
		{
			flowers[i].show();
			flowers[i].move();
			ship.check(flowers[i])
			if (ship.die)
			{
				youDied();
			}

			if (flowers[i].destroy)
			{
				flowers.splice(i, 1);
			}
			else
			{
				if (flowers[i].x > width || flowers[i].x < 0)
					edge = true;
			}

		}		

		if (edge == true)
		{
			for (var i = 0 ;i < flowers.length ;i++)
			{
				flowers[i].shiftDown();
			}	
		}

		for (var i = 0 ;i < drops.length ;i++)
		{
			drops[i].show();
			drops[i].move();
				for (var j = 0 ;j < flowers.length ;j++)
				{
					if (drops[i].hits(flowers[j]))
					{
						flowers[j].grow();
						flowers[j].check();
						drops[i].evaporate();
					}
				}
		}

		for (var i = drops.length-1 ;i >=0 ;i--)
		{
			if (drops[i].removed)
			{
				drops.splice(i, 1);
			}
		}

	}
	
}

function keyReleased()
{
	if (key != ' ')
		ship.setDir(0);
}

function keyPressed() {

	if (key ===' ')
	{
		var drop = new Drop(ship.x ,height-61);
		drops.push(drop);
	}

	if (keyCode === RIGHT_ARROW)
	{
		if (ship.x == width)
			ship.setDir(0);
		else
		{
			ship.setDir(1);
		}
		
	}
	else
	{
		if (keyCode === LEFT_ARROW)
		{
		if (ship.x == 0)
			ship.setDir(0);
		else
		{
			ship.setDir(-1);
		}
		}
	}
}