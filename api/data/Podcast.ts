type LabelKeyValueT = { label: string }

type LinkT = {
  attributes: {
    href: string
    type?: string
    rel: string
  }
}

type AuthorT = {
  name: LabelKeyValueT
  uri: LabelKeyValueT
}

type FeedT = {
  author: AuthorT
  entry: PodcastItemI[]
  icon: LabelKeyValueT
  id: LabelKeyValueT
  link: LinkT[]
  rights: LabelKeyValueT
  title: LabelKeyValueT
  updated: LabelKeyValueT
}

type ImageT = LabelKeyValueT & {
  attributes: { height: string }
}

type PriceT = LabelKeyValueT & {
  attributes: {
    amount: string
    currency: string
  }
}

type ContentTypeT = {
  attributes: {
    label: string
    term: string
  }
}

export interface PodcastItemI {
  'im:name': LabelKeyValueT
  'im:image': ImageT[]
  summary: LabelKeyValueT
  'im:price': PriceT
  'im:contentType': ContentTypeT
  rights: LabelKeyValueT
  title: LabelKeyValueT
  link: {
    attributes: {
      rel: string
      type: string
      href: string
    }
  }
  id: {
    label: string
    attributes: {
      'im:id': string
    }
  }
  'im:artist': {
    label: string
    attributes?: {
      href: string
    }
  }
  category: {
    attributes: {
      'im:id': string
      term: string
      scheme: string
      label: string
    }
  }
  'im:releaseDate': {
    label: string
    attributes: {
      label: string
    }
  }
}

export interface PodcastListI {
  feed: FeedT
}
