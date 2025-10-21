import DetailStack from "@/components/customDetailStack";
import ProductCard from "@/components/customProductCard";
import { Box, Stack } from "@mui/material";

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
      <Stack
        direction="row"
        spacing={2}
        display="flex"
        gap={1}
        sx={{
          overflowX: "auto",
          scrollBehavior: "smooth",
          alignItems: "center",
          m: 2, // hide scrollbar
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          ScrollbarWidth: "none",
          // optional snapping
          scrollSnapType: "x mandatory",
          "& > *": { scrollSnapAlign: "start" },
        }}
      >
        <ProductCard
          maxWidth={"sm"}
          title={"S&B Botanic Conditioner"}
          description={"The Botanic Conditioner made with.."}
          img={"products/1.png"}
          alt={"product"}
        />
        <ProductCard
          title={"S&B Botanic Shampoo"}
          description={"S&B Botanic Shampoo is a hydrating shampoo.."}
          img={"products/2.png"}
          alt={"product"}
        />
        <ProductCard
          title={"S&B Botanic Oil"}
          description={"S&B Botanic oil is an all in one hair growth oil.."}
          img={"products/3.png"}
          alt={"product"}
        />
        <ProductCard
          title={"S&B Botanic leave-in conditioner"}
          description={"S&B Botanic leave-in conditioner made with.."}
          img={"products/4.png"}
          alt={"product"}
        />
        <ProductCard
          title={"S&B Botanic Butter"}
          description={"S&B Botanic butter is a herb infused butter..."}
          img={"products/5.png"}
          alt={"product"}
        />
        <ProductCard
          title={"S&B Botanic Tea Rinse"}
          description={"S&B Botanic Tea Rinse is a herbal tea for rinse..."}
          img={"products/6.png"}
          alt={"product"}
        />
        <ProductCard
          title={"S&B Botanic treatment conditioner"}
          description={
            "The Botanic treatment conditioner is a protein treatment made with;.."
          }
          img={"products/7.png"}
          alt={"product"}
        />
      </Stack>
    </Box>
  );
}
