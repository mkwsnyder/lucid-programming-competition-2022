function processData(input) {
  let arrs = input.split('\n');

  arrs[1] = arrs[1].replace('(', '');
  arrs[1] = arrs[1].replace(')', '');

  // console.log(arrs[1]);

  const x = parseInt(arrs[1].split(',')[0]);
  const y = parseInt(arrs[1].split(',')[1]);

  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;

  for (let i = 2; i < arrs.length; i++) {
    const orders = arrs[i].split(' ');

    if (orders[1] === 'north') north += parseInt(orders[2]);
    else if (orders[1] === 'south') south += parseInt(orders[2]);
    else if (orders[1] === 'east') east += parseInt(orders[2]);
    else if (orders[1] === 'west') west += parseInt(orders[2]);
  }

  const v = north - south;
  const h = east - west;

  let paceSize = 0;
  if (v !== 0) paceSize = y / v;
  else paceSize = x / h;

  // console.log(x, y);
  // console.log(north, south, east, west);
  // console.log(v, h);

  console.log(paceSize);
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
