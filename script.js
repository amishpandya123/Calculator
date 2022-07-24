// To find out if you have any error in JS code then just go to your project window in browser and inspect and see in the console, you will get it
var buttons=document.getElementsByTagName("button");   //This will give an array of the all the buttons

var display_number=document.getElementById("display-number");

var operand1=0;
var operand2=null;
var operator=null;

for (var i = 0; i<buttons.length; i++) {
	buttons[i].addEventListener('click', function(){
        
        var value=this.getAttribute("data-value");
		
		if(value=="ac") {
          display_number.innerText="0";
		}

		else if(value=="+") {
          operator="+";
          operand1=parseFloat(display_number.innerText);       //Store the input which is on display in the operand1 variable and again set screen to 0 
          display_number.innerText="0";
		}

		else if(value=="-") {
          operator="-";
          operand1=parseFloat(display_number.innerText);
          display_number.innerText="0"; 
		}

		else if(value=="*") {
          operator="*";
          operand1=parseFloat(display_number.innerText);
          display_number.innerText="0";		
		}

		else if(value=="/") {
          operator="/";
          operand1=parseFloat(display_number.innerText);
          display_number.innerText="0";
		}

		else if(value=="%") {
          operator="%";
          operand1=parseFloat(display_number.innerText);
          display_number.innerText="0";
		}

		else if(value=="=") {
          operand2=parseFloat(display_number.innerText);
          var ans=eval(operand1+" "+operator+" "+operand2);   //eval function will calculate the string expression and will give answer
          display_number.innerText=ans;
		}

		else if(value=="+/-"){
			display_number.innerText="Itna bhi nahi ata 🤣"
		}
		else{
			display_number.innerText+=value;    //If user is pressing any number then keep doing them until user press any operator. When user press any operator it means the number on the display is our operand1, so store it in operand1 and when user click on "=" it means the number on the display is our operand2 so store it in operand2 and do the calculations in eval function
		}
	});
}