function loadPage() {
    /*
     * This function initialized DOM elements
     */
    //fill data format
    var data_format_select = document.getElementById("select-dataFormat");
    for (i in data_formats) {
        var newOption = document.createElement("option");
        newOption.text = data_formats[i];
        newOption.value = data_formats[i];
        data_format_select.appendChild(newOption);
    }

    //fill request types
    var request_type_select = document.getElementById("select-reqType");
    for (i in http_req_types) {
        var newOption = document.createElement("option");
        newOption.text = http_req_types[i];
        newOption.value = http_req_types[i];
        request_type_select.appendChild(newOption);
    }

    //fill API select
    //sort array alphabetically
    api_choices.sort();
    //target the drop down
    var api_select = document.getElementById("select-api");
    //fill the drop down with the array of JSON Objects
    for (i in api_choices) {
        var newOption = document.createElement("option");

        newOption.text = api_choices[i].name;
        newOption.value = i;
        api_select.appendChild(newOption);
    }
    //seed the default API with global variable
    curr_api = '';

    //add event listener for the select so that choices change based on api selected
    api_select.addEventListener("mouseup", function () {
        //get value from api selector
        var selected_api = document.getElementById('select-api').value;
        //determine if the page should reload
        if (selected_api != curr_api) {
            //update the current API
            curr_api = selected_api;
            updateScreenParameters(api_choices[selected_api]);
        }
    });
}

function updateScreenParameters(qbApiCall) {
     /*
     * This function updates screen with parameters when a different API call is selected
     */

    //get the data parameters section and clear it out
    var data_parameters_section = document.getElementById("dataParameters");
    data_parameters_section.innerHTML = "";

    //get the data from parameters and load to screen
    for (key in qbApiCall.parameters) {
        if (qbApiCall.parameters.hasOwnProperty(key)) {
            //extract the data we need
            var node_val = qbApiCall.parameters[key].val;
            var node_name = key;

            //create the input value
            var newInput = document.createElement("input");
            newInput.type = "text";
            newInput.name = node_name;
            newInput.value = node_val;
            newInput.id = node_name;
            newInput.style.marginTop = "2px";
            newInput.style.marginBotton = "2px";
            //set form requirements
            if (qbApiCall.parameters[key].req == true) {
                newInput.required = true;
            }

            //update the DOM
            if (newInput.required) {
                data_parameters_section.appendChild(document.createTextNode("*" + node_name + ": "));
            } else {
                data_parameters_section.appendChild(document.createTextNode(node_name + ": "));
            }
            data_parameters_section.appendChild(newInput);
            data_parameters_section.appendChild(document.createElement("br"));
        }
    }
}

function clearFeedback() {
    /*
    * This function clears out the feedback elements when the button is pressed again
    */
    document.getElementById("sent").innerHTML = '';
    document.getElementById("response").innerHTML = '';
}

function updateJSONConfig() {
    /*
    *This function updates the JSON config values with what is currently in the form
    *STEP 1
    */

    //validate api call has been selected 
    if (document.getElementById("select-api").value != '') {
        //validate form inputs
        //get the required ibputs
        var allreqinputs = true;
        var reqinputs = document.getElementById("api-form").querySelectorAll("[required]");

        reqinputs.forEach(function (element) {
            if (element.value == '') {
                allreqinputs = false;
            }
        })

        if (allreqinputs) {
            clearFeedback();
            //get the currently selected value
            selected_api = document.getElementById('select-api').value;
            qbApiCall = api_choices[selected_api];

            //update the JSON configurations
            for (key in qbApiCall.parameters) {
                if (qbApiCall.parameters.hasOwnProperty(key)) {
                    new_val = document.getElementById(key).value;
                    qbApiCall.parameters[key].val = new_val;
                }
            }

            //load up global variables
            realm = document.getElementById('realm').value;
            refId = document.getElementById('refId').value;
            type = document.getElementById('select-reqType').value;
            contentType = document.getElementById('contType').value;

            buildApiData(qbApiCall, realm, refId, type);
        } else {
            alert("Error: You are missing a required input!");
        }
    } else {
        alert("Error: Please select an API Call");
    }

}

function callAPIAjax (realm, refId, type, dataParams, qbApiCall, contentType ='application/xml') {
    /*
    *This function sends an AJAX API call and update the response so the user can see what was returned
    *STEP 3.b
    */
	$.ajax({
		url: realm + '/db/' + refId,
		type: type,
		contentType: contentType,
		headers:{"QUICKBASE-ACTION": qbApiCall.name},
		data: dataParams,
		success: function(xml){
			//if successful get the error text
			var errCode = $(xml).find('errcode').text();
            var xmlText = new XMLSerializer().serializeToString(xml);
            document.getElementById("response").appendChild(document.createTextNode(xmlText ));
		}
	});
}

function buildApiData(qbApiCall, realm, refId, type) {
    /*
    *This function formats the JSON into xml and prepares it for the api call
    *STEP 2
    */

	apiDataString = '<qdbapi>'
	//get the data from parameters

    for (key in qbApiCall.parameters) {
		if (qbApiCall.parameters.hasOwnProperty(key)){
			key_value = qbApiCall.parameters[key].val;
			if(key_value == '') {
				key_req = qbApiCall.parameters[key].req;
			} else {
				node_name = key;
				node_val = key_value;
				apiDataString += ('<' + node_name + '>' + key_value + '</' + node_name + '>');
			}
		}
	}
	
    apiDataString += '</qdbapi>'

    //update the DOM
    createApiDataFeedback(document.getElementById("sent"), realm, type, contentType, qbApiCall.name, apiDataString);

	callAPIAjax (realm, refId, type, apiDataString, qbApiCall, contentType);
}

function createApiDataFeedback(element, realm, type, contentType, name, apiDataString) {
    /*
    *This function update the DOM to inform user what was sent
    *STEP 3.a
    */
    element.appendChild(document.createTextNode('URL: ' + realm + '/db/' + refId));
    element.appendChild(document.createElement("br"));
    element.appendChild(document.createTextNode('TYPE: ' + type));
    element.appendChild(document.createElement("br"));
    element.appendChild(document.createTextNode('CONTENT: ' + contentType));
    element.appendChild(document.createElement("br"));
    element.appendChild(document.createTextNode('HEADERS: {QUICKBASE-ACTION: ' + name + '}'));
    element.appendChild(document.createElement("br"));
    element.appendChild(document.createTextNode('DATA: ' + apiDataString));
    element.appendChild(document.createElement("br"));
}