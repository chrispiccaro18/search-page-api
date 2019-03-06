
const test = QUnit.test;

QUnit.module('hash query tests');

function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

test('set search to query', assert => {
    // arrange
    const existingQuery = '';
    const searchTerm = 'alive';
    // act
    const query = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(query, 'searchTerm=alive&page=1');
});

test('set search to query with existing query', assert => {
    // arrange
    const existingQuery = 'searchTerm=dead&page=1';
    const searchTerm = 'alive';
    // act
    const query = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(query, 'searchTerm=alive&page=1');
});

function writePagetoQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

test('write page to existing query', assert => {
    // arrange
    const existingQuery = 'searchTerm=alive&page=1';
    const page = 3;
    // act
    const query = writePagetoQuery(existingQuery, page);
    // assert
    assert.equal(query, 'searchTerm=alive&page=3');
});

function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    return {
        searchTerm: searchParams.get('searchTerm'),
        page: Number(searchParams.get('page'))
    };
}

test('write options from query', assert => {
    // arrange
    const existingQuery = 'searchTerm=alive&page=3';
    const expected = {
        searchTerm: 'alive',
        page: 3
    };
    // act
    const result = readFromQuery(existingQuery);
    // assert
    assert.deepEqual(result, expected);
});