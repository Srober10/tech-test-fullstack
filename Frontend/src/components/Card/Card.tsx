import catStockImage from "/src/assets/images/stock-image-cat.jpg";
import styles from "./Card.module.scss";

const FREE_GIFT_TEXT = <p> Free Gift </p>;

interface CardProps {
  titleText: string;
  descriptionText: string;
  priceText: string;
  freeGift: boolean;
  onDetailsClick?: () => {}; // not in scope of tech test
  onEditDeliveryClick?: () => {}; // not in scope of tech test
}

const FreeGiftDesktopView = () => {
  return <div className={styles.freeGift}>{FREE_GIFT_TEXT}</div>;
};

const FreeGiftMobileView = () => {
  return (
    <div className={styles.mobileCardGift}>
      <img
        className={styles.cardMobileImage}
        width={60}
        height={60}
        src={catStockImage}
        alt="your cat(s)!"
      />
      {FREE_GIFT_TEXT}
    </div>
  );
};

const Card = ({
  titleText,
  descriptionText,
  priceText,
  freeGift,
}: CardProps) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardSideImage}
        width={400}
        height="100%"
        src={catStockImage}
        alt="your cat(s)!"
      />
      {freeGift && <FreeGiftDesktopView />}
      {freeGift && <FreeGiftMobileView />}
      <div className={styles.cardCopy}>
        <div>
          <h3>{titleText}</h3>
          <p>{descriptionText}</p>
          <b>{priceText} </b>
        </div>
        <br />
        <div className={styles.buttonGroup}>
          <button className="button-primary"> See details </button>
          <button className="button-secondary"> Edit delivery </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
