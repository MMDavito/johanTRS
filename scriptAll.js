/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function imageEnlarge() {
 document.getElementById('profil bild').style.height="100%";
 document.getElementById('profil bild').style.width="100%";
 document.getElementById('profil bild').style.position='absolute';
 }
function imageReset() {

 document.getElementById('profil bild').style.height="80%";
 document.getElementById('profil bild').style.width="80%";
 document.getElementById('profil bild').style.position='absolute';
 } 
 //OM JAG SKA ANVÄNDA DETTA LÄG IN FÖLJANDE I HTML--> onmouseover="imageEnlarge();" onmouseout="imageReset();