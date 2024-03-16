


   //1

   const getData = async ({ url }) => {
    try {
        const response = await fetch(url)
        if (response.status !== 200) {
            throw new Error('Error al obtener los datos')
        }
        const data = await response.json()
        return data
    }catch (error) {
        console.log(error)
    }
}

//2
const ciffre = [1,2,3,4,5,6,7,8,9]
const elevado = n.map((chiffres) => chiffres*2)
const par = elevado.filter((chiffres) => chiffres%2 === 0)
console.log(par)

//3
const promedio = (n)=> {
    if (n.length === 0) {
        return 0
    }
    const suma=n.reduce((acu, chiffre) => acu + chiffre,0)
    return suma/n.length
}

//4
function Maximo(n1,n2,n3) {
    let maximo = Math.max(n1, n2, n3)
    return maximo
}
//5
function copiar(n) {
    const copia = []
    for (let i = 0; i<n.length; i++) {
    copia.push(n[i])
    }
    return copia
}







