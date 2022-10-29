function processData(input) {
  let arrs = input.split('\n');

  let woge = arrs[1].split(' ').map((e) => parseInt(e));

  for (let i = 2; i < arrs.length; i++) {
    let first = parseInt(arrs[i].split(' ')[0]) - 1;
    let second = parseInt(arrs[i].split(' ')[1]) - 1;

    // if (first === second) {
    //   console.log(woge[first] ^ 0);
    //   continue;
    // }
    // console.log(first, second);

    let running = 0;

    for (let j = first; j <= second; j++) {
      running = running ^ woge[j];
      // console.log('r', running, woge[j]);
    }
    console.log(running);
  }
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
