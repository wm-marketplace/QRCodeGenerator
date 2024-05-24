/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

/*
 * This function will be invoked when any of this prefab's property is changed
 * @key: property name
 * @newVal: new value of the property
 * @oldVal: old value of the property
 */
Prefab.onPropertyChange = function(key, newVal, oldVal) {

    switch (key) {
        case "qrcodetext":
        case "width":
        case "height":
        case "darkcolor":
        case "lightcolor":
            Prefab.generateQRCode();
            break;

    }

};

Prefab.onReady = function() {
    Prefab.generateQRCode();
};

Prefab.generateQRCode = function(argument) {
    $('#generatedQrCode').empty();
    var qrcode = new QRCode("generatedQrCode", {
        text: Prefab.qrcodetext,
        width: parseInt(Prefab.width),
        height: parseInt(Prefab.height),
        colorDark: Prefab.darkcolor,
        colorLight: Prefab.lightcolor,
        correctLevel: QRCode.CorrectLevel.H
    });
}