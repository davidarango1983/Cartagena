/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

    //Asignamos a cada botón del menú su función
  $('#titulo').hide();
    $('#titulo2').hide();
    $('#titulo').show('slow',function(){
        $('#titulo2').show('slow');
        
    });

    $('#historia').click(function () {

        $('#contenedorPrincipal').load('contenidos/historia.html');
        $('#contenedorPrincipal').show('slow');
    });


    $('#geografia').click(function () {

        $('#contenedorPrincipal').load('contenidos/geografia.html');
        $('#contenedorPrincipal').show('slow');

    });


    $('#contacto').click(function () {

        $('#contenedorPrincipal').load('contenidos/contacto.html');
        $('#contenedorPrincipal').show('slow');

    });


    $('#galeria').click(function () {

        $('#contenedorPrincipal').load('contenidos/galeria.html');
        $('#contenedorPrincipal').show('slow');

    });

    
});