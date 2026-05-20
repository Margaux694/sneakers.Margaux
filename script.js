AOS.init();

//chercher la donnée

fetch("sneakers.json")
  .then(rep => rep.json())
  .then(data => {
    console.log(data);
    afficherProduits(data.produits)
    //afficherService()
    afficherService(data.services)
    //afficherTemoignage()
    afficherTemoignage(data.temoignages)
  });





//role : créer les cartes produits et les afficher
//parametre : tableau de produits
//return : rien car elle affiche
function afficherProduits(tableauDeProduits) {

  tableauDeProduits.forEach(produit => {

    document.querySelector("#cardContainer").innerHTML +=
      `
         <div data-aos="zoom-in-right" class="card w-40">
            <img src="${produit.image}" alt="" class="large-12">
            <div class="card-content">
                <h3>${produit.nom}</h3>
                <p>${produit.description}</p>
                <button class="btn-z">DÉCOUVRIR</button>
            </div>

        </div>
        
        `

  });
}


//Role : créer services et les afficher 
//parametre : tableau serivice 
// rturn : rien car elle affiche 


function afficherService(tableauService) {

  tableauService.forEach(service => {
    document.querySelector("#serviceContainer").innerHTML +=
      `
      <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
        <p><strong>${service.nom}</strong></p>
        <p>${service.description}</p>
    </div>
      `

  });
}

//Role : créer temoignage et les afficher 
//parametre : tableau temeoignage 
// rturn : rien car elle affiche 
function afficherTemoignage(tableauTemoignage) {

  tableauTemoignage.forEach(temoignage => {
    document.querySelector("#cardTemoignage").innerHTML +=
      `
        <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" class="carte-avis mb w-30">
        <p><strong>${temoignage.prenom}</strong></p>
        <p>${temoignage.typeExperience}</p>
        <p>${temoignage.commentaire}</p>
        <p>${temoignage.note}</p>
    </div>
    `

  })

}
