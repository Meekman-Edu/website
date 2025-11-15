import { ProductsType } from "@/types";

export const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
];
export const products: ProductsType[] = [
  {
    title: "Nursery Textbooks",
    description: "Colorful and engaging books tailored for nursery pupils.",
    image: "/images/01.jpg",
  },
  {
    title: "Primary School Textbooks",
    description: "Curriculum-aligned books for primary school learners.",
    image: "/images/02.jpg",
  },
  {
    title: "Secondary School Textbooks",
    description:
      "Comprehensive textbooks for junior and senior secondary students.",
    image: "/images/03.jpg",
  },
  {
    title: "Storybooks & Literature",
    description: "Fables, short stories, and novels to build reading culture.",
    image: "/images/03.jpg",
  },
  {
    title: "Educational Charts",
    description: "Visual learning aids for classrooms and libraries.",
    image: "/images/02.jpg",
  },
];
