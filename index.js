function superbowlWin(array) {
  //console.log(array);
  //array.find((obj) => obj.result === "W");
  //console.log(array.find((obj) => obj.result === "W"));
  let foundRecord = array.find((obj) => obj.result === "W");
  console.log(typeof foundRecord);
  console.log(typeof {});
  if (typeof foundRecord === "undefined") {
    return foundRecord;
  } else if (typeof foundRecord === typeof {}) {
    return foundRecord.year;
  }
}
