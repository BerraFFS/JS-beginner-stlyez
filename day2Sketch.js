//Very much unfinished!
function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  let inp = createInput('');
  inp.position(0, 0);
  inp.size(100);
  inp.input(myInputEvent);
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function keyPressed() {
  if (keyCode === ENTER) {
    let i = myInputEvent.value();
    console.log('you are typing: ', i);
  } 
}

//BerraFFS </3
