import { Container } from "react-bootstrap";
import styles from "./Home.module.css";

const Footer = () => {
    return(
        <Container className="mb-10" style={{ marginBottom: '20px !important'}}>
            <p className={styles.footerP}>Example@email.com</p>
            <p className={styles.footerP}>Copyright &#169; 2020 Name. All rights reserved.</p>
        </Container>
    )
}

export default Footer;