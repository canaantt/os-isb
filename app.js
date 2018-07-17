const request = require('request');

const tcga_url = 'https://api-dot-isb-cgc.appspot.com/_ah/api/isb_cgc_tcga_api/v3/';
// const target_url = 'https://api-dot-isb-cgc.appspot.com/_ah/api/isb_cgc_target_api/v3/target/cases/TARGET-20-PABLDZ';
// const ccle_url = 'https://api-dot-isb-cgc.appspot.com/_ah/api/isb_cgc_ccle_api/v3/ccle/cases/FU-OV-1';

var handleResponse = (err, res, body) => {
    if (err) throw (err);
    console.log(body);
}

var get_case = function(case_barcode) {
    const options = {
        url : tcga_url + 'tcga/cases/' + case_barcode
    }
 
    request(options, handleResponse);
}

get_case('TCGA-02-0001');


var get_case_annotation = function(case_barcode){
    const options = {
        url : 'https://api-dot-isb-cgc.appspot.com/_ah/api/isb_cgc_tcga_api/v3/cases/'+ case_barcode + '/annotations'
               
    }
    request(options, handleResponse);
}

get_case_annotation('TCGA-02-0001');

var get_users = function() {
    const options = {
        url: tcga_url + 'tcga/users'
    }
    request(options, handleResponse);
}

var get_sample = function(sample_barcode) {
    const options = {
        url: tcga_url + 'tcga/samples/' + sample_barcode
    }
    request(options, handleResponse);
}

get_sample('TCGA-02-0001-01C');

var query = {
    "Common": {
        "disease_code": ["GBM", "LGG"]
    }
}
var build_cohort = function(query, cohort_name) {
    const options = {
        url: tcga_url + 'tcga/cohorts/create?name=' + cohort_name + '&fields=case_count%2Cfilters%2Cid%2Clast_date_saved%2Cname%2Csample_count'
    }
    request.post(options, handleResponse);
}
build_cohort(query, 'jenny_test');