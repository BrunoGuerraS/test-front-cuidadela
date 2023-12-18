"use client";
import { CardsInGroup } from "@/components/CardsInGroup";
import Loading from "@/components/LoadingComponent";
import { ICharacter } from "@/interfaces/ICharacter";
import { IfilterData } from "@/interfaces/IfilterData";
import { getCharacters } from "@/services/getData";
import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const filterData: IfilterData = {
  allies: "Human",
  enemies: "Alien",
};

export default function Allies({ params }) {
  const { filter }: { filter: "allies" | "enemies" } = params;
  const [data, setData] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const router = useRouter();
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      if (!filterData[filter]) router.push("/dashboard");
      const res = await getCharacters(filterData[filter], page);

      if (res.length === 0) {
        setHasMore(false);
      }

      setData((prevData) => [...prevData, ...res]);
      setLoading(!loading);
    } catch (error) {
      console.log(error);
    }
  };
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20 && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  if (!loading) return <Loading />;
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", margin: "20px" }}
      >
        <h1>{filter.toUpperCase()}</h1>
        <Button
          onClick={() => {
            router.push("/dashboard");
          }}
          variant="contained"
        >
          BACK
        </Button>
      </Box>
      <Grid
        container
        sx={{
          justifyContent: "center",
        }}
      >
        {data &&
          data.map((character, index) => {
            return (
              <CardsInGroup key={index} data={character} filter={filter} />
            );
          })}
        {loadingMore && <h2>Loading....</h2>}
      </Grid>
    </>
  );
}
