$(() => {
  // make table
  for (let i = 0; i < width; i++) {
    content += "<tr>";
    for (let j = 0; j < width; j++) {      
      content += `<td id="${counter}"></td>`;
      counter++;
    }
    content += "</tr>";
  }

  $("table").append(content);
});