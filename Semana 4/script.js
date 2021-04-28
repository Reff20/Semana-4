// ==================================
// table

//Seleção dos elementos da Table 
var tbody = document.querySelector('#tbody')
// var a = document.createElement('a')


//Seleção dos inputs
var nome = document.querySelector('#nomeCadastro').value
var email = document.querySelector('#emailCadastro').value
var tel = document.querySelector('#telefoneCadastro').value
var cel = document.querySelector('#celularCadastro').value
var cep = document.querySelector('#cepCadastro').value
var rua = document.querySelector('#ruaCadastro').value
var bair = document.querySelector('#bairroCadastro').value
var cid = document.querySelector('#cidadeCadastro').value
var uf = document.querySelector('#estadoCadastro').value
var num = document.querySelector('#numeroCadastro').value
var comp = document.querySelector('#complementoCadastro').value



// Array para inserir os valores dos inputs
var arr = []
function insereItens() {

    // tbody.innerHTML = ''
    var linha = document.createElement('tr')

    var a2 = document.createElement('a')
    a2.innerHTML = '<img src="img/calendario.png">'
    a2.setAttribute('onclick', 'verData()')

    var a = document.createElement('a')
    a.innerHTML = '<img src="img/botao-excluir.png">'
    a.setAttribute('onclick', 'removeTarefa(this)')

    for (ele of arr) {
        // console.log(ele)
        var eLinha = document.createElement('td')
        var item = document.createTextNode(ele)
        // var pos = arr.indexOf(ele)

        eLinha.appendChild(a2)
        eLinha.appendChild(a)
        eLinha.appendChild(item)
        linha.appendChild(eLinha)

    }
    tbody.appendChild(linha)

    arr = []

}

function verData() {
    var date = new Date()
    //procurei e não entendi como salva a data de cada linha =(
    alert('Data de cadastro: ' + (date.getDate()) + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear()))
}

function removeTarefa(i) {
    var row = i.parentNode.parentNode;
    row.parentNode.removeChild(row);
    mostraLinhas()
}



document.getElementById('divBtn').addEventListener('click', (e) => {

    if (document.querySelector('#nomeCadastro').value == '') {
        alert('Preencha o campo "Nome Completo"')
    } else if (document.querySelector('#emailCadastro').value == '') {
        alert('Preencha o campo "E-mail"')
    } else if (document.querySelector('#telefoneCadastro').value == '') {
        alert('Preencha o campo "Telefone"')
    } else if (document.querySelector('#celularCadastro').value == '') {
        alert('Preencha o campo "Celular"')
    } else if (document.querySelector('#cepCadastro').value == '') {
        alert('Preencha o campo "CEP"')
    } else if (document.querySelector('#ruaCadastro').value == '') {
        alert('Preencha o campo "Rua"')
    } else if (document.querySelector('#bairroCadastro').value == '') {
        alert('Preencha o campo "Bairro"')
    } else if (document.querySelector('#cidadeCadastro').value == '') {
        alert('Preencha o campo "Cidade"')
    } else if (document.querySelector('#estadoCadastro').value == '') {
        alert('Preencha o campo "Estado"')
    } else if (document.querySelector('#numeroCadastro').value == '') {
        alert('Preencha o campo "Número"')
    } else {
        e.preventDefault()
        nome = document.querySelector('#nomeCadastro').value
        email = document.querySelector('#emailCadastro').value
        tel = document.querySelector('#telefoneCadastro').value
        cel = document.querySelector('#celularCadastro').value
        cep = document.querySelector('#cepCadastro').value
        rua = document.querySelector('#ruaCadastro').value
        bair = document.querySelector('#bairroCadastro').value
        cid = document.querySelector('#cidadeCadastro').value
        uf = document.querySelector('#estadoCadastro').value
        num = document.querySelector('#numeroCadastro').value
        comp = document.querySelector('#complementoCadastro').value
        a = document.createElement('a')
        a2 = document.createElement('a')



        if (comp == '') {
            arr.push(nome, email, tel, cel, cep, rua, bair, cid, uf, num, '---', a2, a)
        } else {
            arr.push(nome, email, tel, cel, cep, rua, bair, cid, uf, num, comp, a2, a)
        }
        insereItens()
        alert('Cadastro completo!')
        document.querySelector('#nomeCadastro').value = ''
        document.querySelector('#emailCadastro').value = ''
        document.querySelector('#telefoneCadastro').value = ''
        document.querySelector('#celularCadastro').value = ''
        document.querySelector('#cepCadastro').value = ''
        document.querySelector('#ruaCadastro').value = ''
        document.querySelector('#bairroCadastro').value = ''
        document.querySelector('#cidadeCadastro').value = ''
        document.querySelector('#estadoCadastro').value = ''
        document.querySelector('#numeroCadastro').value = ''
        document.querySelector('#complementoCadastro').value = ''
    }
    mostraLinhas()

})


// document.querySelector('#btnNum').addEventListener('click', function () {
//     const date = new Date()
//     alert('Hoje é dia: ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear()))
// })

var linhasTr = tbody.getElementsByTagName('tr')
// console.log(linhasTr.length)
function mostraLinhas() {
    if (linhasTr.length == 1) {
        document.querySelector('#h2Contador').innerHTML = 'Você tem: '+linhasTr.length+' colabor cadastrado'
        // document.querySelector('#h2Contador').innerHTML = 'Você tem: ' + linhasTr.length + ' colaboradores cadastrados'
        // console.log(linhasTr.length)
    }
    else if (linhasTr.length > 1) {
        document.querySelector('#h2Contador').innerHTML = 'Você tem: ' + linhasTr.length + ' colaboradores cadastrados'
        // console.log(linhasTr.length)
    }else if(linhasTr.length == 0){
        document.querySelector('#h2Contador').innerHTML = 'Cadastre um colaborador...'
    }
    console.log(linhasTr.length)
}




// ==================================

// Inserir CEP automático
// Função Encontrar e Inserir CEP
function colocarCep(CEP) {

    const XML = new XMLHttpRequest()

    let url = 'https://viacep.com.br/ws/' + CEP + '/json/unicode/'

    XML.open('GET', url, true)

    XML.onreadystatechange = function () {
        if (document.getElementById('cepCadastro').value == "") {
            document.getElementById('ruaCadastro').value = ""
            document.getElementById('bairroCadastro').value = ""
            document.getElementById('cidadeCadastro').value = ""
            document.getElementById('estadoCadastro').value = ""
        } else if (XML.readyState == 4) {
            if (XML.status === 200) {
                const JSONtxt = XML.responseText
                const JSONdados = JSON.parse(JSONtxt)

                document.getElementById('ruaCadastro').value = JSONdados.logradouro
                document.getElementById('bairroCadastro').value = JSONdados.bairro
                document.getElementById('cidadeCadastro').value = JSONdados.localidade
                document.getElementById('estadoCadastro').value = JSONdados.uf
            }
        }
    }
    XML.send();
}

// ==================================

// Somente Letras && Somente Números
//Somente Letras = Nome Completo
$('#nomeCadastro').on('input', function () {
    if (/[0-9]/g.test(this.value)) {
        alert("Você só pode digitar letras!")
        this.value = ""
    }
})

// ==================================
// Somente N° = Telefone && Celular
$('#telefoneCadastro').on('keypress', function (event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$('#celularCadastro').on('keypress', function (event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// ==================================
// Validação e-mail
function validarEmail() {

    var email = document.getElementById('emailCadastro')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.indexOf('.com') == -1) {
        alert('email inválido')
        email.value = ""
    } else {
        alert('email validado com sucesso!')
    }
}


// ==================================
// Masks
(function readyJS(win, doc) {
    "use strict"

    //Mask de telefone
    if (document.getElementById("telefoneCadastro")) {
        let tel = document.getElementById("telefoneCadastro")
        VMasker(tel).maskPattern("(99)9999-9999")
    }

    //Mask de celular
    if (document.getElementById("celularCadastro")) {
        let cel = document.getElementById("celularCadastro")
        VMasker(cel).maskPattern("(99)99999-9999")
    }

    //                 Mask de CEP
    //
    //                  Not Working
    //
    // if(document.getElementById("cepCadastro")){
    //     let c = document.getElementById("cepCadastro")
    //     VMasker(c).maskPattern(12345678,"99999-999")
    // }


})(window, document)


// ==================================



// ANIMAÇÕES

//Sai Form e entra Table
document.querySelector('#btnPaginaLista').addEventListener('click', function () {
    //Sai o BTN "Ver Cadastros"
    document.querySelector('#btnPaginaLista').setAttribute('class', 'verCadastro')
    document.querySelector('#btnPaginaLista').setAttribute('style', 'transform: translateX(-2000px);')
    //Sai o Form
    // document.querySelector('h2').setAttribute('class','verCadastro')
    // document.querySelector('h2').setAttribute('style','transform: translateX(-2000px);')

    document.querySelector('form').setAttribute('class', 'verCadastro')
    document.querySelector('form').setAttribute('style', 'transform: translateX(-2000px);')

    document.querySelector('#divBtn').setAttribute('class', 'verCadastro')
    document.querySelector('#divBtn').setAttribute('style', 'transform: translateX(-2000px);')
    //Entra Table
    document.querySelector('#listaCadastros').setAttribute('class', 'verTabela')
    document.querySelector('#listaCadastros').setAttribute('style', 'opacity: 1')
    document.querySelector('#btnPaginaCadastro').setAttribute('class', 'verTabela')
    document.querySelector('#btnPaginaCadastro').setAttribute('style', 'opacity: 1')
})

//Sai Table e entra Form
document.querySelector('#btnPaginaCadastro').addEventListener('click', function () {
    //Sai o BTN "Cadastrar"
    document.querySelector('#btnPaginaCadastro').setAttribute('class', 'saiTable')
    document.querySelector('#btnPaginaCadastro').setAttribute('style', 'opacity: 0')
    //Sai a Table
    document.querySelector('#listaCadastros').setAttribute('class', 'saiTable')
    document.querySelector('#listaCadastros').setAttribute('style', 'opacity: 0')
    //Entra Form
    document.querySelector('#btnPaginaLista').setAttribute('class', 'entraForm')
    document.querySelector('#btnPaginaLista').setAttribute('style', 'transform: translateX(0);')
    // document.querySelector('h2').setAttribute('class','entraForm')
    // document.querySelector('h2').setAttribute('style','transform: translateX(0px);')
    document.querySelector('form').setAttribute('class', 'entraForm')
    document.querySelector('form').setAttribute('style', 'transform: translateX(0px);')
    document.querySelector('#divBtn').setAttribute('class', 'entraForm')
    document.querySelector('#divBtn').setAttribute('style', 'transform: translateX(0px);')

})



