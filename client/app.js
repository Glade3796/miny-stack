console.log("test");

async function getMessage() {
  const response = await fetch("https://miny-stac.onrender.com/message");

  const json = await response.json();

  const p = document.getElementById("message");
  p.textContent = json.message;
}
getMessage();
