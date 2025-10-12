import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardComponent({ title, description, img, alt }) {
  return (
    <Box margin={2}>
      <Card sx={{ borderRadius: 3 }}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={img} alt={alt} />
          <CardContent
            sx={{
              backgroundColor: "black",
              color: "primary.light",
              borderBottom: 4,
              borderBlockColor: "white",
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
