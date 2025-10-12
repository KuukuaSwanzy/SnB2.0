import DetailStack from "@/components/customDetailStack";
import { Box } from "@mui/material";

const pageTitle = "Special Offers"
const pageDescription = "Pamper Yourself at Special Prices"
const pageColor = "secondary.main"

export default function SpecialOffers() {
    return (
        <Box 
            component="section" 
            maxWidth="sm" 
            height="50vh" 
            alignContent="center" 
            sx={{ backgroundColor: "gray" }}
        >
            <DetailStack 
                title={pageTitle} 
                description={pageDescription} 
                color={pageColor} 
            />
        </Box>
    )
}