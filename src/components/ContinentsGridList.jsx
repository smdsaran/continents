import { Row, Col } from 'react-bootstrap';
import ContinentCard from './ContinentCard';
import styles from "./ContinentCard.module.css";

const ContinentsGridList = ({continentLists}) => {
  return (
    <div className="mt-4 w-100">
      <Row className='gx-1'>
        {continentLists.map(continent => (
          <Col key={continent.id} xs={12} md={6} lg={6} className={styles.colGap}>
            <ContinentCard continent={continent}/>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ContinentsGridList