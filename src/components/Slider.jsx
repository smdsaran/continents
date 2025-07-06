import "./Slider.module.css";
import styles from "./Slider.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
  const sliderData = Array.from({ length: 4 }, (_, i) => i);
  const activeSlide = 0;

  const renderDots = sliderData.map((e, i) => {
    return <div key={`key-${i}-slider`} className={styles.sliderDot} style={{backgroundColor: activeSlide === i ? '#1D1B20' : '#FEF7FF'}}></div>;
  })

  return (
    <div className={styles.slider}>
      <img src="/banner-media.png" className={styles.mediaImg} />
        <div className={styles.dotsDontainer}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <div className={styles.dotsDiv}>{renderDots}</div>
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
    </div>
  )
}

export default Slider