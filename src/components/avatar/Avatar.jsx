import React, {useState} from "react";
import classNames from "classnames";
import styles from "./Avatar.module.scss";
import defaultImg from "./image/avatar.png";

export default function Avatar({ url, size = 90, verified = false }) {
    const [avatarPic, setAvatarPic] = useState(url ? url:defaultImg.src);

    return (
        <div className={classNames(styles.avatar)} >
            <img className={classNames(styles.image)}  style={{ width: size, height: size }} src={avatarPic}  />
            {verified ? <span className={classNames(styles.badge)}></span> : null}
        </div>
    )
};