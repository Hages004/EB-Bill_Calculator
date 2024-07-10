var ServiceNumber = document.getElementById('csn')  
var Previous = document.getElementById('pmr')
var Current = document.getElementById('cmr')    
var form = document.getElementById('form')
var error = document.getElementById('error')
var total = document.getElementById('total')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validation()
})     
function validation(){

    var ServiceNumber = csn.value
    var Previous = pmr.value
    var Current = cmr.value
    var units = parseInt (Current) - parseInt(Previous)
   
    if(ServiceNumber.length!=0){
        if(ServiceNumber.length==11){
            if(ServiceNumber.charAt(0)=="0" && ServiceNumber.charAt(1)=="1"||ServiceNumber.charAt(0)=="1" && ServiceNumber.charAt(1)=="1"||ServiceNumber.charAt(0)=="2" && ServiceNumber.charAt(1)=="1"){
                if(ServiceNumber.charAt(2)==0 && ServiceNumber.charAt(3)==6 && ServiceNumber.charAt(4)==1 || ServiceNumber.charAt(2)==0 && ServiceNumber.charAt(3)==6 && ServiceNumber.charAt(4)==2 || ServiceNumber.charAt(2)==0 && ServiceNumber.charAt(3)==6 && ServiceNumber.charAt(4)==3 || ServiceNumber.charAt(2)==0 && ServiceNumber.charAt(3)==6 && ServiceNumber.charAt(4)==4 || ServiceNumber.charAt(2)==0 && ServiceNumber.charAt(3)==6 && ServiceNumber.charAt(4)==5){   
                    if(ServiceNumber.charAt(5)==0 && ServiceNumber.charAt(6)>=0 && ServiceNumber.charAt(6)<=5 && ServiceNumber.charAt(7)>=1 && ServiceNumber.charAt(7)<=10){
                        if((ServiceNumber.charAt(8)>=0 && ServiceNumber.charAt(8)<=9) && (ServiceNumber.charAt(9)>=0 && ServiceNumber.charAt(9)<=9) && (ServiceNumber.charAt(10)>=1 && ServiceNumber.charAt(10)<=10))
                            {
                                document.getElementById("error1").innerHTML=""
                                ze=1
                            }
                        else{
                            document.getElementById("error1").innerHTML="9th 10th 11th digits must be between 001 to 999"}}    
                    else{
                        document.getElementById("error1").innerHTML=" 6th 7th 8th digits must be between 001 to 050"}}    
                else{
                    document.getElementById("error1").innerHTML="3rd 4th 5th digits must be any one character set of 061 / 062 / 063 / 064 / 065"}}    
            else{
                document.getElementById("error1").innerHTML="First Two digits must be any one character set of 01 / 11 / 21"}}    
        else{
            document.getElementById("error1").innerHTML="Input must be 11 digits"}}      
    else
    {
        document.getElementById("error1").innerHTML="This felid is required"}

        if(Previous.length!=0){
            if(Previous.length==5){
                if(Previous.charAt[0]){}
            }
            else{
                document.getElementById("error2").innerHTML="PMR must be 5 digits"}}    
        else{
            document.getElementById("error2").innerHTML="This felid is required"}
        if(Current.length!=0){
            if(Current.length==5){
                if(Current>Previous){
                    document.getElementById("error3").innerHTML=""}
                else{
                    document.getElementById("error3").innerHTML="Current Meter Rate must be greater than Previous Meter Rate"}}
            else{
                document.getElementById("error3").innerHTML="CMR must be 5 digits"}}
        else{
            document.getElementById("error3").innerHTML="This felid is required"}  
        
        if(units<100){
            dc=0
            document.getElementById("total").innerHTML="For first 100 units Rs.0"
        }  
        else if(units>=101 && units<=250){
            dc=0
            tot=dc*units*2.6
            document.getElementById("total").innerHTML="Total amount of EB-Bill is"+tot
        }  
        else if(units>=251 && units<=400){
            dc=0
            tot=dc*units*3.5
            document.getElementById("total").innerHTML="Total amount of EB-Bill is"+tot
        }
        else if(units>=401 && units<=600){
            dc=0
            tot=dc*units*4.8
            document.getElementById("total").innerHTML="Total amount of EB-Bill is"+tot
        }
        else if(units>=601){
            dc=0.2
            tot=0.2*units*5
            document.getElementById("total").innerHTML="Amount payable for the EB bill is: "+tot
        }

        }

