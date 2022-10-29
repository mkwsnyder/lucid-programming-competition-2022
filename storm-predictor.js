function processData(input) {
  const arrs = input.split('\n');

  const clouds = JSON.parse(arrs[0].split(': ')[1]);
  const wind = JSON.parse(arrs[1].split(': ')[1]);
  const air = JSON.parse(arrs[2].split(': ')[1]);
  const animals = JSON.parse(arrs[3].split(': ')[1]);

  // console.log(clouds, wind, air, animals);
  let count = 0;
  if (clouds) count += 1;
  if (wind) count += 1;
  if (air) count += 1;
  if (animals) count += 1;

  if (count < 3) console.log('Go fishing!');
  else console.log('Wait for the storm to pass.');
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
