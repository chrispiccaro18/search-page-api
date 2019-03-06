const test = QUnit.test;

QUnit.module('Create list item');

function makeCharacterCard() {
    return /*html*/`
        <li>
            <h2>Rick Sanchez</h2>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Image of Rick Sanchez">
            <p>Appears in 30 episodes</p>
            <p>Status: Alive</p>
        </li>
    `;
}

test('make character card', assert => {
    // arrange
    const expected = /*html*/`
        <li>
            <h2>Rick Sanchez</h2>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Image of Rick Sanchez">
            <p>Appears in 30 episodes</p>
            <p>Status: Alive</p>
        </li>
    `;
    // act
    const result = makeCharacterCard();
    // assert
    assert.equal(result, expected);
});