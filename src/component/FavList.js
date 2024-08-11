// src/components/FavList.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, IconButton, Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useFav } from './FavContext';
import { makeStyles } from '@material-ui/core/styles';
const FavList = () => {
    const { favorites, removeFromFavorites } = useFav();
    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Favorite Cryptocurrencies
            </Typography>
            <Grid container spacing={2}>
                {favorites.map((coin) => (
                    <Grid item xs={12} md={6} lg={4} key={coin.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="150"
                                image={coin.image}
                                alt={coin.name}
                                title={coin.name}
                                borderRadius="10px"
                            />
                            <CardContent>
                                <Typography variant="h6">{coin.name}</Typography>
                                <Typography variant="body2">Price: ${coin.current_price.toLocaleString()}</Typography>
                                <Typography variant="body2">Market Cap: ${coin.market_cap.toLocaleString()}</Typography>
                                <Typography variant="body2"><span style={{ color: 'green' }}>24h High:</span> ${coin.low_24h.toLocaleString()}</Typography>
                                <Typography variant="body2"><span style={{ color: 'red' }}>24h Low:</span> ${coin.high_24h.toLocaleString()}</Typography>
                                <IconButton onClick={() => removeFromFavorites(coin.id)}>
                                    <Delete style={{ color: "red", marginTop: "10px" }} />
                                </IconButton>
                            </CardContent>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    
                                >
                                    Send
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    
                                >
                                    Delete
                                </Button>
                                <Button variant="contained">Default</Button>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FavList;
