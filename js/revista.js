$(document).ready(function () {
    var paginas = $('.pag');
    var pagActual = 0;
    
    $('.pag').oriDomi({
        vPanels:          2,
        hPanels:          1,     
        perspective:      1200,   
    });
    
    
    function siguientePag() {
        if (pagActual < paginas.length - 1) {
            $(paginas[paginas.length - 1 - pagActual]).oriDomi('foldUp');
            pagActual++;
        }
        }
    
      
        function anteriorPag() {
        if (pagActual > 0) {
            pagActual--;
            $(paginas[paginas.length - 1 - pagActual]).oriDomi('unfold');
        }
        }
    
       
        $('#sigPag').click(siguientePag);
    
       
        $('#antPag').click(anteriorPag);

});
