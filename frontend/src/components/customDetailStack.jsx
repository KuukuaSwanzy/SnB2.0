import { Divider, Stack, Typography } from "@mui/material";

export default function DetailStack({ title, description, color, fontWeight }) {
  return (
    <Stack margin={3}>
      <Typography component="h1" variant="h5" textAlign="center" fontWeight={fontWeight}>
        {title}
      </Typography>
      <Divider
        variant="middle"
        sx={{ color: color, border: 3, mx: 18, my: 2 }}
      />
      <Typography component="p" variant="subtitle1" textAlign="center">
        {description}
      </Typography>
    </Stack>
  );
}
