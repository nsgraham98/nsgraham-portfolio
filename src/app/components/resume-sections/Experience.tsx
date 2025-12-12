// components/resume/ExperienceSection.tsx
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export function ExperienceSection() {
  return (
    <Box component="section" mb={4}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Professional Experience
      </Typography>

      <Box mb={3}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ sm: "baseline" }}
        >
          <Box>
            <Typography variant="body2" fontWeight={600}>
              Summer Student - IS&amp;T Apps
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Kingston Midstream, Calgary, AB
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary">
            May 2025 - Aug 2025
          </Typography>
        </Box>

        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          mt={0.5}
        >
          Team Lead: Simon Ngan - simon.ngan@kingstonmidstream.com
        </Typography>

        <List dense sx={{ mt: 1.5, pl: 2 }}>
          {[
            "Worked alongside senior developers and business analysts, gaining hands-on experience with professional development practices and enterprise systems.",
            "Contributed to requirements gathering, design discussions, and structured testing activities across the SDLC.",
            "Supported and helped coordinate User Acceptance Testing (UAT), preparing scenarios, assisting users, and validating feedback.",
            "Worked extensively with Microsoft Power Platform, Dataverse, SharePoint, and SQL Server data via SQL Server Management Studio (SSMS).",
            "Gained experience working within Dev > Test > Prod pipelines, version-controlled solutions, and Power Platform environments.",
            "Helped deliver a production-ready internal application, providing value to the IS&T team and improving workflow efficiency.",
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
