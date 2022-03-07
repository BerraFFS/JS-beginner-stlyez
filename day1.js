function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (let i = 0; i < 41; i++){
    for (let j = 0;j<41;j++){
      if (Math.floor(Math.random()*2)===1){
        fill(color('blue'));
        rect(20*i,20*j,20,20)
      }
      else{
        fill(color('red'));
        rect(20*i,20*j,20,20)
      }
      
    }
  }
}

//BerraFFS </3
