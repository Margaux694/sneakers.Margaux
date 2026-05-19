//chercher la donnée

fetch("sneakers.json")
  .then(rep => rep.json())
  .then(data => {
    console.log(data);
    afficherProduits(data.produits)
  });

  //role : créer les cartes produits et les afficher
  //parametre : tableau de produits
  //return : rien car elle affiche
  function afficherProduits(tableauDeProduits){

    tableauDeProduits.forEach(produit => {

        document.querySelector("#cardContainer").innerHTML +=
        `
         <div class="card">
            <img src="${produit.image}" alt="" class="large-1">
            <div class="card-content">
                <h3>${produit.nom}</h3>
                <p>${produit.description}</p>
                <button class="btn">DÉCOUVRIR</button>
            </div>

        </div>
        
        `
        
    });
  }
