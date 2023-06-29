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
import DownloadIcon from '@mui/icons-material/Download';
import YouTubeIcon from '@mui/icons-material/YouTube';

const App = () => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [loaded, setLoaded] = React.useState(true);

  const search = () => {
    setLoaded(false);
    getSearchResults(query).then(result => {
      setResults(result);
      setLoaded(true);
    })
  }

  const handleSearchQueryChange = (event) => {
    setQuery(event.target.value);
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
          overflowX: 'hidden',
          paddingBottom: '2rem'
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
            {results.map((r) => (
              <Grid key={r.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Tooltip title={r.title} placement="top">

                  <Card sx={{
                    padding: '0.3rem',
                    backgroundColor: "#272727"
                  }}>
                    <CardMedia
                      image={r.thumbnails.high.url}
                      title="green iguana"
                      sx={{
                        height: 360
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div"
                        sx={{
                          display: '-webkit-box',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 1,
                          color: '#ff652f'
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
                          color: '#14a76c'
                        }}
                      >
                        {r.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="medium" variant="outlined"
                        sx={{
                          color: '#ffe400',
                          marginRight: '1rem'
                        }}
                        endIcon={<DownloadIcon />}
                      >
                        Download
                      </Button>
                      <Button size="medium" variant="outlined" href={r.link} target="_blank"
                        sx={{
                          color: 'red'
                        }}
                        endIcon={<YouTubeIcon />}
                      >
                        See on YT
                      </Button>
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
