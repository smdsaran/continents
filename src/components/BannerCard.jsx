import styles from "./Slider.module.css";

const BannerCard = () => {
  return (
    <div className={styles.BannerCard}>
      <img src="/banner-media.png" className={styles.mediaImgBanner} />
    </div>
  )
}

export default BannerCard;