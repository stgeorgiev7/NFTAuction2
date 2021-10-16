import React, {useState} from "react";
import classNames from "classnames";
import styles from "./Avatar.module.scss";
import defaultImg from "./image/avatar.png";
import { Avatar as AvatarLogo} from "@mui/material";

export default function Avatar({ url, size = { width: 90, height: 90 }, verified = false }) {
    const [avatarPic, setAvatarPic] = useState(url ? url:defaultImg.src);

    return (
        <div className={classNames(styles.avatar)}>
            <img src={avatarPic} style={{ width: size.width, height: size.height }} className={classNames(styles.image)} />
            {verified ? <span className={classNames(styles.badge)}></span> : null}
        </div>
    )
};