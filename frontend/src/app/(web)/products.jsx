import CardComponent from "@/components/customCardComponent";
import DetailStack from "@/components/customDetailStack";
import { Box, Typography } from "@mui/material";

export default function Products() {
  return (
    <Box
      component="section"
      maxWidth="sm"
      alignContent="center"
      bgcolor={"black"}
      paddingTop={2}
      paddingBottom={5}
    >
      <DetailStack
        title={"Our Products"}
        description={"S&B Strands"}
        color={"primary.main"}
        textColor={"primary.light"}
        textTransform={"uppercase"}
      />

      <CardComponent title={"S&B Botanic Conditioner"} description={"The Botanic Conditioner made with.."}/>
    </Box>
  );
}
