/*var d;
d = "hellow";
window.alert(d);*/

   /*var e = document.getElementById('wrapper_toggle');
                       
                   if (w.style.display =='none'){
                      w.style.display = 'block';
                        }
                    else{
                        w.style.display =='none';
                    }
*/
    function wrapShow(){
                var w = document.getElementById("wrapper");

                if(w.style.display == 'none'){
                   w.style.display = 'block';
                   document.getElementById("btno").innerHTML = "Hide";
                   var x = document.getElementById("myTune");
                             x.play();
                   return;
                }
                else{
                    w.style.display = 'none';
                    document.getElementById("btno").innerHTML = " Show";
                     var x = document.getElementById("myTune");
                             x.pause();
                }
            }

     function toggle_app1_function(){
                    
                   var e = document.getElementById("div_app1");
                       
                   if (e.style.display =='block'){
                       e.style.display = 'none';
                       
                       document.getElementById("btn_app1").innerHTML = "Show Even/Odd App";
                       document.getElementById("div_app1").style.backgroundColor ="black";
                       document.getElementById("div_app2").style.display ="none";
                       document.getElementById("div_app3").style.display ="none";
                       return;
                  }
                    
                 else{
                      e.style.display ='block'; 
                      document.getElementById("btn_app1").innerHTML = "Hide Even/Odd App";
                      document.getElementById("div_app1").style.backgroundColor ="#9999ff";
                      document.getElementById("div_app2").style.display ="none";
                      document.getElementById("div_app3").style.display ="none";
                      

                   } 
            }  /*toggle_app1_function close*/


     function toggle_app2_function(){
                   var e = document.getElementById("div_app2");
                   if (e.style.display =='block'){
                       e.style.display = 'none';
                       document.getElementById("btn_app2").innerHTML = "Show Marksheet App";
                       document.getElementById("div_app1").style.display ="none";
                       document.getElementById("div_app3").style.display ="none";
                       return;
                                                 }
                    
                    else{
                        e.style.display ='block'; 
                        document.getElementById("btn_app2").innerHTML = "Hide Marksheet App";
                        document.getElementById("div_app2").style.backgroundColor ="#ff9999";
                        document.getElementById("div_app1").style.display ="none";
                        document.getElementById("div_app3").style.display ="none";
                        }
                }   /*toggle_app2_function close*/



     function toggle_app3_function(){
                   var e = document.getElementById("div_app3");
                   if (e.style.display =='block'){
                       e.style.display = 'none';
                       document.getElementById("btn_app3").innerHTML = "Show Calculator App";
                       document.getElementById("div_app2").style.display ="none";
                       document.getElementById("div_app1").style.display ="none";
                       return;
                                                 }
                    
                    else{
                        e.style.display ='block'; 
                        document.getElementById("btn_app3").innerHTML = "Hide Calculator App";
                        document.getElementById("div_app3").style.backgroundColor ="#339999";
                        document.getElementById("div_app2").style.display ="none";
                        document.getElementById("div_app1").style.display ="none";
                        }
                } /*toggle_app3_function close*/

 

        function doit(){
                var number1 = window.document.even_form.input01.value;
                var empty = "";
                  if (number1%2==0) {
                    window.document.even_form.input01.value = + number1 + " Is An Even Number ";
                    
                } else if(number1%3==1) {
                    window.document.even_form.input01.value = + number1 + " Is An odd Number ";
                    
                }
                  else if(number1%1==0) {
                    window.document.even_form.input01.value = + number1 + " Is An odd Number ";
                    
                }
                   else{
                    window.document.even_form.input01.value = +empty+ " invalid entry ";
                }
        } /*doit function close*/

        function markit(){
            var percent = +window.document.grade_form.input01.value;
            /*var empty = "";*/
            if(percent>=90 && percent<=100){
                     /*alert("Dude You Got A-1 Grade");*/
                     /*var grade = "A";*/
                     window.document.grade_form.input01.value =  percent+"%"+ " Its 'A+ Plus' Grade ";
                    }
            else if(percent>=80 && percent<=89){
                     window.document.grade_form.input01.value =  percent+"%"+ " Its 'A' Grade ";
                    }
            else if(percent>=70 && percent<=79){
                     window.document.grade_form.input01.value =  percent+"%"+ " Its 'B' Grade ";
                    }
            else if(percent>=60 && percent<=69){
                     window.document.grade_form.input01.value =  percent+"%"+ " Its 'C' Grade ";
                    }
            else if(percent>=50 && percent<=59){
                     window.document.grade_form.input01.value =  percent+"%"+ " Its 'D' Grade ";
                    }
            else if(percent<50){
                     window.document.grade_form.input01.value = + percent+"%"+ " You Are Failed Bro";
                    }
            else{
                     window.document.grade_form.input01.value = + percent +"%"+" Invalid Value ";
            }
            
        } /*markit function close*/

        function clearme(){
            var empty = " ";
            window.document.calc_form.input01.value = + empty;
            window.document.calc_form.input02.value = + empty;
            window.document.calc_form.input03.value = + empty;

        } /*clearme function close*/

        function add(){
                var number1 = window.document.calc_form.input01.value;
                var number2 = window.document.calc_form.input02.value;
                var total   = (number1*1) + (number2*1);

                    if(total%2==0){
                       window.document.calc_form.input03.value = total + " And Its An Even";
                            }
                    else{
                       window.document.calc_form.input03.value = total + " And Its An Odd";
                        }

                        
        } /*plus function close*/

          function subtract(){
                var number1 = window.document.calc_form.input01.value;
                var number2 = window.document.calc_form.input02.value;
                var total   = (number1*1) - (number2*1);

                    if(total%2==0){
                       window.document.calc_form.input03.value = total + " And Its An Even";
                            }
                    else{
                       window.document.calc_form.input03.value = total + " And Its An Odd";
                        }
                             
        } /*plus function close*/

        function multiply(){
                var number1 = window.document.calc_form.input01.value;
                var number2 = window.document.calc_form.input02.value;
                var total   = number1 * number2;
                    if(total%2==0){
                       window.document.calc_form.input03.value = total + " And Its An Even";
                            }
                    else{
                       window.document.calc_form.input03.value = total + " And Its An Odd";
                        }
                            
        } /*plus function close*/

        function divide(){
                var number1 = window.document.calc_form.input01.value;
                var number2 = window.document.calc_form.input02.value;
                var total   = number1 / number2;
                    if(total%2==0){
                       window.document.calc_form.input03.value = total + " And Its An Even";
                            }
                    else{
                       window.document.calc_form.input03.value = total + " And Its An Odd";
                        }
                             
        } /*plus function close*/

        function login(){
                /*document.getElementById("logout").style.visibility = "hidden";*/
                var user = window.document.loginForm.inputusr.value;
                var pass = +window.document.loginForm.inputpas.value;
                var pass1 = window.document.loginForm.inputpas.value;
                if(user === "fayaz" && pass === 12345){
                    
                    document.getElementById("btn_app1").style.visibility = "visible";
                    document.getElementById("btn_app2").style.visibility = "visible";
                    document.getElementById("btn_app3").style.visibility = "visible";
                    document.getElementById("logout").style.visibility = "visible";
                    document.getElementById("logindiv").style.display = "none";
                    /*document.getElementById("myTune").style.visibility = "visible";*/
                    

                    /*var x = document.getElementById("myTune");*/
                            /*document.setTimeout(x, 5000);*/

                            setTimeout(function() {
                                document.getElementById("myTune").play();
                            }, 3000);
                                
                           
                            
                          
                }
                else if(user === "admin" && pass1 === "admin"){
                    document.getElementById("btn_app1").style.visibility = "visible";
                    document.getElementById("btn_app2").style.visibility = "visible";
                    document.getElementById("btn_app3").style.visibility = "visible";
                    document.getElementById("logout").style.visibility = "visible";
                    document.getElementById("logindiv").style.display = "none";

                     setTimeout(function() {
                                document.getElementById("myTune").play();
                            }, 2000);
                }
                else{
                    /*alert("userName / passwor invalid");*/
                    window.document.loginForm.inputusr.value = "Invalid User";
                    window.document.loginForm.inputpas.value = "Invalid Password";
                }
        }

        function logOut(){
            document.loginForm.inputusr.value = "User Name";
            document.loginForm.inputpas.value = "Password";
            document.getElementById("btn_app1").style.visibility = "hidden";
            document.getElementById("btn_app2").style.visibility = "hidden";
            document.getElementById("btn_app3").style.visibility = "hidden";
            document.getElementById("div_app1").style.display = "none";
            document.getElementById("div_app2").style.display = "none";
            document.getElementById("div_app3").style.display = "none";
            document.getElementById("logindiv").style.display = "block";
            document.getElementById("logout").style.visibility = "hidden";
            document.getElementById("myTune").pause();
            /*document.getElementById("myTune").play();*/
            
        }


 /*   var a = prompt("user Name");
    var b = +prompt("age");
    var c = prompt("Where He Teach");

var user = a;
var age = b;
var teacher =c;
var result = (user === "majid" || age === 20 || teacher === "saylani")?   "welcom : Majid is java's teacher" : "Invalid Entry";
window.alert(result);
*/