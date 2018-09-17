function calculate_age(birthyear) { 
	var currentYear = new Date();
	var currentYear = currentYear.getFullYear();
	var age = currentYear - birthyear ;
  
    document.write("you are "+ age +" or "+ --age)
}


calculate_age(1990);