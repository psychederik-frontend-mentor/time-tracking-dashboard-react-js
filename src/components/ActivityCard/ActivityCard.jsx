import PropTypes from 'prop-types';
import styles from './ActivityCard.module.css';

const ActivityCard = ({ activity, image, background, timeframe }) => {
   const currentData = activity.timeframes[timeframe].current;
   const previousData = activity.timeframes[timeframe].previous;
   const title = activity.title;

   let timeframeLabel;

   if (timeframe === 'daily') {
      timeframeLabel = 'Yesterday - ';
   } else if (timeframe === 'weekly') {
      timeframeLabel = 'Last Week - ';
   } else {
      timeframeLabel = 'Last Month - ';
   }

   return (
      <div className={styles.card} style={{ background }}>
         <div className={styles.cardImg}>
            <img src={image} alt="" />
         </div>
         <div className={styles.cardContent}>
            <header className={styles.cardHeader}>
               <h3>{title}</h3>
               <div id={styles.ellipsis}>
                  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
                  </svg>
               </div>
            </header>
            <div className={styles.cardData}>
               <p>
                  {currentData}
                  {currentData === 1 ? 'hr' : 'hrs'}
               </p>
               <small>
                  {timeframeLabel} {previousData}{' '}
                  {previousData === 1 ? 'hr' : 'hrs'}
               </small>
            </div>
         </div>
      </div>
   );
};

ActivityCard.propTypes = {
   activity: PropTypes.object.isRequired,
   image: PropTypes.string.isRequired,
   background: PropTypes.string.isRequired,
   timeframe: PropTypes.string.isRequired,
};

export default ActivityCard;
