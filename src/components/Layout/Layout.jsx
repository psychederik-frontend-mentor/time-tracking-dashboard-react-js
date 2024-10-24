import { useState } from 'react';
import styles from './Layout.module.css';
import PropTypes from 'prop-types';
import UserProfile from '../UserProfile/UserProfile';
import ActivityCard from '../ActivityCard/ActivityCard';
// Import Images
import exerciseIcon from '../../assets/images/icon-exercise.svg';
import playIcon from '../../assets/images/icon-play.svg';
import selfCareIcon from '../../assets/images/icon-self-care.svg';
import socialIcon from '../../assets/images/icon-social.svg';
import studyIcon from '../../assets/images/icon-study.svg';
import workIcon from '../../assets/images/icon-work.svg';

const icons = {
   workIcon: workIcon,
   playIcon: playIcon,
   studyIcon: studyIcon,
   exerciseIcon: exerciseIcon,
   socialIcon: socialIcon,
   selfCareIcon: selfCareIcon,
};

const Layout = ({ data }) => {
   const [timeframe, setTimeframe] = useState('weekly');

   function handleTimeframeChange(newTimeframe) {
      setTimeframe(newTimeframe);
   }

   return (
      <div className={styles.gridLayout}>
         <div className={styles.spanCol}>
            <div className={styles.profileContainer}>
               <UserProfile />
            </div>
            <nav>
               <a
                  onClick={() => handleTimeframeChange('daily')}
                  className={timeframe === 'daily' ? styles.active : ''}
               >
                  Daily
               </a>
               <a
                  onClick={() => handleTimeframeChange('weekly')}
                  className={timeframe === 'weekly' ? styles.active : ''}
               >
                  Weekly
               </a>
               <a
                  onClick={() => handleTimeframeChange('monthly')}
                  className={timeframe === 'monthly' ? styles.active : ''}
               >
                  Monthly
               </a>
            </nav>
         </div>

         {data.map((activity, index) => (
            <ActivityCard
               key={index}
               activity={activity}
               image={icons[activity.image]}
               background={activity.background}
               timeframe={timeframe}
            />
         ))}
      </div>
   );
};

Layout.propTypes = {
   data: PropTypes.arrayOf(
      PropTypes.shape({
         activity: PropTypes.shape({
            image: PropTypes.string.isRequired,
            background: PropTypes.string.isRequired,
            timeframe: PropTypes.string.isRequired,
         }),
      })
   ),
   timeframe: PropTypes.string,
};

export default Layout;
