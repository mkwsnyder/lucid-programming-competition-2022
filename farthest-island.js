function processData(input) {
  let arrs = input.split('\n');

  let money = parseInt(arrs[0].split(' ')[0]);
  let coupons = parseInt(arrs[0].split(' ')[1]);

  const islands = arrs[2].split(' ').map((e) => parseInt(e));

  let bestCoupons = [];
  let lowestCouponIndex = 0; // index in best coupons
  let lowestCouponVal = Infinity;

  for (let i = 0; i < islands.length; i++) {
    // console.log(
    //   i,
    //   islands[i],
    //   money,
    //   'lowestCouponIndex',
    //   lowestCouponIndex,
    //   'lowestCouponVal',
    //   lowestCouponVal,
    //   bestCoupons,
    // );

    if (bestCoupons.length < coupons) {
      bestCoupons.push(i);

      if (lowestCouponVal > islands[i]) {
        lowestCouponVal = islands[i];
        lowestCouponIndex = bestCoupons.length - 1;
      }

      continue;
    }

    if (islands[i] > money && lowestCouponVal > money) {
      console.log(i); // we are checking i + 1 but failing on it, so i is the last one that would've worked
      return;
    }

    if (lowestCouponVal < islands[i]) {
      money -= lowestCouponVal;
      bestCoupons.splice(lowestCouponIndex, 1);
      bestCoupons.push(i);

      let tempLowestIndex = 0;
      let tempLowestVal = Infinity;

      for (let [i, coupon] of bestCoupons.entries()) {
        if (islands[coupon] < tempLowestVal) {
          tempLowestVal = islands[coupon];
          tempLowestIndex = i;
        }
      }

      lowestCouponVal = tempLowestVal;
      lowestCouponIndex = tempLowestIndex;
    } else {
      money -= islands[i];
    }
  }
  console.log(islands.length);
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
