import React from 'react';
import Avatar from '../avatar/Avatar';
import styles from './User.module.scss';
import classNames from 'classnames';

export default function User({name, info, avatar='', size=50, verified=false}) {

    return(
        <div className={classNames(styles.user)}>
            <Avatar url={avatar} size={size} verified={verified}/>
            <p className={classNames(styles.name)}>{name}</p>
            <p className={classNames(styles.info)}>{info}</p>
        </div>
    )
};