function sueldo(dTrabajado, hTrabajada) {
    var sueldo=dTrabajado*hTrabajada*0.13*25;
    return sueldo;
}
document.write("El sueldo es: ");
document.write("<br>");
document.write(sueldo(21,8));