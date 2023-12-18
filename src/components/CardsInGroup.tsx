import {
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface ICharacterData {
  id: string | number;
  name: string;
  species: string;
  image: string;
  status: string;
  type?: string;
}
interface IParams {
  data: ICharacterData;
  filter: string;
}

export const CardsInGroup = ({ data, filter }: IParams) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/characters/${filter}/${data.id}`);
  };
  return (
    <Grid
      sx={{
        maxWidth: 300,
        height: "400px",
        margin: "20px 10px",
        // border: "2px solid #a0c528",
        borderRadius: "20px",
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "20px 20px 0 0"
        }}
        onClick={handleClick}
      >
        <CardMedia
          component="img"
          height={"70%"}
          image={data.image}
          alt={data.name}
          sx={{
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "20px 20px 0 0"
          }}
        />
        <CardContent
          sx={{
            height: "30%",
          }}
        >
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center", fontWeight: "bold"}}>
            {data.name}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Grid>
  );
};
