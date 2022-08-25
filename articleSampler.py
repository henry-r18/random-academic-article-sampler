import csv
from crossref.restful import Journals

journals = Journals()

# EDIT LIST OF ISSNS HERE
issns = ['1538-4357']

# SET STARTING PUBLICATION YEAR HERE
startPubDate = '2017'

# SET SAMPLE SIZE HERE (up to 100)
sampleSize = 11

samples = []
for issn in issns:
    for item in journals.works(issn).filter(from_online_pub_date=startPubDate).sample(sample_size=sampleSize):
        sample = []
        authorList = []
        for author in item['author']:
            authorList.append(author['given'] + ' ' + author['family'])
        samples.append([
            item['URL'],
            item['title'][0],
            ', '.join(authorList),
            item['container-title'][0],
            item['issued']['date-parts'][0][0]
        ])

with open('samples.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(samples)
