/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function denna() {
    
}
function imageEnlarge() {
 document.getElementById('profilbild').style.height="300px";
 document.getElementById('profilbild').style.width="300px";
 document.getElementById('profilbild').style.position='absolute';
 }
function imageReset() {

 document.getElementById('profilbild').style.height="100px";
 document.getElementById('profilbild').style.width="100px";
 document.getElementById('profilbild').style.position='absolute';
 } 
 //OM JAG SKA ANVÄNDA DETTA LÄG IN FÖLJANDE I HTML--> onmouseover="imageEnlarge();" onmouseout="imageReset();