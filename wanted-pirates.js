function processData(input) {
  let arrs = input.split('\n');

  let previousPirates = arrs[1].split(',');

  for (let i = 2; i < arrs.length; i++) {
    // console.log('previousPirates', previousPirates);

    const currentPirates = arrs[i].split(',');
    // console.log('currentPirates', currentPirates);

    // let toKeep = [];
    //
    // for (let j = 0; j < currentPirates.length; j++) {
    //   for (let k = 0; k < previousPirates.length; k++) {
    //     // console.log(currentPirates[j], previousPirates[k]);
    //     if (currentPirates[j] === previousPirates[k]) {
    //       toKeep.push(k);
    //       break;
    //     }
    //   }
    // }

    // ===========

    let toKeep = [];

    for (let j = 0; j < previousPirates.length; j++) {
      if (currentPirates.includes(previousPirates[j])) toKeep.push(j);
    }

    let newPirates = [];
    for (let e of toKeep) {
      newPirates.push(previousPirates[e]);
    }
    previousPirates = newPirates;

    // old

    // for (let j = previousPirates.length - 1; j >= 0; j--) {
    //   console.log('checking pirate: ', previousPirates[j]);
    //
    //   if (!currentPirates.includes(previousPirates[j])) {
    //     console.log('deleting pirate: ', previousPirates[j]);
    //     previousPirates.splice(j, 1);
    //   }
    // }
  }

  for (const pirate of previousPirates.sort()) {
    console.log(pirate);
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
