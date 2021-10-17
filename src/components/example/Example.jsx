import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Head from "../header/Header";
import User from "../user/User";
import Card from "../card/Card";


export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Head/>
      <User name='tarikata73' info='134 items' verified={true}/>
      <Card name='Clock' likes={12340} price='12' currency='ETH' user={{avatarUrl: null, verified:true}}/>
      
      <Container className={classNames(styles.container)} maxWidth="xl">

        <Paper className={classNames(styles.paper)}>

          <Link href="/about" color="secondary">

          </Link>
        </Paper>
      </Container>
    </div>
  );
}
