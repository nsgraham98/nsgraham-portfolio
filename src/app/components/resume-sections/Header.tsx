import { Box, Typography, Stack, Link, Container } from "@mui/material";

export function ResumeHeader() {
  return (
    <Box id="contact" component="header" mb={3}>
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
  );
}
