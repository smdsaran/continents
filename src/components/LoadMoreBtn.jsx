import { Button } from "react-bootstrap";
import "./Login.css";

const LoadMoreBtn = ({onClickHandler}) => {
  return (
    <Button type="button" className="loadmore-btn mx-auto" onClick={onClickHandler}>
      Load more
    </Button>
  )
}

export default LoadMoreBtn