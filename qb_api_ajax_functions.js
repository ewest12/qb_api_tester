function loadPage() {
    //fill select
    //sort array alphabetically
    api_choices.sort();
    //target the drop down
    var api_select = document.getElementById("select-api");
    //fill the drop down with the array
    for (i in api_choices) {
        var newOption = document.createElement("option");
        newOption.text = api_choices[i];
        newOption.value = api_choices[i];
        api_select.appendChild(newOption);
    }
    //add event listener for the select so that choices change based on api selected
    api_select.addEventListener("mouseup", function () {
        selected_api = document.getElementById('select-api').value;
        console.log(selected_api + ' was selected');
    });
}

function createDebugPayload() {
    //extract inputs from main form
    dataFormat = document.getElementById('select-dataFormat').value;
    realm = document.getElementById('realm').value;
    refId = document.getElementById('refId').value;
    type = document.getElementById('reqType').value;
    contentType = document.getElementById('contType').value;
    qbApiCall = document.getElementById('select-api').value;
    appToken = API_GetRecordInfo.parameters.apptoken.val.toString();
    userToken = API_GetRecordInfo.parameters.usertoken.val.toString();
    dataParams = document.getElementById('apiData').value;

    if (dataFormat == 'XML') {
        //load up debug payload
        debugpayload =
            'URL: ' + realm + '/db/' + refId + '\n' +
            'TYPE: ' + type + '\n' +
            'CONTENT: ' + contentType + '\n' +
            'HEADER: {QUICKBASE-ACTION:' + qbApiCall + '}' + '\n' +
            'DATA: <qdbapi><apptoken>' + appToken + '</apptoken><usertoken>' + userToken + '</usertoken>' + dataParams + '</qdbapi>';

        //turn feedback into a text element, load it into a paragraph tag, and append it to the feedback div
        feedback = document.createTextNode(debugpayload);
        para = document.createElement("P");
        para.append(feedback);
        sent = document.getElementById("sent");
        sent.appendChild(para);


        //execute api call
        //qbApiCallXML(realm, refId, type, dataParams, qbApiCall, appToken, userToken, contentType);


    } else if (dataFormat == 'JSON') {
        console.log('JSON payload selected');
       /* debugpayload =
            'URL: ' + realm + '/db/' + refId + '\n' +
            'TYPE: ' + type + '\n' +
            'CONTENT: ' + contentType + '\n' +
            'HEADER: {QUICKBASE-ACTION:' + qbApiCall + '}' + '\n' +
            'DATA: ' + dataParams;
        console.log(debugpayload);*/

        //execute api call
        qbApiCallJSON(realm, refId, type, qbApiCall, contentType);
    } else {
        console.log('Sorry, something went wrong!');
    }
}


function qbApiCallXML(realm, refId, type, dataParams, qbApiCall, appToken = '', userToken = '', contentType = 'application/xml') {
	/* 
	Function initaites Ajax Call to various QB API items. Variables are defined as follows:
	realm: quickbase realm (https://yourrealm.quickbase.com)
	refId: the reference the api call requires (main, app id, dbid, etc.)
	type: HTTP request type (GET, POST, PUT, etc.)
	contentType: content type required for qbabpi
	appToken: application token (if required)
	userToken: user token (if required)
	dataParams: XML structured parameters the API call requires
	*/
	

    
	$.ajax({
		url: realm + '/db/' + refId,
		type: type,
		contentType: contentType,
		headers:{"QUICKBASE-ACTION": qbApiCall},
		data: '<qdbapi><apptoken>' + appToken + '</apptoken><usertoken>' + userToken + '</usertoken>' + dataParams + '</qdbapi>',
		success: function(xml){
			//if successful get the error text
			var errCode = $(xml).find('errcode').text();
			console.log(errCode);
            console.log(xml);

            xmlText = new XMLSerializer().serializeToString(xml)

            feedback = document.createTextNode(xmlText);
            para = document.createElement("P");
            para.append(feedback);
            sent = document.getElementById("response");
            sent.appendChild(para);
		}
	});	
}

function qbApiCallJSON(realm, refId, type, qbApiCall, contentType ='application/xml'){
	/* 
	Function initaites Ajax Call to various QB API items. Variables are defined as follows:
	realm: quickbase realm (https://yourrealm.quickbase.com)
	refId: the reference the api call requires (main, app id, dbid, etc.)
	type: HTTP request type (GET, POST, PUT, etc.)
	contentType: content type required for qbabpi
	qbApICall: the API call you plan to make. It requires JSON that follows the structure outlined in the config file
	*/

    console.log('qbAPICallJSON was called');
	//Step 1
	buildApiData(qbApiCall, realm, refId, type);
	
}

function callAPIAjax (realm, refId, type, dataParams, qbApiCall, contentType ='application/xml') {
		debugpayload = 'Request send using: ' +
		'URL: ' + realm + '/db/' + refId + '\n' +
		'TYPE: ' + type + '\n' +
		'CONTENT: ' + contentType + '\n' +
		'HEADERS: {QUICKBASE-ACTION:' + qbApiCall + '}' + '\n' +
		'DATA: ' + dataParams; 
    console.log(debugpayload);

    //turn feedback into a text element, load it into a paragraph tag, and append it to the feedback div
    feedback = document.createTextNode(debugpayload);
    para = document.createElement("P");
    para.append(feedback);
    sent = document.getElementById("sent");
    sent.appendChild(para);
	
	$.ajax({
		url: realm + '/db/' + refId,
		type: type,
		contentType: contentType,
		headers:{"QUICKBASE-ACTION": qbApiCall.name},
		data: dataParams,
		success: function(xml){
			//if successful get the error text
			var errCode = $(xml).find('errcode').text();
			console.log(errCode);
			console.log(xml);
		}
	});
}

//TODO: figure out better callback
function buildApiData (qbApiCall, realm, refId, type) {

    console.log('buildApiData was called');
	//step 2
	apiDataString = '<qdbapi>'
	//get the data from parameters
    console.log(qbApiCall);
    console.log(qbApiCall.parameters);
    for (key in qbApiCall.parameters) {
        console.log(key);
		if (qbApiCall.parameters.hasOwnProperty(key)){
			console.log(key, qbApiCall.parameters[key].val, qbApiCall.parameters[key].req);
			key_value = qbApiCall.parameters[key].val;
			console.log(key_value);
			if(key_value == '') {
				key_req = qbApiCall.parameters[key].req;
				if(key_req){
					//TODO: Put something here to break the entire function if it doesn't have anything
				}
			} else {
				console.log(key, key_value);
				node_name = key;
				node_val = key_value;
				apiDataString += ('<' + node_name + '>' + key_value + '</' + node_name + '>');
			}
		}
	}
	
	apiDataString += '</qdbapi>'



	//return apiDataString;
	//callAPIAjax (realm, refId, type, apiDataString, qbApiCall);
}

