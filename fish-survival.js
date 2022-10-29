function processData(input) {
  const arrs = input.split('\n');

  let fish = parseInt(arrs[0].split(' ')[0]);

  // console.log(arrs);

  for (let i = 1; i < arrs.length; i++) {
    if (arrs[i] === '') break;
    const event = arrs[i].split(' ');

    if (event[0] === 'G') fish += parseInt(event[1]);
    else fish -= fish % parseInt(event[1]);

    // console.log(fish);
  }

  console.log(fish);
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
