export interface Role {
  company: string;
  title: string;
  start: string; // YYYY-MM
  end: string | null; // YYYY-MM, or null for current
  domain?: string;
  summary: string;
  highlights: string[];
  stack?: string[];
}

export const experience: Role[] = [
  {
    company: 'Big Think Capital',
    title: 'Software Developer',
    start: '2025-06',
    end: '2026-06',
    domain: 'Lending · Fintech',
    summary:
      'Owned a customer-facing loan application portal end to end, from architecture to deployment, on a small, fast-moving team.',
    highlights: [
      'Architected and built the customer-facing loan application portal with React, TypeScript, NestJS, MongoDB, Tailwind, and AWS.',
      'Designed RESTful APIs and NestJS services covering business logic, validation, data persistence, and third-party integrations.',
      'Integrated the portal with the existing Salesforce architecture so customer data flowed straight into sales and operations workflows.',
      'Built a custom error logging and diagnostics system that gave the team real-time visibility into runtime failures and faster incident response.',
      'Grew a library of reusable React components and complex forms, built for maintainability and a clean user experience.',
      'Led the adoption of AI-assisted design tools to modernize the portal and tighten usability and visual consistency.',
    ],
    stack: ['React', 'TypeScript', 'NestJS', 'MongoDB', 'Tailwind', 'AWS', 'Salesforce'],
  },
  {
    company: 'AIPSO',
    title: 'Software Engineer',
    start: '2024-10',
    end: '2025-06',
    domain: 'Insurance',
    summary: 'Built and maintained the in-house systems that calculate automobile insurance premiums.',
    highlights: [
      'Developed and maintained premium calculation systems where accuracy is the requirement, not a nice-to-have.',
      'Partnered with actuaries and data scientists to design features that improved calculation accuracy and streamlined underwriting.',
    ],
  },
  {
    company: 'Saberin Systems',
    title: 'Software Developer',
    start: '2023-11',
    end: '2024-10',
    summary: 'Shipped features and fixes across .NET web applications backed by SQL databases.',
    highlights: [
      'Built web applications with C#, ASP.NET MVC, and Entity Framework on the back end and Blazor, jQuery, and SCSS on the front end.',
      'Picked up Microsoft Blazor on the job and helped rebuild an existing application with it.',
      'Worked in a Jira and Git/Bitbucket workflow on a shared, multi-developer codebase.',
    ],
    stack: ['C#', 'ASP.NET', 'MVC', 'Entity Framework', 'Blazor', 'SQL', 'jQuery'],
  },
];
