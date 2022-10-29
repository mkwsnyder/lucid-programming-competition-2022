function processData(input) {
  let ab = 0;
  let c = 0;
  let count = 0;

  const newIn = input.split('\n')[1];

  for (let i = 0; i < newIn.length; i++) {
    if (newIn[i] === 'A') {
      if (i + 1 <= newIn.length && newIn[i + 1] === 'B') {
        ab++;
        count += 4;
        i++;
      } else {
        count += 1;
      }
    } else if (newIn[i] === 'B') count += 2;
    else if (newIn[i] === 'C') c += 1;
  }

  const toSub = ab ** 2 * c;
  count -= toSub;

  console.log(count);
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
