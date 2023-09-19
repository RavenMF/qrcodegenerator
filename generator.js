document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("text-input");
    const generateButton = document.getElementById("generate-button");
    const qrcodeContainer = document.getElementById("qrcode");
    const downloadButton = document.getElementById("download-button");
    
    generateButton.addEventListener("click", function () {
        const text = textInput.value;
        if (text) {
            qrcodeContainer.innerHTML = "";
            const qrcode = new QRCode(qrcodeContainer, text);
            downloadButton.style.display = "block";
        }
    });

    downloadButton.addEventListener("click", function () {
        const qrCodeDataURL = qrcodeContainer.querySelector("canvas").toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = qrCodeDataURL;
        downloadLink.download = "qrcode.png";
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });

    // Hide the download button initially
    downloadButton.style.display = "none";
});
