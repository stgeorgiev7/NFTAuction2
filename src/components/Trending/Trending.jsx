import React, { useState } from 'react';
import styles from './Trending.module.scss';
import classNames from 'classnames';
import Card from '../card/Card';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Trending({ cards = [] }) {
    const [data, setData] = useState(cards);

    const cardsData = cards.map(function (nft, index) {
        return (
            <Grid item key={index} columns={{ xs: 4, sm: 4, md: 4 }}>
                <Container>
                    <Card
                        name={nft.name}
                        user={nft.user}
                        likes={0}
                        mediaUrl={nft.mediaUrl}
                        price={nft.price}
                        currency={nft.currency}
                    >
                    </Card>
                </Container >
            </Grid>

        );
    });

    return (
        <Grid container spacing={5} className={classNames(styles.gridContainer)}>

            <Grid item xs={3} sm={3} md={3}
                className={classNames(styles.logo)}
                style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <h1 className={classNames(styles.heading)}>Trending</h1>
            </Grid>

            <Grid item xs={3} sm={4} md={4} >

                <Select value={10}>
                    <MenuItem value={10}>This Week</MenuItem>
                    <MenuItem value={20}>This Month</MenuItem>
                    <MenuItem value={30}>This Year</MenuItem>
                </Select>
            </Grid>

            <Grid container justifyContent='center' >
                {cardsData}
            </Grid>

        </Grid>

    )

};