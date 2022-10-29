function processData(input) {
  const arrs = input.split('\n');

  const tools = arrs[0].split(', ');
  const toolCounts = arrs[1].split(', ');

  let t = {};
  for (let i in tools) {
    t[tools[i]] = parseInt(toolCounts[i]);
  }

  // console.log(t);
  // console.log(arrs);

  let fin = [];

  for (let i = 3; i < arrs.length; i += 3) {
    if (i > arrs.length - 2) break;
    // console.log('i', i);
    // const tools = arrs[i].split(', ');
    const jobTools = arrs[i + 1].split(', ');
    const jobToolsCount = arrs[i + 2].split(', ');

    let passing = true;

    for (let j in jobTools) {
      if (
        t[jobTools[j]] === undefined ||
        t[jobTools[j]] < parseInt(jobToolsCount[j])
      ) {
        passing = false;
        break;
      }
    }

    if (passing) {
      fin.push(arrs[i]);
    }
  }

  fin = fin.sort();

  let woge = '';

  for (let e of fin) {
    woge += e + '\n';
  }

  console.log(woge);
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
