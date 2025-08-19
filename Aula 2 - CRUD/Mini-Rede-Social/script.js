// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onclick = function (){
    mostrarPosts()

    document.querySelector("#postForm").addEventListener('submit', criarPost)
}

// CREATE

function criarPost(infosDoEvento) {
    infosDoEvento.preventDefault();

    const textoPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagemPost = document.querySelector("#postImage").value;
    const dataPost = new Date().toLocaleString();

    const post = {
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        date: dataPost
    }

    posts.unshift(post) // adiciona no Inicio do array

    document.querySelector('#postForm').reset();

    mostrarPosts();
}

// READ

function mostrarPosts(){
    const listaPosts = document.querySelector("#postList") // Pegar o ID
    listaPosts.innerHTML = "";

    posts.forEach(pegaItem => {
        const cardPost = document.createElement("div");
        cardPost.classList.add("card");

        cardPost.innerHTML = `
        <p>${pegaItem.text}</p>
        <img src='${pegaItem.image}' style='max-width: 150px'/>
        <p>${pegaItem.category}</p>
        <p>${pegaItem.date}</p>
        <button>Editar</button>
        <button>Apagar</button>
        `

        listaPosts.append(cardPost)
    })
}

// UPDATE



// DELETE





// const Pessoa = {
//     nome: "caio",
//     idade: 32,
//     cidade: "São Paulo"
// }

// console.log(Pessoa.nome)
// console.log(Pessoa[nome])