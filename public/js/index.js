


// Active do button .curso

document.querySelectorAll("article .conteudo .playcurso .curso").forEach((curso) => {
    curso.addEventListener("click", function() {
        document.querySelectorAll("article .conteudo .playcurso .curso").forEach((tira) => {
            tira.classList.remove("active");
        });
        this.classList.add("active");
    });
});
 // Mudar imagens e informações apos o click na div .curso

const buttonConteudo = document.querySelectorAll(".curso");

buttonConteudo.forEach(button => {
    button.onclick = (event) => {
        event.preventDefault();
        
        const id = event.currentTarget.id; 
        var numero = 1;
        while(numero<5) {
            const urlImg = `imgs/CursosPage/modulos/${id}/${id}Mod${numero}.png`;
            const codImg = `#mod${numero}`;
            const descMod = `.descMod${numero}`;
            const exampleMod = document.querySelector(`.example${numero}`);

            let vetorDesc;

            exampleMod.textContent = id;

            if (numero === 1) {
                vetorDesc = descMod1;
            } else if (numero === 2) {
                vetorDesc = descMod2;
            } else if (numero === 3) {
                vetorDesc = descMod3;
            } else if (numero === 4) {
                vetorDesc = descMod4;
            }

            var img = document.querySelector(codImg);
            var subTitle = document.querySelector(descMod);
            var linkImpo = document.querySelector(".linkImpo");

            if (id === "cyber") {
                img.setAttribute("src", urlImg);
                linkImpo.setAttribute("href", "/cybersecurity");
                subTitle.textContent = vetorDesc[0];
            } else if (id === "inter") {
                img.setAttribute("src", urlImg);
                linkImpo.setAttribute("href", "/internet");
                subTitle.textContent = vetorDesc[1];
            } else if (id === "prog") {
                img.setAttribute("src", urlImg);
                linkImpo.setAttribute("href", "/programacao");
                subTitle.textContent = vetorDesc[2];
            } else if (id === "logi") {
                img.setAttribute("src", urlImg);
                linkImpo.setAttribute("href", "/logica");
                subTitle.textContent = vetorDesc[3];
            } 

            numero++;
            
        }
        numero = 1;

        document.querySelectorAll("article .modulos .playmodulo .mod").forEach((tira) => {
            tira.classList.remove("active");
        });
        
    };
});



// Active do button .mod
document.querySelectorAll("article .modulos .playmodulo .mod").forEach((mod) => {
    mod.addEventListener("click", function() {
        document.querySelectorAll("article .modulos .playmodulo .mod").forEach((tira) => {
            tira.classList.remove("active");
        });
        this.classList.add("active");

        const img = mod.querySelector('img'); 
        const title = mod.querySelector('h1');
        const subTitle = mod.querySelector('p');
        const indicador = mod.querySelector('#example');
        
        const imgSrc = img.getAttribute('src');
        const titleText = title.textContent; 
        const subTitleText = subTitle.textContent;
        const indicator = indicador.textContent;

        var imageModInfo = document.querySelector(".imageModInfo");
        var titleModInfo = document.querySelector(".titleModInfo");
        var subTitleModInfo = document.querySelector(".subTitleModInfo");
        var descModInfo = document.querySelector(".descModInfo");

        imageModInfo.setAttribute("src", imgSrc);
        titleModInfo.textContent = titleText;
        subTitleModInfo.textContent = subTitleText;

        var i;
        if (titleText === "Modulo 1") {
            i = 0;
        } else if (titleText === "Modulo 2") {
            i = 1;
        } else if (titleText === "Modulo 3") {
            i = 2;
        } else if (titleText === "Modulo 4") {
            i = 3;
        } 

        if (indicator === "cyber") {
            descModInfo.textContent = descModInfo1[i];
        } else if (indicator === "inter") {
            descModInfo.textContent = descModInfo2[i];
        } else if (indicator === "prog") {
            descModInfo.textContent = descModInfo3[i];
        } else if (indicator === "logi") {
            descModInfo.textContent = descModInfo4[i];
        } 
    });
});