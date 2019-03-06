import { writeSearchToQuery, writePagetoQuery, readFromQuery } from '../src/hash-query.js';

const test = QUnit.test;

QUnit.module('hash query tests');

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

test('write page to existing query', assert => {
    // arrange
    const existingQuery = 'searchTerm=alive&page=1';
    const page = 3;
    // act
    const query = writePagetoQuery(existingQuery, page);
    // assert
    assert.equal(query, 'searchTerm=alive&page=3');
});

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