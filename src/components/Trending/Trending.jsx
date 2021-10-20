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
            <Grid item key={index} columns={{ xs: 4, sm: 4, md: 4 }}>
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
        <Grid container justifyContent='center' alignItems='center' columns={4}>

            <Grid item>
                <h1 className={classNames(styles.heading)}>Trending</h1>
            </Grid>

            <Grid item>

                <Select value={10}>
                    <MenuItem value={10}>This Week</MenuItem>
                    <MenuItem value={20}>This Month</MenuItem>
                    <MenuItem value={30}>This Year</MenuItem>
                </Select>
            </Grid>

            <Grid item>
                {cardsData}
            </Grid>

        </Grid>

    )

};