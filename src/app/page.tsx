import {
  Box,
  Typography,
  Stack,
  Link,
  Container,
  Divider,
} from "@mui/material";
import Navbar from "@/app/components/Navbar";
import { FloatingTOC } from "./components/FloatingTOC";
import {
  ProfessionalProfileSection,
  TechnicalSkillsSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  ResumeHeader,
} from "@/app/components/resume-sections/index";
import PortfolioAssistantWidget from "@/app/components/PortfolioAssistantWidget.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingTOC />

      {/* Resume Content */}
      <Container maxWidth="md" sx={{ mt: 2 }}>
        {/* Header */}
        <ResumeHeader />

        <Divider sx={{ mb: 3 }} />

        {/* Resume Sections */}
        <Box sx={{ pb: 4 }}>
          <ProfessionalProfileSection />
          <TechnicalSkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
        </Box>
      </Container>

      <PortfolioAssistantWidget />
    </>
  );
}
