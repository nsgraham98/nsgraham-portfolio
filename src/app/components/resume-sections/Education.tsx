// components/resume/EducationSection.tsx
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export function EducationSection() {
  return (
    <Box component="section" mb={4}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Education
      </Typography>

      <Box>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ sm: "baseline" }}
        >
          <Box>
            <Typography variant="body2" fontWeight={600}>
              Software Development (Graduating Dec. 2025)
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Southern Alberta Institute of Technology (SAIT), Calgary, AB
            </Typography>
          </Box>
        </Box>

        <List dense sx={{ mt: 1.5, pl: 2 }}>
          {[
            "Coursework: Object-Oriented Programming, Database Programming, Web Development, Software Testing, Software Security, Cloud Computing (Azure), Capstone Project, UI/UX.",
            "Skills: Full-Stack Development, Database Design, Cloud Architecture (Azure), Software Testing & QA, Application Security, SDLC, Agile Methods.",
            "GPA: 3.7.",
            "Capstone Project: Tutti - AI powered royalty-free music search.",
          ].map((text) => (
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
    </Box>
  );
}
