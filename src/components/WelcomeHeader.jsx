import styles from "./Home.module.css";
import { Container } from 'react-bootstrap';

const WelcomeHeader = () => {
  return (
    <Container className={styles.welcomeDiv}>
        <div className={styles.welcomeHrbar} style={{alignSelf: 'flex-start'}}/>
        <h2 className={styles.welcomeText}>WELCOME</h2>
        <div className={styles.welcomeHrbar} style={{alignSelf: 'flex-end'}}/>
    </Container>
  )
}

export default WelcomeHeader;