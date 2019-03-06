export function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    return {
        searchTerm: searchParams.get('searchTerm'),
        page: Number(searchParams.get('page'))
    };
}

export function writePagetoQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}