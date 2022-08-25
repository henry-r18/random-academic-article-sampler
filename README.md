# Random Academic Article Sampler
A small web app to get a random sample of articles from an academic journal using Crossref's REST API. This can be useful for creating profiles of academic domains.

## Parameters and data
Enter the ISSN of the journal you would like to sample, the sample size (up to 100), and the starting date for the sample (i.e. the earliest publication date you would accept in the sample). The web app displays a preview of the sample returned from the [Crossref REST API](https://www.crossref.org/documentation/retrieve-metadata/rest-api/). You can download the complete sample as an array of [Crossref Work](https://api.crossref.org/swagger-ui/index.html) objects in JSON.

## GitHub Pages site
Here is a [GitHub Pages](https://henry-r18.github.io/random-academic-article-sampler/) site serving the sampler.

## Python script
The Python file (articleSampler.py) accomplishes nearly the same thing as the JavaScript app, but without a front-end. It also returns more limited metadata and outputs CSV rather than JSON.
