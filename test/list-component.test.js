import { makeCharacterCard } from '../src/list-component.js';

const test = QUnit.test;

QUnit.module('Create list item');

test('make character card', assert => {
    // arrange
    const expected = /*html*/`
        <li>
            <h2>Rick Sanchez</h2>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Image of Rick Sanchez">
            <p id="species">Species: Human</p>
            <p>Appears in 31 episodes</p>
            <p>Status: Alive</p>
        </li>
    `;
    const character = {
        'id': 1,
        'name': 'Rick Sanchez',
        'status': 'Alive',
        'species': 'Human',
        'type': '',
        'gender': 'Male',
        'origin': {
            'name': 'Earth (C-137)',
            'url': 'https://rickandmortyapi.com/api/location/1'
        },
        'location': {
            'name': 'Earth (Replacement Dimension)',
            'url': 'https://rickandmortyapi.com/api/location/20'
        },
        'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        'episode': [
            'https://rickandmortyapi.com/api/episode/1',
            'https://rickandmortyapi.com/api/episode/2',
            'https://rickandmortyapi.com/api/episode/3',
            'https://rickandmortyapi.com/api/episode/4',
            'https://rickandmortyapi.com/api/episode/5',
            'https://rickandmortyapi.com/api/episode/6',
            'https://rickandmortyapi.com/api/episode/7',
            'https://rickandmortyapi.com/api/episode/8',
            'https://rickandmortyapi.com/api/episode/9',
            'https://rickandmortyapi.com/api/episode/10',
            'https://rickandmortyapi.com/api/episode/11',
            'https://rickandmortyapi.com/api/episode/12',
            'https://rickandmortyapi.com/api/episode/13',
            'https://rickandmortyapi.com/api/episode/14',
            'https://rickandmortyapi.com/api/episode/15',
            'https://rickandmortyapi.com/api/episode/16',
            'https://rickandmortyapi.com/api/episode/17',
            'https://rickandmortyapi.com/api/episode/18',
            'https://rickandmortyapi.com/api/episode/19',
            'https://rickandmortyapi.com/api/episode/20',
            'https://rickandmortyapi.com/api/episode/21',
            'https://rickandmortyapi.com/api/episode/22',
            'https://rickandmortyapi.com/api/episode/23',
            'https://rickandmortyapi.com/api/episode/24',
            'https://rickandmortyapi.com/api/episode/25',
            'https://rickandmortyapi.com/api/episode/26',
            'https://rickandmortyapi.com/api/episode/27',
            'https://rickandmortyapi.com/api/episode/28',
            'https://rickandmortyapi.com/api/episode/29',
            'https://rickandmortyapi.com/api/episode/30',
            'https://rickandmortyapi.com/api/episode/31'
        ],
        'url': 'https://rickandmortyapi.com/api/character/1',
        'created': '2017-11-04T18:48:46.250Z'
    };
    // act
    const result = makeCharacterCard(character);
    // assert
    assert.htmlEqual(result, expected);
});