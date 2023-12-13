document.addEventListener("DOMContentLoaded", function () {

    fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(response => response.json())
        .then(data => jewelery(data));
});

function jewelery(produtosJ) {
    const produtosJVenda = document.getElementById("produtosJ");

    produtosJ.forEach(produtosJ => {
        const card = document.createElement("div");

        card.innerHTML = `
            <div class="descricao1">
                <img src="${produtosJ.image}" class="imagem1 " alt="${produtosJ.title}">
                <div class="descricao2">
                    <h5 class="titulo1">${produtosJ.title}</h5>
                </div>

                <div class="botao">
                    <a href="comprar_produto.html?produto_id=${produtosJ.id}"><button class="botoes">Visualizar</button></a> 
                    <p class="texto1"><strong>$${produtosJ.price}</strong></p> 
                </div>
            </div>
        `;

        produtosJVenda.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {

    fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then(response => response.json())
        .then(data => men(data));
});

function men(produtosM) {
    const produtosMVenda = document.getElementById("produtosM");

    produtosM.forEach(produtosM => {
        const card = document.createElement("div");

        card.innerHTML = `
            <div class="descricao1">
                <img src="${produtosM.image}" class="imagem1" alt="${produtosM.title}">
                <div class="descricao2">
                    <h5 class="titulo1">${produtosM.title}</h5>
                </div>

                <div class="botao">
                    <a href="comprar_produto.html?produto_id=${produtosM.id}"><button class="botoes">Visualizar</button></a>  
                    <p class="texto1"><strong>$${produtosM.price}</strong></p>
                </div>
            </div>
        `;

        produtosMVenda.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {

    fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then(response => response.json())
        .then(data => women(data));
});

function women(produtosF) {
    const produtosFVenda = document.getElementById("produtosF");

    produtosF.forEach(produtosF => {
        const card = document.createElement("div");

        card.innerHTML = `
            <div class="descricao1">
                <img src="${produtosF.image}" class="imagem1" alt="${produtosF.title}">
                <div class="descricao2">
                    <h5 class="titulo1">${produtosF.title}</h5>
                </div>

                <div class="botao">
                    <a href="comprar_produto.html?produto_id=${produtosF.id}"><button class="botoes">Visualizar</button></a>  
                    <p class="texto1"><strong>$${produtosF.price}</strong></p>
                </div>
            </div>
        `;

        produtosFVenda.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {

    fetch("https://fakestoreapi.com/products/category/electronics")
        .then(response => response.json())
        .then(data => electronics(data));
});

function electronics(produtosE) {
    const produtosEVenda = document.getElementById("produtosE");

    produtosE.forEach(produtosE => {
        const card = document.createElement("div");

        card.innerHTML = `
            <div class="descricao1">
                <img src="${produtosE.image}" class="imagem1" alt="${produtosE.title}">
                <div class="descricao2">
                    <h5 class="titulo1">${produtosE.title}</h5>
                </div>

                <div class="botao">
                    <a href="comprar_produto.html?produto_id=${produtosE.id}"><button class="botoes">Visualizar</button></a>  
                    <p class="texto1"><strong>$${produtosE.price}</strong></p>
                </div>
            </div>
        `;

        produtosEVenda.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const url_data = new URLSearchParams(window.location.search);
    const produtosId = url_data.get("produto_id");

    fetch(`https://fakestoreapi.com/products/${produtosId}`)
        .then(response => response.json())
        .then(data => vendas(data));
});

function vendas(produto) {
    const produtosVenda = document.getElementById("produto");
    const card = document.createElement("div");

    card.innerHTML = `
        <div class="mercadoria">
            <img src="${produto.image}" class="imagem2" alt="${produto.title}">
            <div class="descricao">
                <h5 class="titulo2">${produto.title}</h5>
                <p class="texto2">${produto.description}</p>
                <p class="texto2"><strong>$${produto.price}</strong></p>
            </div>
        </div>
    `;

    produtosVenda.appendChild(card);
}

function limpa_formulário_cep() {
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
}

function meu_callback(conteudo) {

    if (!("erro" in conteudo)) {
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
    } else {
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');


    if (cep != "") {
        var validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";

            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            document.body.appendChild(script);

        } else {
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } else {
        limpa_formulário_cep();
    }
};

function finalizarCompra() {
    var esconder = document.getElementById("esconder");
    var sucesso = document.getElementById("sucesso");
}

function finalizarCompra() {
    var esconder = document.getElementById("esconder");
    var sucesso = document.getElementById("sucesso");

    esconder.style.display = "block";
    sucesso.style.display = "flex";

    setTimeout(function () {
        esconder.style.display = "none";
        sucesso.style.display = "none";
    }, 3000);
}
