/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready( function(){
    
    //Asignamos a cada botón del menú su función
    
    $('#historia').click(function(){
        $('#contenido').hide('scale','slow');
       $('#contenido').load('contenidos/historia.html');
        $('#contenido').show('scale','slow');
    });
    
    
     $('#geografia').click(function(){
        $('#contenido').hide('scale');
       $('#contenido').load('contenidos/geografia.html');
        $('#contenido').show('scale','slow');
    });
    
});
    
    
    
    
