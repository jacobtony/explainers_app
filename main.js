console.log("JS enabled");
fetch('file.txt')
  .then(response => response.text())
  .then(text => {
      document.getElementById("explainer").innerHTML = text;
  })