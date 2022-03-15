//1
// так кайфанул от задач, это что-то с чем то

function test1(dist, speed, reverse) {
  let road = 0;
  let day = 0;

  while (road < dist) {
    if (road < dist) {
      road += speed;
      day += 0.5;
      if (road < dist) {
        road -= reverse;
        day += 0.5;
      }
    }
  }
  // return Math.round(day);
  return day;
}
console.log(test(100, 50, 30));

function test2(dist, speed, reverse) {
  const time = Math.ceil(dist / speed);
  const revDist = time * reverse;

  return Math.ceil(revDist / speed) + time;
}
console.log(test2(100, 50, 30));

//2
let handshake = 0;
for (let men = 1; men < 10; men++) {
  handshake = handshake + men;
}
console.log(handshake);
//3
let strings = "кошка,собака,лошадь,корова,кошка";
let newArrOfString = strings.split(",");

let newArr1 = [...new Set(newArrOfString)];
console.log(newArr1.join());

let newArr2 = newArrOfString.filter((e, i) => newArrOfString.indexOf(e) === i);
console.log(newArr2.join());
