// components/resume/ProfessionalProfile.tsx
import { Box, Typography } from "@mui/material";

export function ProfessionalProfileSection() {
  return (
    <Box component="section" mb={4}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Professional Profile
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Junior software developer with experience building full-stack, cloud,
        and AI-powered applications using modern web technologies. Skilled in
        React, Next.js, Azure, Power Platform, and database-driven systems, with
        a solid foundation in testing, security, and SDLC practices.
        Collaborative, quick to learn, and effective at turning requirements
        into reliable, production-ready software solutions.
      </Typography>
    </Box>
  );
}
