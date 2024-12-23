// Sélection des éléments HTML
const loadButton = document.getElementById("load-pokemon");
const pokemonContainer = document.getElementById("pokemon-container");

// Fonction pour charger les données du Pokémon
async function loadPokemon() {
    try {
        // Appel API pour récupérer les informations de Ditto
        const randomId = Math.floor(Math.random() * 151) + 1; // Pokémon 1 à 151
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

        if (!response.ok) {
            throw new Error("Failed to fetch Pokémon data");
        }

        // Convertir la réponse en JSON
        const data = await response.json();

        // Afficher les informations sur le Pokémon
        displayPokemon(data);
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        pokemonContainer.innerHTML = `<p>Error loading Pokémon. Please try again later.</p>`;
    }
}

// Fonction pour afficher les informations du Pokémon
function displayPokemon(pokemon) {
    // Extraire les données importantes
    const name = pokemon.name;
    const height = pokemon.height;
    const weight = pokemon.weight;
    const spriteUrl = pokemon.sprites.front_default;

    // Construire le contenu HTML
    pokemonContainer.innerHTML = `
    <h2>${name.toUpperCase()}</h2>
    <img src="${spriteUrl}" alt="${name}">
    <p>Height: ${height}</p>
    <p>Weight: ${weight}</p>
  `;
}

// Ajouter un écouteur d'événement sur le bouton
loadButton.addEventListener("click", loadPokemon);
