"use client";
import { Box, Button, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import IAliados from "../../assets/aliados.png";
import IEnemigos from "../../assets/villanos.png";

export default function Dashboard() {
  const router = useRouter();

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box sx={{ height: "100%" }}>
        <h1 style={{ margin: "50px 0  70px 0", textAlign: "center" }}>
          REGISTROS
        </h1>
        <Grid container sx={{ justifyContent: "space-around" }}>
          <Grid
            item
            xl={4}
            sx={{
              width: "450px",
              height: "450px",
              backgroundColor: "#000000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              position: "relative",
              margin: "20px 0",
            }}
          >
            <Box
              sx={{
                border: "2px solid #a0c528",
                width: "90%",
                height: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={IAliados}
                alt="aliados"
                width={250}
                height={300}
                style={{}}
              />
              <Button
                onClick={() => {
                  router.push("/characters/allies");
                }}
                sx={{ width: "50%", height: "50px" }}
                variant="contained"
              >
                Aliados
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xl={4}
            sx={{
              width: "450px",
              height: "450px",
              backgroundColor: "#000000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              margin: "20px 0",
            }}
          >
            <Box
              sx={{
                border: "2px solid #a0c528",
                width: "90%",
                height: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={IEnemigos} width={250} height={300} alt="enemigos" />
              <Button
                onClick={() => {
                  router.push("/characters/enemies");
                }}
                sx={{ width: "50%", height: "50px" }}
                variant="contained"
              >
                Enemigos
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
