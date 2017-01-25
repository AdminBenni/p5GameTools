function preload(){
    gImg = loadImage("basketball-png-1.png");
    backImg = loadImage("Target.jpg");
}

var hello;
function setup() {
    createCanvas(1000, 1000);
    background(90, 90, 130);
    FSbutton = createButton('Fullscreen');
    FSbutton.position(0, 0);
    FSbutton.mousePressed(FS);
    var object = new Bobject2(1,1,1,1);
    print(object.transform.info.positions.length)
    object.transform.set(44,44,44,44);
    print(object.transform.info.positions.length)
    /*print(object.transform.position.x);
    print(object.transform.position.y);
    print(object.transform.scale.x);
    print(object.transform.scale.y);
    print(object.transform.info.locations[object.transform.info.locations.length - 1]);
    object.transform.update(22,22,22,22);
    print(object.transform.position.x);
    print(object.transform.position.y);
    print(object.transform.scale.x);
    print(object.transform.scale.y);
    print(object.transform.info.locations[object.transform.info.locations.length - 1]);
    */
}

function FS() {
    var fs = fullscreen();
    fullscreen(!fs);
}

function draw() {
    
}

/*function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(90, 90, 100);
}*/


