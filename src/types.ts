export interface Service {
  id: string;
  path: string;
  heroImage: string;
  title: string;
  content: string;
  links?: { label: string; url: string }[];
}

export interface NewsItem {
  date: string;
  category: string;
  title: string;
}

export interface NavLink {
  name: string;
  path: string;
  enName: string;
}
