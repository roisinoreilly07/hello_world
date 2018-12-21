function get_exchange_rate(curr_key_1, curr_key_2) {
	var xhttp = new XMLHttpRequest();
	var base_url = "https://free.currencyconverterapi.com/api/v6/convert?q=";
	var curr_1_2_key = curr_key_1 + "_" + curr_key_2;
	var url= base_url + curr_1_2_key + "&compact=y";
	xhttp.open("GET", url, false);
	xhttp.send();
	var responseJSON = JSON.parse(xhttp.responseText);
	return responseJSON[curr_1_2_key]["val"];
}