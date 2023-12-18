"use client";
import { CardCharacter } from "@/components/CardCharacter";
import Loading from "@/components/LoadingComponent";
import { getCharacterById } from "@/services/getData";
import {
  Box, Button
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function AllyDetail({ params }) {
  const router = useRouter();
  const { id } = params;
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<any>(null)

  const routBack = (species) => {
    if (species === "Human" || species === "Humanoid") router.push("/characters/allies")
    if (species === "Alien") router.push("/characters/enemies")
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getCharacterById(id)
        console.log("res", res); 
        setData(res)
        setLoading(!loading)
      } catch (error) {
        console.log(error)
      }
    } 
    getData()
  }, []);
  if (loading) return <Loading />

  return (
    <>
      <Box sx={{display:"flex", justifyContent: "space-around", margin:"20px"}}>
        <h1>Aliado: {data.name}</h1>
        <Button onClick={()=>{routBack(data.species)}} variant="contained">BACK</Button>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data && (
          <CardCharacter data={data} />
        )}
      </Box>
    </>

  );
}
