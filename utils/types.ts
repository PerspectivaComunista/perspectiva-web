export type GeneralInfo = {
  buttons: {
    discord: { icon: string; name: string; url: string };
    facebook: { icon: string; name: string; url: string };
    instagram: { icon: string; name: string; url: string };
    tiktok: { icon: string; name: string; url: string };
    youtube: { icon: string; name: string; url: string };
  };
  donate: string;
  header: { text: string; title: string };
  join: { button: string; joinForm: string; text: string };
  logo: string;
  navText: string;
  postsShowMore: Post;
};

export type Member = {
  description: string;
  imageUrl: string;
  createdAt: string;
  name: string;
};

export type Post = {
  imageUrl: string;
  createdAt: string;
  url: string;
  id: string;
  type: string;
  description: string;
};

export type Analysis = {
  createdAt: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  likes: number;
  slug: string;
  text: string;
  title: string;
};

export type Comment = {
  createdAt: string;
  createdBy: string;
  text: string;
};

export type Campaign = {
  createdAt: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  likes: number;
  slug: string;
  text: string;
  title: string;
};
