function ObjectInfo(){
    this.populus = 0;
    this.objects = [];
    this.colliderPositions = [];
}

count = function(arr, obj){
    var inst = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == obj) {
            inst++;
        }
    }
    return inst;
}

contains = function(arr, obj) {
  return arr.indexOf(obj) > -1;
}

var info = new ObjectInfo();

function start(){
    
}

function update(){
    var called = [];
    var oCalled = [];
    for(var i = 0; i < info.colliderPositions.length; i++){
        if(count(info.colliderPositions, info.colliderPositions[i]) > 1 && !contains(called, info.colliderPositions[i])){
            called.push(info.colliderPositions[i]);
            for(var j = 0; j < info.objects.length; j++){
                if(contains(info.objects[j]) && !contains(oCalled, info.objects[j])){
                    oCalled.push(info.objects[j]);
                }
            }
            for(var j = 0; j < oCalled.length; j++){
                for(var k = j + 1; k < oCalled.length; k++){
                    oCalled[k].OnCollide(oCalled(j));
                }
            }
        }
    }
}

function render(){
    for(var i = 0; i < info.objects.length; i++){
        if(info.objects[i].renderInfo.drawtype != "none")
        {
            if(info.objects[i].renderInfo.drawtype == "filled")
            {
                fill(info.objects[i].renderInfo.color);
                rect(info.objects[i].transform.x, info.objects[i].transform.y, info.objects[i].transform.width, info.objects[i].transform.height);
            }
            else if(info.objects[i].renderInfo.drawtype == "line")
            {
                strokeWeight(info.objects[i].renderInfo.weight);
                stroke(info.objects[i].renderInfo.color);
                rect(info.objects[i].transform.x, info.objects[i].transform.y, info.objects[i].transform.width, info.objects[i].transform.height);
            }
        }
    }
}

function GameObject2(X, Y, WIDTH, HEIGHT, COLORINFO, DRAWTYPE, COLLIDER){
    this.transform = {
        x: X,
        y: Y,
        width: WIDTH,
        height: HEIGHT,
        center:{
            x: Math.floor(WIDTH / 2) + ((WIDTH % 2) / 2),
            y: Math.floor(HEIGHT / 2) + ((HEIGHT % 2) / 2)
        }
    }
    this.renderInfo = {
        drawtype: DRAWTYPE,
        color: COLORINFO[0],
        weight: COLORINFO[1]
    }
    this.collidable = COLLIDER;
    this.collider;
    if(COLLIDER){
        this.collider = {
            width: WIDTH,
            height: HEIGHT,
            offset: {
                x: X,
                y: Y
            },
            positions: []
        }
        for(var i = this.collider.offset.x; i < this.collider.width + 1; i++){
            for(var j = this.collider.offset.y; j < this.collider.height + 1; j++){
                this.collider.positions.push([i, j]);
                info.colliderPositions.push([i, j]);
            }
        }
    }
    function OnCollide(other){
        
    }
    info.populus += 1;
    info.objects.push(this);
}

/*
function Bobject2(X, Y, WIDTH, HEIGHT, COLLIDER){
    this.transform = {
        position: createVector(X, Y),
        scale: createVector(WIDTH, HEIGHT),
        info: {
            positions: [this.position],
            scales: [this.scale]
        },
        updateInfo: function(){
            this.info.positions.push([this.position]);
            this.info.scales.push(this.scale);
        },
        set : function (X, Y, WIDTH, HEIGHT)
        {
            this.position.x = X;
            this.position.y = Y;
            this.scale.x = WIDTH;
            this.scale.y = HEIGHT;
            this.updateInfo();
        }
    };
    this.collider = {
        
    }
}*/