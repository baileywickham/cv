// phantomjs-2.1.1-linux-x86_64/bin/phantomjs toPDF.js 'http://localhost:4200' public/Lucas_Clemente.pdf A4
//                                                      URL                     Filename A4
//                                                      A[1]                    A[2]     A[3]
// Taken and slightly modified from
// http://phantomjs.org/screen-capture.html
// More code removed
"use strict";
var page = require('webpage').create(),
    system = require('system'),
    address, output, size;


address = system.args[1];
output = system.args[2];
page.viewportSize = { width: 600, height: 600 };
if (system.args.length > 3 && system.args[2].substr(-4) === ".pdf") {
    size = system.args[3].split('*');
    page.paperSize = { format: system.args[3], orientation: 'portrait', margin: '1cm' };
}
page.open(address, function (status) {
    if (status !== 'success') {
        console.log(status)
        console.log('Unable to load the address!');
        phantom.exit(1);
    } else {
        window.setTimeout(function () {
            page.render(output);
            phantom.exit();
        }, 200);
    }
});
}
