import Slider from "./Slider"
import BannerCard from "./BannerCard"
import { Container, Row, Col } from "react-bootstrap";

const HighlightSection = () => {
  return (

    <Container className="px-0 px-lg-2 w-lg-100">
      <Row className="flex-lg-row flex-column-reverse justify-content-lg-between w-lg-100">
        <Col lg={10} className="mb-lg-0">
          <Slider/>
        </Col>
        <Col lg={2}>
          <BannerCard />
        </Col>
      </Row>
    </Container>
  )
}

export default HighlightSection