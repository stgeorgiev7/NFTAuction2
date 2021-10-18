import React, { useState } from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames';
import Avatar from '../avatar/Avatar';
import { Card as CardContainer } from '@mui/material';
import { CardMedia } from '@mui/material';
import mediaImage from './image/nft.jpg';
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Card({ name, likes = 0, user, mediaUrl, price, currency }) {

    const [img, setImage] = useState(mediaUrl ? mediaUrl : mediaImage.src);
    const [millifiedLikes, setLikes] = useState(millify(likes));

    return (
        <div className={classNames(styles.cardContainer)}>
            <CardContainer sx={{ maxWidth: 300 }}>
                <Avatar url={user.avatarUrl} size={50} verified={user.verified} />
                <CardMedia
                    component="img"
                    image={img}
                    className={classNames(styles.cardImage)}>

                </CardMedia>
                <div className={classNames(styles.infoContainer)}>
                    <div>
                        <p className={classNames(styles.nftName)}>{name}</p>
                        <p className={classNames(styles.price)}>~{price} {currency}</p>
                    </div>
                        <p className={classNames(styles.likes)}> <FavoriteIcon fontSize={'small'} />   
                        {millifiedLikes}</p> 
                </div>

            </CardContainer>
        </div>
    )
}