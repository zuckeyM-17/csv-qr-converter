import QRCode from "qrcode";

const JSZip = require("jszip");
const zip = new JSZip();

const img = zip.folder("images");

const time = new Date();
const now = time.getTime();

const reader = new FileReader();

reader.addEventListener("load", event => {
  const data = event.target.result.split("\n");
  const arr = [];
  data.forEach(row => {
    const r = row.split(",");
    if (r.length >= 2) {
      arr.push(
        QRCode.toDataURL(r[1].trim())
          .then(url => {
            console.log(r[0]);
            console.log(r[1]);
            img.file(r[0] + ".png", url.split(",")[1], { base64: true });
          })
          .catch(err => {
            console.error(err);
          })
      );
    }
  });
  Promise.all(arr).then(() => {
    zip.generateAsync({ type: "blob" }).then(content => {
      location.href = window.URL.createObjectURL(content);
    });
  });
});


const fileUploader = document.getElementById("csv-uploader");

fileUploader.addEventListener("change", event => {
  event.preventDefault();
  if (event.target.files[0].type === "text/csv") {
    reader.readAsText(event.target.files[0]);
  } else {
    alert("CSVファイルをアップロードしてください。");
  }
});

const label = document.getElementById("uploader-label");
label.addEventListener("dragenter", event => {
  event.preventDefault();
  event.stopPropagation();
  label.style.backgroundColor = '#CCCCCC';
  label.style.color = '#FFFFFF';
});

label.addEventListener("dragover", event => {
  event.preventDefault();
  event.stopPropagation();
});

label.addEventListener("dragleave", event => {
  event.preventDefault();
  event.stopPropagation();
  label.style.backgroundColor = '#FFFFFF';
  label.style.color = '#CCCCCC';
});

label.addEventListener("drop", event => {
  event.preventDefault();
  event.stopPropagation();
  if (event.dataTransfer.files[0].type === "text/csv") {
    reader.readAsText(event.dataTransfer.files[0]);
  } else {
    alert("CSVファイルをアップロードしてください。");
  }
  label.style.backgroundColor = '#FFFFFF';
  label.style.color = '#CCCCCC';
});

