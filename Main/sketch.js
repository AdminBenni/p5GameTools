var object1 = new GameObject2(0, 0, 50, 50, [156, 1], "filled", true);
var object2 = new GameObject2(5, 5, 50, 50, [255, 1], "line", true);
function setup() {
    background(0);
    createCanvas(1000, 800);
    object1.OnCollide = function(other){
        console.log("Collision1");
    }
    object2.OnCollide = function(other){
        console.log("Collision2");
    }
    update();
    console.log(count(info.colliderPositions, info.colliderPositions[50]));
    //console.log(object1.collider.positions[object1.collider.positions.length - 5]);
    start();
}

function draw() {
    //update();
    render();
}