const btn = document.getElementById("btn");
const inp = document.getElementById("inp");
const txt = inp.value.slice(inp.value.lastIndexOf("=")) + ".jpg";
const url = txt.slice(1, 11);
const img = document.getElementById("img");
const dwn = document.getElementById("dwn");

btn.addEventListener("click", () => {
  if (inp.value == "") {
    console.log("Input boş qoyula bilməz.");
  } else {
    if (inp.value.slice(13, 16) == ".be") {
      img.src =
        "https://img.youtube.com/vi/" +
        inp.value.slice(17, 28) +
        "/maxresdefault.jpg";
      dwn.href =
        "https://img.youtube.com/vi/" +
        inp.value.slice(17, 28) +
        "/maxresdefault.jpg";
    } else {
      img.src =
        "https://img.youtube.com/vi/" +
        inp.value.slice(32, 43) +
        "/maxresdefault.jpg";
      dwn.href =
        "https://img.youtube.com/vi/" +
        inp.value.slice(32, 43) +
        "/maxresdefault.jpg";
    }
  }
});
