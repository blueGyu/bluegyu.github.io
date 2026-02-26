import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export type ProjectFrontmatter = {
  title: string;
  date: string;
  status?: "in-progress" | "shipped";
  summary?: string;
  role?: string;
  stack?: string[];
  tags?: string[];
  links?: Record<string, string>;
  highlights?: string[];
  lessons?: string[];
  draft?: boolean;
};

export type PostFrontmatter = {
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
  draft?: boolean;
};

export type ProjectItem = ProjectFrontmatter & { slug: string };
export type PostItem = PostFrontmatter & { slug: string };

const projectsDirectory = path.join(process.cwd(), "content", "projects");
const postsDirectory = path.join(process.cwd(), "content", "posts");

const parseMarkdown = (fullPath: string) => {
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content };
};

const sortByDateDesc = (a: { date: string }, b: { date: string }) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export const getAllProjects = (): ProjectItem[] => {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = parseMarkdown(path.join(projectsDirectory, file));
      return { slug, ...(data as ProjectFrontmatter) };
    })
    .filter((item) => !item.draft)
    .sort(sortByDateDesc);
};

export const getAllPosts = (): PostItem[] => {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = parseMarkdown(path.join(postsDirectory, file));
      return { slug, ...(data as PostFrontmatter) };
    })
    .filter((item) => !item.draft)
    .sort(sortByDateDesc);
};

export const getProjectBySlug = async (slug: string) => {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const { data, content } = parseMarkdown(fullPath);
  if ((data as ProjectFrontmatter).draft) {
    return null;
  }
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);
  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    contentHtml: processed.toString()
  };
};

export const getPostBySlug = async (slug: string) => {
  if (slug.startsWith("_")) {
    return null;
  }
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const { data, content } = parseMarkdown(fullPath);
  if ((data as PostFrontmatter).draft) {
    return null;
  }
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);
  return {
    slug,
    frontmatter: data as PostFrontmatter,
    contentHtml: processed.toString()
  };
};
