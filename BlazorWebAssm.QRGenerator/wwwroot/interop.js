//window.generateQrCodeImage = (bitmap) => {
//    return new Promise(resolve => {
//        const canvas = document.createElement('canvas');
//        canvas.width = bitmap.width;
//        canvas.height = bitmap.height;
//        const context = canvas.getContext('2d');
//        context.drawImage(bitmap, 0, 0);
//        resolve(canvas.toDataURL());
//    });
//};


window.generateQRCode = (text, size) => {
    const qr = new QRious({
        value: text,
        size: size
    });
    return qr.toDataURL();
};
