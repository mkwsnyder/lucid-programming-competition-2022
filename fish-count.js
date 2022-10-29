function processData(input) {
  /**
   * halibut:# h
   * mackerel:# k
   * salmon:# o
   * snapper:# p / 2
   * squid:# q
   * tuna:# ? t - h
   */

  let h = input.match(new RegExp('h', 'g'))?.length ?? 0;
  let k = input.match(new RegExp('k', 'g'))?.length ?? 0;
  let o = input.match(new RegExp('o', 'g'))?.length ?? 0;
  let p = input.match(new RegExp('p', 'g'))?.length ?? 0;
  let q = input.match(new RegExp('q', 'g'))?.length ?? 0;
  let t = input.match(new RegExp('t', 'g'))?.length ?? 0;

  console.log(`halibut:${h}
mackerel:${k}
salmon:${o}
snapper:${p / 2}
squid:${q}
tuna:${t - h}`);
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
