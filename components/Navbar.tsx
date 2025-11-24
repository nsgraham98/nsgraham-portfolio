"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="md">
        <Toolbar
          disableGutters
          sx={{ py: 1.5, justifyContent: "space-between" }}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            Nick Graham
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1.5 }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                size="small"
                onClick={() => scrollToId(section.id)}
                sx={{ textTransform: "none", fontSize: 14 }}
              >
                {section.label}
              </Button>
            ))}
            <Button
              size="small"
              variant="outlined"
              sx={{ textTransform: "none", ml: 1, borderRadius: 999 }}
              href="/Nicholas-Graham-resume-Nov-22-2025.pdf"
              target="_blank"
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
