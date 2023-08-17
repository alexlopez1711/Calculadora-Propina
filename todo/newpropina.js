function sumarN1 (){
    var numero = document.getElementById("doslucas")
    numero.value++;
}

function restarN1(){
    var numero = document.getElementById("doslucas")
    if (numero.value > 0){
        numero.value--;
    }
}

function sumarN2(){
    var numero = document.getElementById("cdg25")
    numero.value++;
}

function restarN2(){
    var numero = document.getElementById("cdg25")
    if(numero.value > 0){
        numero.value--;
    }
}

function sumarN3(){
    var numero = document.getElementById("cdg50")
    numero.value++;
}

function restarN3(){
    var numero = document.getElementById("cdg50")
    if(numero.value > 0){
        numero.value--;
    }
}

function sumarN4(){
    var numero = document.getElementById("cdg75")
    numero.value++;
}

function restarN4(){
    var numero = document.getElementById("cdg75")
    if (numero.value > 0){
        numero.value--;
    }
}

function sumarN5(){
    var numero = document.getElementById("cdg100")
    numero.value++;
}

function restarN5(){
    var numero = document.getElementById("cdg100")
    if(numero.value > 0){
        numero.value--;
    }
}
 

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
      let value = input.value.replace(/\./g, '');
      input.value = Number(value).toLocaleString('de-DE');
    });
  });

 

  function openModal() {
    
    
      document.getElementById("myModal").style.display = "block";
      document.getElementById("inicio22").style.display = "none";
      document.getElementById("myModal").scrollTop = 0;
    
  }
  
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("inicio22").style.display = "block";
  }


  function calcular(){
    let totalefectivo = Number(document.getElementById('totalefectivo').value.replace(/\./g, ''));
    let totaldebito   = Number(document.getElementById('totaldebito').value.replace(/\./g, ''));
    let doslucas      = Number(document.getElementById('doslucas').value.replace(/\./g, ''));
    let cdg25         = Number(document.getElementById('cdg25').value.replace(/\./g, ''));
    let cdg50         = Number(document.getElementById('cdg50').value.replace(/\./g, ''));
    let cdg75         = Number(document.getElementById('cdg75').value.replace(/\./g, ''));
    let cdg100        = Number(document.getElementById('cdg100').value.replace(/\./g, ''));
  
    let cocinadebito = + (totaldebito * 0.2).toFixed(0);
     document.getElementById('cocinadebito').value=cocinadebito.toLocaleString('de-DE');
  
    let cocinaefectivo = + (totalefectivo * 0.2).toFixed(0);
     document.getElementById('cocinaefectivo').value=cocinaefectivo.toLocaleString('de-DE');

    let cocinatotal = + (cocinadebito + cocinaefectivo);
     document.getElementById('cocinatotal').value=cocinatotal.toLocaleString('de-DE');
  
    let garzonesdebito = + (totaldebito * 0.8).toFixed(0);
     document.getElementById('garzonesdebito').value=garzonesdebito.toLocaleString('de-DE');
  
    let garzonesefectivo = + (totalefectivo * 0.8).toFixed(0);
     document.getElementById('garzonesefectivo').value=garzonesefectivo.toLocaleString('de-DE');
  
    let garzonestotal = + (garzonesefectivo + garzonesdebito);
     document.getElementById('garzonestotal').value=garzonestotal.toLocaleString('de-DE');
  
    let aa = doslucas * 2000;
    let bb = garzonestotal - aa;
    let g25 = cdg25 * 1;
    let g50 = cdg50 *2;
    let g75 = cdg75 *3;
    let g100 = cdg100 *4;
    let xyz = g25 + g50 + g75 + g100;
    let gt = bb / xyz;
  
     
    let doslucas1 = aa;
       document.getElementById('doslucas1').value=doslucas1.toLocaleString('de-DE');
   
     if(g25>=1){  
      let gpg25 = + (gt * 1).toFixed(0);
       document.getElementById('gpg25').value=gpg25.toLocaleString('de-DE');
     }else{
      document.getElementById('gpg25').value=0;
     }
  
     if (g50>=1){
      let gpg50 = + (gt *2).toFixed(0);
       document.getElementById('gpg50').value=gpg50.toLocaleString('de-DE');
     }else{
        document.getElementById('gpg50').value=0;
     }


     if (g75>=1){
        let gpg75 = + (gt *3).toFixed(0);
         document.getElementById('gpg75').value=gpg75.toLocaleString('de-DE');
       }else{
          document.getElementById('gpg75').value=0;
       }

       if (g100>=1){
        let gpg100 = + (gt *4).toFixed(0);
         document.getElementById('gpg100').value=gpg100.toLocaleString('de-DE');

         let monto = gpg100;
       let imagen;
       switch (true) {
        case (monto >= 1 && monto <= 15999):
            imagen = 'todo/gatonejo1.gif';
            break;
        case (monto >= 16000 && monto <= 22999):
            imagen = 'todo/gatonejo2.gif';
            break;
        case (monto >= 23000 && monto <= 29999):
            imagen = 'todo/gatonejo3.gif';
            break;
        case (monto >= 30000):
            imagen = 'todo/gatonejo4.gif';
            break;
        
    }
    
    document.getElementById('miImagen').src = imagen;

       }else{
          document.getElementById('gpg100').value=0;
       }  

      }

    function calcularYMostrarModal() {
        calcular();
        openModal();
      }
