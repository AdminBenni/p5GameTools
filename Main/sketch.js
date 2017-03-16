/*function setup() {
    createCanvas(1000, 1000);
    background(90, 90, 130);
    /*FSbutton = createButton('Fullscreen');
    FSbutton.position(0, 0);
    FSbutton.mousePressed(FS);*/
//}
var img;
function preload(){
    img = loadImage("bluescreen.png");
}

/*function FS() {
    var fs = fullscreen();
    fullscreen(!fs);
}*/
/*
function draw() {
    
}

*/
function setup() {
    background(0);
    createCanvas(1000, 800);
}
x = 0;
y = 0;
xdir = 1;
ydir = 1;
xw = 50;
yw = 50;
fr = 5;
function draw() {
    for(var i = 0; i < fr; i++)
    {
        clear();
        background(0);
        fill(random(255), random(255), random(255));
        Image(img, x, y, xw, yw);
        if(x + xw >= width)
        {
            xdir = -1;
        }
        else if(x <= 0)
        {
            xdir = 1;
        }
        if(y + yw >= height)
        {
            ydir = -1;
        }
        else if(y <= 0)
        {
            ydir = 1;
        }
        x += xdir;
        y += ydir;
    }
}