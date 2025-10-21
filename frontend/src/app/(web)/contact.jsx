import DetailStack from "@/components/customDetailStack";
import { Box } from "@mui/material";

export default function Contact() {
  return (
    <Box
      component="section"
      maxWidth="sm"
      minHeight="70vh"
      bgcolor={"primary.main"}
      sx={{ paddingY: 6 }}
    >
      <DetailStack
        title={"Contact"}
        textTransform={"uppercase"}
        color={"primary.light"}
        textColor={"primary.light"}
      />
    </Box>
  );
}
