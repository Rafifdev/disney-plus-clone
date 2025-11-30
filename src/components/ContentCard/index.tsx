import styles from "./index.module.css";

interface ContentCardProps {
  title: string;
  description: string;
  posterImage: string;
  bannerImage: string;
  onClick?: () => void;
}

function ContentCard(props: ContentCardProps) {
  const { title, description, posterImage, bannerImage, onClick} = props;
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.content}>
        <div className={styles.poster}>
          <img
            src={posterImage}
            alt="poster"
            width="100%"
          />
        </div>
        <div className={styles.detail}>
          <div className={styles.bannerWrapper}>
            <img src={bannerImage} alt="banner" width="100%"/>
          </div>
          <div className={styles.detailWrapper}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
