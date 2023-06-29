import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { getSearchResults } from "./api/youtube";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const App = () => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [loaded, setLoaded] = React.useState(true);

  const search = () => {
    setLoaded(false);
    getSearchResults(query).then(result => {
      // setMovies(result);
      console.log(result);
      setResults(result);
      console.log(result);
      setLoaded(true);
    })
  }

  const handleSearchQueryChange = (event) => {
    setQuery(event.target.value);
    console.log(query);
  }

  return (
    <>
      <Container
        sx={{
          backgroundColor: 'black',
          marginTop: 0,
          marginLeft: 'auto',
          height: '100vh',
          width: '100vw',
          minWidth: '100vw',
          position: 'relative',
          overflowX: 'hidden'
        }}
      >
        <TextField sx={{
          marginTop: '1rem',
          backgroundColor: 'white',
          width: '80vw',
        }}
          onChange={handleSearchQueryChange}
          fullWidth placeholder="type your search phrase here" id="fullWidth" />
        <IconButton aria-label="search" onClick={search}>
          <SearchIcon sx={{
            marginTop: '1rem',
            color: 'white',
            fontSize: '3rem'
          }}
          />
        </IconButton>
        {loaded &&
          <Grid container spacing={2}
            sx={{
              backgroundColor: 'black',
            }}>
            {results.map((r, index) => (
              <Grid key={r.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Tooltip title={r.title} placement="top">

                <Card sx={{padding: '0.3rem'}}>
                  <CardMedia
                    image={r.thumbnails.high.url}
                    title="green iguana"
                    sx={{ height: 360 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div"
                      sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 1,
                      }}
                    >
                      {r.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary"
                      sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                      }}
                    >
                      {r.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Download</Button>
                  </CardActions>
                </Card>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        }

      </Container>
    </>
  )
}

export default App
