const fs = require('fs');
const colors = require('colors');

const crearAarchivo = async( base = 5, listar = false, hasta = 10 ) => {
    
    try {
        
        let salida = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${ base * i }\n`;
        }
        
        if (listar) {
            console.log('====================='.green);
            console.log(`  Tabla del ${base}  `.yellow);
            console.log('====================='.green);
            console.log(salida.rainbow);
        }

        fs.writeFileSync(`./out/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt creada!`.bgGreen;
    } catch (err) {
        console.log(err);
    }

}

module.exports = {
    crearAarchivo
}