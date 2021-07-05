var qrcode = new QRCode("qrcode", {
    text: "https://www.sap.com/index.html",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});