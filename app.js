const request = require('request');

const tcga_url = 'https://api-dot-isb-cgc.appspot.com/_ah/api/isb_cgc_tcga_api/v3/tcga/';
// const target_url = 'https://api-dot-isb-cgc.appspot.com/_ah/api/isb_cgc_target_api/v3/target/cases/TARGET-20-PABLDZ';
// const ccle_url = 'https://api-dot-isb-cgc.appspot.com/_ah/api/isb_cgc_ccle_api/v3/ccle/cases/FU-OV-1';

var handleResponse = (err, res, body) => {
    if (err) throw (err);
    console.log(body);
}

var sending_cohort = function(id) {
    const options = {
        url : tcga_url + 'cases/' + id
    }

    request(options, handleResponse);
}

sending_cohort('TCGA-02-0001');
