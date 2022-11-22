    var p = 0;
    var mass = [];
    var Res;
    var y;
    var a;
    var b;
    var Result = document.getElementById("Res");
function chet()
{
    var fir = document.getElementById("First").value;
    var M = document.getElementById("Second").value;
    var fou = document.getElementById("Fourth").value;
    var thi = document.getElementById("Third").value;
    if(fir != " ")
    {
        fir = Number(fir);
            for(var i = 1 ; i < fir ; i++)
            {
                for(var j = 2; j < fir; j++)
                {
                
                if(fir % i >= 1 && i % j == 0 || fir / i == fir)
                {
                    if(fir % j >= 1 || fir / i == fir)
                    {   
                        if(i % j >= 1 || i % j == 0)
                        {
                            mass[p] = i;
                            p++;                          
                            console.log("Привет " + i , + j , + p);
                                break;
                        }
                    }
                    else
                    {
                        break;
                    }   
                }
                }
            }
    }
    for(var g = 0; g < p; g++)
            {
            var Rol = mass[g] ** p;
            console.log(mass);
            console.log(Rol) 
             if(Rol % fir == 1  && mass[g] != 1)
                {
                    Res =  mass[g];
                    console.log(Res);
                     break;
                }
            }
            for(var g = 1; g < fir; g++)
            {
            var Rol = Res ** fou;
            
            console.log(Rol) 
             if(Rol % fir >= 1 )
                {
                     y =  Rol % fir;
                    console.log(y);
                     break;
                }
            } 
            for(var g = 1; g < fir; g++)
            {
            var Rol = Res ** thi;
            
            console.log(Rol) 
             if(Rol % fir >= 1 )
                {
                    a =  Rol % fir;
                    console.log(a);
                     break;
                }
            }
            for(var g = 1; g < fir; g++)
            {
            var Rol = (y ** thi)*M;
            
            console.log(Rol) 
             if(Rol % fir >= 1 )
                {
                    b =  Rol % fir;
                    console.log(b);
                    Result.innerHTML = ("Результат:"+"a =" + a + " b =" + b)
                     break;
                }
            }            


    
}

function unchet()
{ 
    var fir = document.getElementById("First").value;
    var fou = document.getElementById("Fourth").value;
    var m = b * (a ** (fir - 1 - fou));
    if(m % fir >= 1 )
    {
        m = m % fir;
        console.log(m);
        Result.innerHTML = ("Результат: "+ "M =" + m );
         
    }
}

