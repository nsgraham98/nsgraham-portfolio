// components/resume/TechnicalSkills.tsx
import { Box, Typography, Stack } from "@mui/material";

const skills = [
  {
    label: "Languages",
    value: "Python, C#, Java, JavaScript, TypeScript, SQL, HTML/CSS",
  },
  {
    label: "Web & App Development",
    value: "React, Next.js, Node.js, Expo, REST APIs",
  },
  {
    label: "Cloud & Platforms",
    value: "Microsoft Power Platform, Azure, Firebase, Vercel, Expo EAS",
  },
  {
    label: "Tools & Technologies",
    value: "Git/GitHub, Firestore, Docker, CI/CD, OAuth2",
  },
  {
    label: "Core Competencies",
    value:
      "Full-Stack Development, Cloud Architecture, Software Testing & QA, Application Security, SDLC, Agile Methods",
  },
];

export function TechnicalSkillsSection() {
  return (
    <Box component="section" mb={4}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Technical Skills
      </Typography>

      <Stack spacing={1}>
        {skills.map((item) => (
          <Box
            key={item.label}
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{ minWidth: { sm: 180 }, mr: { sm: 1 } }}
            >
              {item.label}:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.value}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
