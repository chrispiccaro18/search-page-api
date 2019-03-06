
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