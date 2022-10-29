function processData(input) {
  let vals = input.split(' ');

  let current = 0;

  for (let [i, e] of vals.entries()) {
    e = parseInt(e);

    // console.log(current, e, vals.length - 1 - i);

    if (e > current) current = e;
    if (current >= vals.length - 1 - i) {
      console.log(1);
      return;
    }
    if (current <= 0) {
      console.log(0);
      return;
    }

    current--;
  }
  // if (current > 0) {
  //   console.log(1);
  //   return;
  // }
  console.log(0);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
  _input += input;
});

process.stdin.on('end', function () {
  processData(_input);
});
