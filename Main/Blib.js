var WolrdSpace;

function setup(){
    WorldSpace = new Array(width);
    for(var i = 0; i < WorldSpace.length; i++){
        WorldSpace[i] = new Array(height);
    }
    for(var i = 0; i< WorldSpace.length; i++){
        for(var j = 0; j < WorldSpace[i].length; j++){
            WorldSpace[i][j] = "empty";
        }
    }
}

function draw(){
    
}

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
}