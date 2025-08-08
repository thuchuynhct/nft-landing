export interface Header {
  logo: {
    src: string;
    alt: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  actions: Array<{
    label: string;
    type: 'primary' | 'secondary';
    href: string;
  }>;
}

export interface Hero {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
}

export interface Feature {
  id: number;
  title: string;
  image: string;
  description: string;
  badge?: string;
}

export interface Collection {
  title: string;
  items: CollectionItem[];
}

export interface CollectionItem {
  id: number;
  image: string;
  title: string;
}
export interface ContentSections {
  calendar: Collection;
  populars: Collection;
  promotions: Collection;
}
export interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
    src?: string;
  }>;
}

export interface AppData {
  header: Header;
  heros: Hero[];
  features: Feature[];
  newCollections: Collection;
  contentSections: ContentSections;
  footer: FooterSection[];
}
