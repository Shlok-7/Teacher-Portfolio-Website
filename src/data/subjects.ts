
export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'ppt' | 'link';
  url: string;
}

export interface Subject {
  id: string;
  title: string;
  slug: string;
  description: string;
  resources: Resource[];
}

export const subjects: Subject[] = [
  {
    id: '1',
    title: 'Operating System',
    slug: 'operating-system',
    description: 'Fundamentals of operating systems, process management, memory management, and file systems.',
    resources: [
      {
        id: '1-1',
        title: 'Introduction to Operating Systems',
        type: 'pdf',
        url: 'https://drive.google.com/file/d/1oPhmdmFEwgb0WiOG6saMgSuPYnfrQFun/view?usp=sharing',
      },
      {
        id: '1-2',
        title: 'Process Management',
        type: 'ppt',
        url: 'https://drive.google.com/file/d/1TB63vrVJIpafz2JQoLPbyKWw8EVhY73E/view?usp=sharing',
      },
      {
        id: '1-3',
        title: 'Memory Management Techniques',
        type: 'pdf',
        url: 'https://drive.google.com/file/d/1g7K3CugQPQKckg2-AhlUgooxSPXVyo5m/view?usp=sharing',
      },
    ],
  },
  {
    id: '2',
    title: 'Software Engineering',
    slug: 'software-engineering',
    description: 'Software development lifecycle, requirements engineering, and design patterns.',
    resources: [
      {
        id: '2-1',
        title: 'Software Development Lifecycle',
        type: 'pdf',
        url: '#',
      },
      {
        id: '2-2',
        title: 'Requirements Engineering',
        type: 'ppt',
        url: '#',
      },
      {
        id: '2-3',
        title: 'Design Patterns',
        type: 'pdf',
        url: '#',
      },
    ],
  },
  {
    id: '3',
    title: 'Object Oriented Programming',
    slug: 'object-oriented-programming',
    description: 'Principles of OOP, inheritance, polymorphism, encapsulation, and abstraction.',
    resources: [
      {
        id: '3-1',
        title: 'OOP Fundamentals',
        type: 'pdf',
        url: '#',
      },
      {
        id: '3-2',
        title: 'Inheritance and Polymorphism',
        type: 'ppt',
        url: '#',
      },
      {
        id: '3-3',
        title: 'Design Principles and Patterns',
        type: 'pdf',
        url: '#',
      },
    ],
  },
];

export const getSubjectBySlug = (slug: string): Subject | undefined => {
  return subjects.find((subject) => subject.slug === slug);
};
