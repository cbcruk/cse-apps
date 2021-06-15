interface CseImage {
  src: string
}

interface CseThumbnail {
  height: string
  src: string
  width: string
}

interface Metatags {
  'msapplication-tilecolor': string
  'apple-itunes-app': string
  'og:image': string
  'og:type': string
  'theme-color': string
  'og:site_name': string
  'og:title': string
  'msapplication-tileimage': string
  'og:description': string
  'fb:app_id': string
  'naver-site-verification': string
  viewport: string
  'og:locale': string
  'og:url': string
  'google-play-app': string
}

export interface Item {
  cacheId: string
  displayLink: string
  formattedUrl: string
  htmlFormattedUrl: string
  htmlSnippet: string
  htmlTitle: string
  kind: string
  link: string
  pagemap: {
    cse_image: CseImage[]
    cse_thumbnail: CseThumbnail[]
    metatags: Metatags[]
  }
  snippet: string
  title: string
}

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export interface Queries {
  nextPage: NextPage[]
}

export interface NextPage {
  title: string
  totalResults: string
  searchTerms: string
  count: number
  startIndex: number
  inputEncoding: string
  outputEncoding: string
  safe: string
  cx: string
}

export interface ServerState {
  items: Item[]
  queries?: Queries
}
