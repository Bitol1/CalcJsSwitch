document.querySelector('#calcular2').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#n11').value);
    const n2 = parseInt(document.querySelector('#n22').value);
    const op2 = document.querySelector('#op').value;
    let r;
    switch(op2){
        case'+':{
            r= n1 + n2;
        } break;

        case'-':{  
            r = n1 - n2;
        } break;
        case '*':{
            r = n1 * n2;
        } break;
        case'/':{
            if (n2 == 0){
                r = "No se puede dividir por 0";
            }else{ 
                r = n1 / n2;
            }
        } break; 
            default:{
                r = "No se puede realizar la operacion";
            } break;
        }
         document.querySelector('#r2').innerHTML = r});