let lista = ['filtro de ar', 'disco de freio', 'pneus', 'retrovisor', 'skd']
let peso = 100
let minimo = 100
let maximo = 0
carrinho = []
console.log('///////////sistema de cadastro de peças')
for (let cont=0; cont<lista.length;cont++){
    if (peso<minimo){
        console.log('\n o peso minimo para cadastrar a peca é de ', minimo, 'o tamanho da peca é de', peso)
    }
    else{
        if(lista[cont].length>3){
            if(maximo<10){
                console.log('\n a peca: ', lista[cont], ' tem o peso e nome adequado')
                console.log(' peca cadastrada')
                carrinho.push(lista[cont])
                maximo++
            }
            else {
                console.log('\n numero maximo de pecas cadastradas')
            }
        }
        else{
            console.log('\n a seguinte peca deve ter no minimo 4 caracteres: ', lista[cont])
        }
        

    }
}


