import { Project } from '@/interfaces';

export const getProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
    cache: 'no-cache'
  });

  const projects = (await res.json()) as Project[];

  return projects;
};
