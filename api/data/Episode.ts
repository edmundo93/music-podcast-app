export interface EpisodeI {
  episodeUrl: string
  artistId?: number
  artistName?: string
  artistIds: number[]
  trackTimeMillis: number
  previewUrl: string
  genres:
    | {
        name: string
        id: string
      }[]
    | string[]
  episodeGuid: string
  trackId: number
  description: string
  collectionId: number
  collectionName: string
  closedCaptioning: string
  feedUrl: string
  shortDescription: string
  artworkUrl60: string
  artistViewUrl: string
  trackViewUrl: string
  trackName: string
  releaseDate: string
  country: string
  collectionViewUrl: string
  artworkUrl160: string
  episodeFileExtension: string
  episodeContentType: string
  artworkUrl600: string
  kind: string
  wrapperType: string
  collectionCensoredName?: string
  trackCensoredName?: string
  artworkUrl30?: string
  artworkUrl100?: string
  collectionPrice?: number
}

export interface EpisodesI {
  resultCount: number
  results: EpisodeI[]
}
