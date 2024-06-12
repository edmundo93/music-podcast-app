import { PodcastItemI, PodcastListI } from '@/api/data/Podcast'

export const mockPodcasts: PodcastItemI[] = [
  {
    'im:name': {
      label: 'The Joe Budden Podcast',
    },
    'im:image': [
      {
        label: 'https://example.com/image1.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label: 'https://example.com/image1.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label: 'https://example.com/image1.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    summary: {
      label:
        'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
    },
    'im:price': {
      label: 'Get',
      attributes: {
        amount: '0',
        currency: 'USD',
      },
    },
    'im:contentType': {
      attributes: {
        term: 'Podcast',
        label: 'Podcast',
      },
    },
    rights: {
      label: '© All rights reserved',
    },
    title: {
      label: 'The Joe Budden Podcast - The Joe Budden Network',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
      },
    },
    id: {
      label:
        'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
      attributes: {
        'im:id': '1535809341',
      },
    },
    'im:artist': {
      label: 'The Joe Budden Network',
      attributes: {
        href: 'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '1310',
        term: 'Music',
        scheme:
          'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
        label: 'Music',
      },
    },
    'im:releaseDate': {
      label: '2024-06-12T00:00:00-07:00',
      attributes: {
        label: 'June 12, 2024',
      },
    },
  },
  {
    'im:name': {
      label: 'New Rory & MAL',
    },
    'im:image': [
      {
        label: 'https://example.com/image1.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label: 'https://example.com/image1.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label: 'https://example.com/image1.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    summary: {
      label:
        'New stories, new laughs, new random hot takes that no one asked for... New Rory & Mal\n\nFor advertising opportunities please email PodcastPartnerships@Studio71us.com   \nWe want to make the podcast even better, help us learn how we can: https://bit.ly/2EcYbu4  \nPrivacy Policy: https://www.studio71.com/terms-and-conditions-use/#Privacy%20Policy   ',
    },
    'im:price': {
      label: 'Get',
      attributes: {
        amount: '0',
        currency: 'USD',
      },
    },
    'im:contentType': {
      attributes: {
        term: 'Podcast',
        label: 'Podcast',
      },
    },
    rights: {
      label: '© All Rights Reserved',
    },
    title: {
      label: 'New Rory & MAL - Rory Farrell & Jamil "Mal" Clay & Studio71',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022?uo=2',
      },
    },
    id: {
      label:
        'https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022?uo=2',
      attributes: {
        'im:id': '1572182022',
      },
    },
    'im:artist': {
      label: 'Rory Farrell & Jamil "Mal" Clay & Studio71',
    },
    category: {
      attributes: {
        'im:id': '1310',
        term: 'Music',
        scheme:
          'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
        label: 'Music',
      },
    },
    'im:releaseDate': {
      label: '2024-06-11T01:00:00-07:00',
      attributes: {
        label: 'June 11, 2024',
      },
    },
  },
]

export const podcastList: PodcastListI = {
  feed: {
    author: {
      name: {
        label: 'iTunes Store',
      },
      uri: {
        label: 'http://www.apple.com/itunes/',
      },
    },
    entry: mockPodcasts,
    updated: {
      label: '2024-06-12T08:38:04-07:00',
    },
    rights: {
      label: 'Copyright 2008 Apple Inc.',
    },
    title: {
      label: 'iTunes Store: Top Podcasts in Music',
    },
    icon: {
      label: 'http://itunes.apple.com/favicon.ico',
    },
    link: [
      {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=179537&popId=3',
        },
      },
      {
        attributes: {
          rel: 'self',
          href: 'https://mzstoreservices-int.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
        },
      },
    ],
    id: {
      label:
        'https://mzstoreservices-int.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    },
  },
}
