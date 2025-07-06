import { Card } from 'react-bootstrap';
import styles from "./ContinentCard.module.css";

const ContinentCard = ({continent}) => {
  return (
    <Card className={styles.responsiveCard}>
        <div className='d-flex align-items-center w-100 h-100'>
                <Card.Img className={styles.cardImg} src={continent?.flag} />
                <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.continent}>{continent?.name}</Card.Title>
                    <Card.Text className={styles.region}>
                    {continent?.region}
                    </Card.Text>
                </Card.Body>
        </div>
    </Card>
  )
}

export default ContinentCard;