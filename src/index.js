module.exports = function reverse(arr) {
    if (arr < 0) { arr *= (-1) }
    return arr.toString().split('').reverse().join('');
}
