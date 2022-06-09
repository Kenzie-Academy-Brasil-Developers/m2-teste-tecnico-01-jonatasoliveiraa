function criaCard(pessoas){

    const ul = document.querySelector(".container")
    pessoas.forEach((dadosPessoas) => {
        const li = document.createElement("li")
        const img = document.createElement("img")
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const h3 = document.createElement("h3")

        li.classList.add("card")
        img.src = dadosPessoas.urlImage
        img.alt = dadosPessoas.nome
        h2.innerText = dadosPessoas.nome
        p.innerText = dadosPessoas.idade
        h3.innerText = dadosPessoas.bio
        li.append(img,h2,p,h3)
        ul.append(li)
    });
}criaCard(pessoas)