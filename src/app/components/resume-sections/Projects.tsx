// components/resume/ProjectsSection.tsx
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import { title } from "process";

const projects = [
  {
    title: "IT Change Request App",
    tech: "Microsoft Power Platform - Power Apps, Power Automate, Dataverse",
    bullets: [
      "Designed and built a Power Apps Model-Driven App to modernize the company's IT Change Request process.",
      "Integrated Microsoft Dataverse, SharePoint, and legacy IT systems for unified and secure data management.",
      "Worked closely with IT stakeholders to gather requirements, build prototypes, conduct UAT, and deliver a production-ready solution.",
      "Deployed to production through a structured Dev > Test > Prod pipeline.",
    ],
  },
  {
    title: "Tutti - AI powered royalty-free music search",
    tech: "React, Next.js, Node.js",
    link: "https://ai-music-search.vercel.app/",
    bullets: [
      "Developed an AI-driven music search app using OpenAI GPT-4o to convert user prompts into searches against a royalty-free music database.",
      "Built interactive features including music search, streaming, downloading, user profiles, and playlist management.",
      "Implemented OAuth2 + Firebase Authentication for secure user logins and persistent user profiles.",
      "Designed a Firestore database for storing profiles, playlists, and session data.",
      "Implemented serverless APIs using Next.js API routes for AI orchestration and API integration.",
      "Deployed on Vercel with automated GitHub Actions CI/CD, enabling continuous deployment and version-controlled builds.",
    ],
  },
  {
    title: "Diet Analysis App (Azure Cloud Application)",
    tech: "Azure Functions (Python), Azure Static Web Apps, Azure Blob Storage, GitHub Actions CI/CD",
    bullets: [
      "Designed and developed a cloud-based diet analysis application hosted on Microsoft Azure.",
      "Built a Python-based Azure Function App to process nutritional data and generate analysis results.",
      "Implemented a Static Web App frontend for users to view analysis results through a simple web interface.",
      "Used Azure Blob Storage to securely store input datasets and processed outputs.",
      "Configured GitHub Actions CI/CD to automate builds, testing, and continuous deployment.",
      "Applied cloud architecture and serverless concepts to create a scalable, cost-efficient solution.",
    ],
  },
  {
    title: "Student Information System Database (SQL)",
    tech: "SQL, Relational Modeling, Database Normalization",
    bullets: [
      "Designed and implemented a mock student information system to practice SQL, relational modeling, and database normalization.",
      "Developed complex queries for reporting, filtering, and relational data retrieval.",
    ],
  },
];

export const projectIds = projects.map(
  (project: { id?: string; title: string }) => ({
    id: cleanTitleToId(project.title),
    title: project.title,
  })
);

function cleanTitleToId(title: string) {
  return `project-${title}`
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

export function ProjectsSection() {
  return (
    <Box id="projects" component="section" mb={4}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Project Experience
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        {projects.map((project) => (
          <Box id={cleanTitleToId(project.title)} key={project.title}>
            <Typography variant="body2" fontWeight={600}>
              {project.title}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
            >
              {project.tech}{" "}
            </Typography>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="caption" color="primary">
                  {project.link}
                </Typography>
              </Link>
            )}

            <List dense sx={{ mt: 1, pl: 2 }}>
              {project.bullets.map((text) => (
                <ListItem key={text} sx={{ py: 0 }}>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "body2",
                      color: "text.secondary",
                    }}
                    primary={text}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
