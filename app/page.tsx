import {
  Box,
  Typography,
  Stack,
  Link,
  Container,
  Divider,
} from "@mui/material";
import Navbar from "@/app/components/Navbar";
import { ProfessionalProfileSection } from "@/app/components/resume-sections/ProfessionalProfile";
import { TechnicalSkillsSection } from "@/app/components/resume-sections/TechnicalSkills";
import { ExperienceSection } from "@/app/components/resume-sections/Experience";
import { EducationSection } from "@/app/components/resume-sections/Education";
import { ProjectsSection } from "@/app/components/resume-sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 2 }}>
        {/* Header */}
        <Box component="header" mb={3}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Nicholas Graham
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={0.5}>
            <Typography variant="body2" color="text.secondary">
              Calgary, AB, Canada
            </Typography>
            <Typography variant="body2" color="text.secondary">
              •
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link href="mailto:nsgraham98@gmail.com" underline="hover">
                nsgraham98@gmail.com
              </Link>
            </Typography>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1} mt={0.5}>
            <Typography variant="body2" color="text.secondary">
              <Link
                href="https://www.linkedin.com/in/nicholas-s-graham"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                linkedin.com/in/nicholas-s-graham
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              •
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link
                href="https://github.com/nsgraham98"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                github.com/nsgraham98
              </Link>
            </Typography>
          </Stack>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Resume Sections */}
        <Box sx={{ maxWidth: 800, mx: "auto", pb: 4, px: 2 }}>
          <ProfessionalProfileSection />
          <TechnicalSkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
        </Box>
      </Container>
    </>
  );
}
