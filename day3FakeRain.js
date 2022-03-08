function setup() {
  createCanvas(400, 400);
  let drop = []
}

function draw() {
  background(220);
  for(let i = 0; i<1001;i++){
    rect(Math.floor(Math.random()*400),Math.floor(Math.random()*400),2,15)
  }
}

//BerraFFS </3
