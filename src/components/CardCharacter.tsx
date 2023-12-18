import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

export const CardCharacter = ({data}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="280"
                image={data?.image}
                alt={data?.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
    )
}