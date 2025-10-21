import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ProductCard({
  title,
  description,
  img,
  alt,
  height = "300",
}) {
  return (
    <Box margin={2}>
      <Card sx={{ borderRadius: 3, width: "80vw" }}>
        <CardActionArea>
          <CardMedia component="img" height={height} image={img} alt={alt} />
          <CardContent
            sx={{
              backgroundColor: "white",
              color: "primary.dark",
              borderBottom: 4,
              borderBlockColor: "gray",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
