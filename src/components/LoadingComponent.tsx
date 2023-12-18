import { Box } from "@mui/material"
import Image from "next/image"
import loadingImage from "../assets/portaLoading.png"

export default function Loading() {
    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image 
                src={loadingImage}
                alt="loading"
                width={500}
                height={500}
            />
            cargadon pagina ....
        </Box>
    )
}