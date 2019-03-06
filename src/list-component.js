export function makeCharacterCard(character) {
    const html = /*html*/`
        <li>
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="Image of ${character.name}">
            <p id="species">Species: ${character.species}</p>
            <p>Appears in ${character.episode.length} ${character.episode.length > 1 ? 'episodes' : 'episode'}</p>
            <p>Status: ${character.status}</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const characterList = document.getElementById('character-list');

export default function loadCharacterCards(characters) {
    while(characterList.children.length > 0) {
        characterList.lastElementChild.remove();
    }
    characters.forEach(character => {
        const dom = makeCharacterCard(character);
        characterList.appendChild(dom);
    });
}