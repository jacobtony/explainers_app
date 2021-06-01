console.log("JS enabled");
fetch('file.txt')
  .then(response => response.text())
  .then(text => console.log(text))