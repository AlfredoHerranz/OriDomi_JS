$(document).ready(function () {
    var $titulo = $('#titulo').oriDomi({
        vPanels:          10,     // number of panels when folding left or right (vertically oriented)
        hPanels:          3,     // number of panels when folding top or bottom
        speed:            1200,  // folding duration in ms
        ripple:           2,     // backwards ripple effect when animating
        shadingIntensity: .5,    // lessen the shading effect
        perspective:      800,   // smaller values exaggerate 3D distortion
        maxAngle:         90,    // keep the user's folds within a range of -40 to 40 degrees
        shading:          'soft' // change the shading type
    });
    $titulo.oriDomi("twist", 2);
    
    //Primer ejemplo
    var $mostrar = $('#img1').oriDomi({
        vPanels:          30,     
        speed:            1200,  
        perspective:      800,   
        maxAngle:         90,    
    });
    $mostrar.oriDomi("accordion",20);

    //Segundo ejemplo
    var $vertical = $('#plegable').oriDomi({
        hPanels:          5,     
        perspective:      1200,   
    });
    $vertical.oriDomi("stairs", "-90", "top");

    //Tercer ejemplo
    var $twist = $('#twist').oriDomi({
        vPanels:          20,     // number of panels when folding left or right (vertically oriented)
        speed:            1200,  
        ripple:           2,     
        perspective:      1800,   
        maxAngle:         30,    
        shading:          'soft' 
    });
    var $efecto = false;
    $("#animar").click(function (e) { 
       if (!$efecto){
            $twist.oriDomi("twist", 100, "left");
       }else{
        $twist.oriDomi("twist", 0, "left");
       }
       $efecto = !$efecto;
    });
   


   //Cuarto ejemplo
   var $plegable = $('#desplegable').oriDomi({
        vPanels:          4,     
        perspective:      1200,   
    });
    
    var desplegado = true;
    $("#desplegar").click(function (e) { 
       if (desplegado){
           $plegable.oriDomi("reveal", 140);
       }else{
            $plegable.oriDomi("unfold");
       }
       desplegado = !desplegado;
    });
});

