// app/ai-assistant/projectData.ts
export const projectData = [
  {
    slug: "it-change-request-app",
    title: "IT Change Request App",
    techStack: [
      "Microsoft Power Platform",
      "Power Apps (Model-Driven)",
      "Power Automate",
      "Dataverse",
      "SharePoint",
      "SQL Server",
    ],
    summary:
      "An enterprise Model-Driven Power Apps solution that modernized the IT Change Request process, improving data consistency, workflow automation, and process visibility.",
    problem:
      "The company’s IT Change Request process was fragmented across emails, spreadsheets, and legacy systems, causing delays and inconsistent data.",
    solution:
      "A centralized Model-Driven application built on Dataverse, integrated with SharePoint and legacy systems, supporting structured workflows, UAT, and Dev > Test > Prod deployments.",
    responsibilities: [
      "Designed and built a Model-Driven Power Apps solution for managing IT change requests.",
      "Integrated Dataverse, SharePoint, and legacy IT systems for consistent and secure data handling.",
      "Worked closely with IT stakeholders to gather requirements and build iterative prototypes.",
      "Helped prepare and execute User Acceptance Testing (UAT), validating user workflows and feedback.",
      "Supported deployment through Dev > Test > Prod pipelines using managed solutions and versioning.",
    ],
    notableFeatures: [
      "Unified data model using Dataverse tables.",
      "Automated workflows using Power Automate for approvals and notifications.",
      "Role-based access for IT teams and managers.",
      "Production-ready deployment with environment-based ALM.",
    ],
    impact:
      "Improved workflow efficiency and visibility for the IT department, reducing manual coordination and data inconsistencies.",
  },
  {
    slug: "tutti-ai-music-search",
    title: "Tutti — AI-Powered Royalty-Free Music Search",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "OpenAI GPT-4o",
      "Firebase Authentication",
      "Firestore",
      "Vercel",
      "GitHub Actions",
    ],
    url: "https://ai-music-search.vercel.app/",
    summary:
      "A web application that uses OpenAI GPT-4o to convert natural-language user prompts into intelligent searches against a royalty-free music catalog.",
    problem:
      "Creators often struggle to find appropriate royalty-free music because traditional metadata-based search doesn’t understand mood or creative intent.",
    solution:
      "Built an AI-driven search engine that interprets user prompts using GPT-4o, generates search tags, and retrieves matching tracks with improved relevance.",
    responsibilities: [
      "Developed a full Next.js app supporting AI-powered search, profile management, and playlist features.",
      "Built music search, streaming, downloading, and playlist management.",
      "Implemented OAuth2 + Firebase Authentication for secure access.",
      "Designed a Firestore database for user profiles, playlists, and session tracking.",
      "Created serverless API routes for OpenAI request orchestration and Jamendo API integration.",
      "Deployed via Vercel with automated CI/CD using GitHub Actions.",
    ],
    notableFeatures: [
      "GPT-powered natural-language music search.",
      "User playlists, favorites, and listening history.",
      "Secure authentication with OAuth2 + Firebase Auth.",
      "Serverless architecture using Next.js API routes.",
      "Production-ready deployment with CI/CD automation.",
    ],
    impact:
      "Delivered a modern AI-driven search experience that helps users quickly discover royalty-free music aligned with their creative intent.",
  },
  {
    slug: "diet-analysis-app",
    title: "Diet Analysis App (Azure Cloud Application)",
    techStack: [
      "Azure Functions (Python)",
      "Azure Static Web Apps",
      "Azure Blob Storage",
      "Azure Portal",
      "GitHub Actions CI/CD",
      "Python",
    ],
    summary:
      "A cloud-based diet analysis application built on Microsoft Azure, using serverless architecture to process nutritional datasets and deliver results through a lightweight web interface.",
    problem:
      "Users needed a simple, scalable way to analyze nutritional datasets without installing software or handling large files locally.",
    solution:
      "Developed a Python-powered Azure Function for data processing, a Static Web App frontend for visualizing results, and integrated Azure Blob Storage for secure dataset handling—all deployed through automated GitHub Actions pipelines.",
    responsibilities: [
      "Designed and developed a cloud-based diet analysis application using Microsoft Azure.",
      "Built a Python Azure Function App to process nutritional data and generate analysis results.",
      "Developed a Static Web App frontend to let users view diet analysis results through a simple UI.",
      "Implemented Azure Blob Storage for secure handling of input datasets and processed outputs.",
      "Set up GitHub Actions for automated builds, testing, and continuous deployment.",
      "Applied serverless and cloud architecture principles to ensure scalability and cost efficiency.",
    ],
    notableFeatures: [
      "Serverless compute pipeline using Azure Functions.",
      "Frontend deployed through Azure Static Web Apps.",
      "Secure data handling through Azure Blob Storage.",
      "GitHub Actions CI/CD automation for deployments.",
      "Scalable architecture with minimal operational overhead.",
    ],
    impact:
      "Delivered a cost-efficient, cloud-native solution that processes nutritional data at scale and provides users with accessible analysis results through a clean web interface.",
  },
  {
    slug: "student-information-system-database",
    title: "Student Information System Database (SQL)",
    techStack: ["SQL", "Relational Modeling", "Database Normalization"],
    summary:
      "A relational database system designed to simulate a student information system, focusing on schema design, normalization, and complex SQL querying.",
    problem:
      "Needed a realistic environment for practicing SQL queries and relational database design using real-world data relationships.",
    solution:
      "Built a normalized relational schema modeling students, courses, enrollment, instructors, and reporting workflows.",
    responsibilities: [
      "Designed a normalized relational schema for a student information system.",
      "Implemented SQL tables, relationships, constraints, and indexing.",
      "Developed complex SQL queries for joins, filtering, reporting, and aggregation.",
    ],
    notableFeatures: [
      "3NF-normalized database design.",
      "Complex join-based reporting queries.",
      "Realistic academic data relationships.",
    ],
    impact:
      "Strengthened SQL fluency and understanding of relational modeling for enterprise data systems.",
  },
];
