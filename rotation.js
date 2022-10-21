const rotated = document.getElementById('rotated');

// current rotation
curr_rotation = 0;

// rotation to perform
const angle = 30;

function rotateClockwise() {
  curr_rotation = (curr_rotation + angle) % 360;
  rotated.style.transform = `rotate(${curr_rotation}deg)`;
}

const antiangle = -angle;

function rotateCounterclockwise() {
    curr_rotation = (curr_rotation + antiangle) % 360;
    rotated.style.transform = `rotate(${curr_rotation}deg)`;
}

