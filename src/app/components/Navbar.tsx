"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import Link from "next/link";

const navItems: { id: string; label: string; href: string }[] = [
  // { id: "projects", label: "Projects", href: "/" },
  // { id: "skills", label: "Skills", href: "/" },
  // { id: "about", label: "About", href: "/" },
  // { id: "contact", label: "Contact", href: "/" },
  // {
  //   id: "ai-assistant",
  //   label: "AI Portfolio Assistant",
  //   href: "/ai-assistant",
  // },
];

export default function Navbar() {
  // leftover scoll function if needed later
  // const scrollToId = (id: string) => {
  //   const el = document.getElementById(id);
  //   if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  // };

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
            Nicholas Graham
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1.5 }}>
            {navItems.map((navItem) => (
              <Button
                key={navItem.id}
                size="small"
                component={Link}
                href={navItem.href}
                // onClick={() => scrollToId(navItem.id)}
                sx={{ textTransform: "none", fontSize: 14 }}
              >
                {navItem.label}
              </Button>
            ))}
            <Button
              size="small"
              variant="outlined"
              sx={{ textTransform: "none", ml: 1, borderRadius: 999 }}
              href="/Nicholas-Graham-resume-Nov-22-2025.pdf"
              target="_blank"
            >
              Download Resume PDF
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
