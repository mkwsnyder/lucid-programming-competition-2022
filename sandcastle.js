function processData(input) {
  let arrs = input.split('\n');

  const walls = arrs[1].split(' ');

  const toCheck = [-3, -2, -1, 1, 2, 3];

  for (let i = 0; i < walls.length; i++) {
    for (const j of toCheck) {
      let target = 0;

      if (i + j < 0 || i + j >= walls.length) target = 0;
      else target = walls[i + j];

      // console.log(walls[i], target, j);

      if (Math.abs(walls[i] - target) > 4) {
        console.log('False');
        return;
      }
    }
  }

  console.log('True');
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
