 var app = angular.module('myApp', []);
 app.controller('myCtrl', ['$scope', function($scope) {
     $scope.master = {
         nneto: 0,
         neto20: 0,
         neto10: 0,
         pdv10: 0,
         pdv20: 0,
         zbir: 0,
         dobavljac: "",
         pib: 0,
         racun: "",
         datum: "",
     };
     $scope.master2 = {
         nneto2: 0,
         neto202: 0,
         neto102: 0,
         pdv102: 0,
         pdv202: 0,
         zbir2: 0,
         dobavljac2: "",
         pib2: 0,
         racun2: "",
         datum2: "",
     };
     $scope.master3 = {
         datum3: "",
         dobavljac3: "",
         zaduzenje: 0,
         razduzenje: 0,
         saldo: 0,
         tRazlika: 0

     };

     $scope.reset = function() {
         $scope.user = angular.copy($scope.master);
     };
     $scope.reset();

     $scope.reset2 = function() {
         $scope.user2 = angular.copy($scope.master2);
     };
     $scope.reset2();

     $scope.reset3 = function() {
         $scope.user3 = angular.copy($scope.master3);
     };
     $scope.reset3();

     /*            pokusaj event lisenera da izbrise uneto kad se pritisne delete
      document.addEventListener('keydown', function(e) {

                     var key = e.which || e.keyCode;
                     if (key === 46) { 

                         reset();
                     }

                 }, false); */

 }]);

 function noviRed() {
     var table = document.getElementById("headerTable");
     var row = table.insertRow(0);

     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
     var cell6 = row.insertCell(5);
     var cell7 = row.insertCell(6);
     var cell8 = row.insertCell(7);

     var netozaNe = parseFloat(document.getElementById("nneto1").value);
     var netoza10 = parseFloat(document.getElementById("neto10").value);
     var netoza20 = parseFloat(document.getElementById("neto20").value);
     var porez10 = netoza10 / 10;
     var porez20 = netoza20 / 5;
     var ispada = ((porez20 + porez10) + (netoza20 + netoza10)) + netozaNe;

     /* primer jednacine iznad, dole je u angularjs formi, a gore u formi js
                 {{(user.neto20/5) + (user.neto10/10) + (user.neto20 + user.neto10) + user.nneto}} */

     cell1.innerHTML = document.getElementById("datum1").value;
     cell2.innerHTML = document.getElementById("dobavljac1").value;
     cell3.innerHTML = document.getElementById("racun1").value;
     cell4.innerHTML = document.getElementById("pib1").value;
     cell5.innerHTML = netozaNe;
     cell6.innerHTML = porez10
     cell7.innerHTML = porez20
     cell8.innerHTML = ispada
 }

 function fnExcelReport() {
     var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
     var textRange;
     var j = 0;
     tab = document.getElementById('tabela'); // id of table

     for (j = 0; j < tab.rows.length; j++) {
         tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
         //tab_text=tab_text+"</tr>";
     }

     tab_text = tab_text + "</table>";
     tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
     tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
     tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

     var ua = window.navigator.userAgent;
     var msie = ua.indexOf("MSIE ");

     if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer
     {
         txtArea1.document.open("txt/html", "replace");
         txtArea1.document.write(tab_text);
         txtArea1.document.close();
         txtArea1.focus();
         sa = txtArea1.document.execCommand("SaveAs", true, "Say Thanks to Sumit.xls");
     } else //other browser not tested on IE 11 
         sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));

     return (sa);
 }

 // Knjiga izlaznih racuna
 function noviRed2() {
     var table2 = document.getElementById("headerTable2");
     var row = table2.insertRow(0);

     var cell12 = row.insertCell(0);
     var cell22 = row.insertCell(1);
     var cell32 = row.insertCell(2);
     var cell42 = row.insertCell(3);
     var cell52 = row.insertCell(4);
     var cell62 = row.insertCell(5);
     var cell72 = row.insertCell(6);
     var cell82 = row.insertCell(7);

     var netozaNe2 = parseFloat(document.getElementById("nneto12").value);
     var netoza102 = parseFloat(document.getElementById("neto102").value);
     var netoza202 = parseFloat(document.getElementById("neto202").value);
     var porez102 = netoza102 / 10;
     var porez202 = netoza202 / 5;
     var ispada2 = ((porez202 + porez102) + (netoza202 + netoza102)) + netozaNe2;

     /* primer jednacine iznad, dole je u angularjs formi, a gore u formi js
                 {{(user.neto20/5) + (user.neto10/10) + (user.neto20 + user.neto10) + user.nneto}} */

     cell12.innerHTML = document.getElementById("datum12").value;
     cell22.innerHTML = document.getElementById("dobavljac12").value;
     cell32.innerHTML = document.getElementById("racun12").value;
     cell42.innerHTML = document.getElementById("pib12").value;
     cell52.innerHTML = netozaNe2;
     cell62.innerHTML = porez102
     cell72.innerHTML = porez202
     cell82.innerHTML = ispada2
 }

 function fnExcelReport2() {
     var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
     var textRange;
     var j = 0;
     tab = document.getElementById('tabela2'); // id of table

     for (j = 0; j < tab.rows.length; j++) {
         tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
         //tab_text=tab_text+"</tr>";
     }

     tab_text = tab_text + "</table>";
     tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
     tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
     tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

     var ua = window.navigator.userAgent;
     var msie = ua.indexOf("MSIE ");

     if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer
     {
         txtArea1.document.open("txt/html", "replace");
         txtArea1.document.write(tab_text);
         txtArea1.document.close();
         txtArea1.focus();
         sa = txtArea1.document.execCommand("SaveAs", true, "Say Thanks to Sumit.xls");
     } else //other browser not tested on IE 11 
         sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));

     return (sa);
 }
 // KEPO KNJIGA
 let realStanje = 0;

 function noviRed3() {
     var table2 = document.getElementById("headerTable3");
     var row = table2.insertRow(0);

     var cell123 = row.insertCell(0);
     var cell223 = row.insertCell(1);
     var cell323 = row.insertCell(2);
     var cell423 = row.insertCell(3);
     var cell523 = row.insertCell(4);

     var zaduzenje = parseFloat(document.getElementById("zaduzenje").value);
     var razduzenje = parseFloat(document.getElementById("razduzenje").value);
     // var oduzimanje = zaduzenje - razduzenje;
     let racunjanje = function(a, b) {
         realStanje += (a - b);
         return realStanje;
     }

     cell123.innerHTML = document.getElementById("datum3").value;
     cell223.innerHTML = document.getElementById("dobavljac3").value;
     cell323.innerHTML = zaduzenje;
     cell423.innerHTML = razduzenje;
     cell523.innerHTML = racunjanje(zaduzenje, razduzenje);
     document.getElementById("saldo").innerHTML = realStanje;

 }

 function fnExcelReport3() {
     var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
     var textRange;
     var j = 0;
     tab = document.getElementById('tabela2'); // id of table

     for (j = 0; j < tab.rows.length; j++) {
         tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
         //tab_text=tab_text+"</tr>";
     }

     tab_text = tab_text + "</table>";
     tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
     tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
     tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

     var ua = window.navigator.userAgent;
     var msie = ua.indexOf("MSIE ");

     if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer
     {
         txtArea1.document.open("txt/html", "replace");
         txtArea1.document.write(tab_text);
         txtArea1.document.close();
         txtArea1.focus();
         sa = txtArea1.document.execCommand("SaveAs", true, "Say Thanks to Sumit.xls");
     } else //other browser not tested on IE 11 
         sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));

     return (sa);
 }

 /*  var text = ["Sajt za online racunovodstvo", "Jednostavno lako jasno", "Registruj se danas"];
  var counter = 0;
  var elem = document.getElementById("promena");
  var inst = setInterval(change, 2000);

  function change() {
      elem.innerHTML = text[counter];
      counter++;
      if (counter >= text.length) {
          counter = 0;
      }
  } */