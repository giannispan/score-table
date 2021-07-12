function pad(n) {
  return n < 10 ? `0${n}` : n;
}

/**
 * The represenation of the redis key
 * @return {String} The key for redis db
 */

const redisKey = function redisKey() {
  const year = new Date().getFullYear();
  const month = pad(new Date().getMonth() + 1);
  const day = pad(new Date().getDate());
  const hours = pad(new Date().getHours());

  return `lb_${year}${month}${day}-${hours}`;
};

/**
 * Returns an array splitted in smaller arrays
 * from current time
 * @param {Array} arr - The initial array
 * @param {Number} size - The size of the chunks
 * @return {Array} The final array in chunks of arrays
 */

const splitArrayInArrays = function splitArrayInArrays(arr, size) {
  const myArray = [];

  for (let i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i + size));
  }
  return myArray;
};

/**
 * Returns a string indicating the remaining minutes until next hour
 * from current time
 * @param {Date} startTime - The current time
 * @return {String}
 */

function getMinutesDiff(startTime) {
  return `${60 - startTime.getMinutes()} mins`;
}

export { redisKey, splitArrayInArrays, getMinutesDiff };
