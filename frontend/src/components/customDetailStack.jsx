import { Divider, Stack, Typography } from "@mui/material";

export default function DetailStack({ title, description, color }) {
  return (
    <Stack sx={{ backdropFilter: "blur(10px)", margin: 1, borderRadius: 4 }}>
      <Typography component="h1" variant="h5" textAlign="center">
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
