function get(){
	var math = document.getElementById('add1').value;
	var Physics = document.getElementById('add2').value;
	var English = document.getElementById('add3').value;
    var result = Number(math)+Number(Physics)+Number(English);
    var Avg =(result)/3;

    document.getElementById("opRes").innerHTML = "sum = "+result+"<br>Avg is "+Avg;
}