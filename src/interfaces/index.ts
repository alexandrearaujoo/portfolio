export interface Project {
  id: string;
  title: string;
  type?: string;
  slug?: string;
  thumbnail?: string;
  linkWebsite: string;
  linkRepository: string;
  description?: string;
}
