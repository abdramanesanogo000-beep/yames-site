// 1. Tes produits dans un tableau
const produits = [
    { id: 1, nom: "Tensiomètre numérique", prix: 15000, image: "img/tensiometre.jpg" },
    { id: 2, nom: "Thermomètre infrarouge", prix: 8000, image: "img/thermometre.jpg" },
    { id: 3, nom: "Stéthoscope professionn", prix: 45000, image: "img/stethoscope.jpg" },
    { id: 4, nom: "Kit de premiers soinsttf", prix: 22000, image: "img/kit-soins.jpg" }
];

// 2. Fonction qui affiche les produits
function afficherProduits(listeProduits) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // on vide avant de remplir

    listeProduits.forEach(produit => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
      <img src="${produit.image}" alt="${produit.nom}">
      <h3>${produit.nom}</h3>
      <p class="price">${produit.prix.toLocaleString()} FCFA</p>
      <button class="btn-add-cart" data-id="${produit.id}">Ajouter au panier</button>
    `;

        container.appendChild(card);
    });
}

// 3. On lance l'affichage
afficherProduits(produits);