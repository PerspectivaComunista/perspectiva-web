export type Author = {
  fullName: string;
  id: string;
  shortName: string;
};

export type Article = {
  author: string;
  coverUrl: string;
  createdAt: string;
  likes: number;
  slug: string;
  text: string;
  title: string;
  id: string;
  category: string;
};

export type Instagram = {
  imageUrl: string;
  createdAt: string;
  url: string;
  id: string;
  type: string;
  description: string;
};
