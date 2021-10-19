import React, { useState } from 'react';
import styles from './Trending.module.scss';
import classNames from 'classnames';
import Card from '../card/Card';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Trending({ cards }) {
    const [data, setData] = useState(cards);

    const cardsData = cards.map(function (nft, index) {
        return (
            <Grid item key={index}>
                <Card
                    name={nft.name}
                    user={nft.user}
                    likes={0}
                    mediaUrl={nft.mediaUrl}
                    price={nft.price}
                    currency={nft.currency}
                >
                </Card>
            </Grid>

        );
    });

    return (
        <Grid container>
            <Container>
                <h1>Trending</h1>
                <Select value={10}>
                    <MenuItem value={10}>This Week</MenuItem>
                    <MenuItem value={20}>This Month</MenuItem>
                    <MenuItem value={30}>This Year</MenuItem>
                </Select>
                {cardsData}

            </Container>

        </Grid>

    )

};