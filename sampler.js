export const createRequests = ( journals, startDate, sampleSize ) => {
    let requests = journals.map( journal => {
        let path = `journals/${journal}/works`;
        let query = `sample=${sampleSize}&filter=from-pub-date:${startDate}`;
        let uri = `https://api.crossref.org/${path}?${query}`;
        
        let politeHeader = new Headers();
        politeHeader.append('User-Agent', 'ArticleSampler/0.9 (mailto:herosen@g.ucla.edu)')

        return new Request(uri, politeHeader);
    });
    
    return requests;
}

export const fetchSample = (requests) => {
    let sample = requests.map( async request => {
        let response = await fetch(request);

        if (!response.ok) {
            let message = `An error occurred: ${response.status}`;
            throw new Error(message);
        }

        let json = await response.json();
        let sampleItems = json.message.items;

        return sampleItems;
    });
    
    return Promise.all(sample)
        .then( sample => sample )
        .catch( error => error.message );
}
