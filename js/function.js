/**
 * Shorthand to coloring this table, im lazy af.
 * @param {Number} idNumber - The IDNumber in Integer.
 * @param {String} color - The color.
 * @param {Number} length - Length when you colorizing.
 * @param {"Vertical" | "Horizontal"} direction - Choose wisely
 */
function colorize(idNumber, color, length, direction) {
  return $(() => {
    for (let i = 0; i < length; i++) {
      $(`#${idNumber}`).css("background-color", color);
      if (direction === "Horizontal")
        idNumber++;
      else if (direction === "Vertical")
        idNumber += width;
    }
  })
}