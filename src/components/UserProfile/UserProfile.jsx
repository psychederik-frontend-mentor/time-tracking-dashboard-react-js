import styles from './UserProfile.module.css';
import profilePic from '../../assets/images/image-jeremy.png';

const UserProfile = () => {
   return (
      <div className={styles.profile}>
         <div className={styles.profileContent}>
            <div className={styles.avatarContainer}>
               <img
                  src={profilePic}
                  alt="User Profile Pic"
                  className={styles.avatar}
               />
            </div>
            <div>
               <span>Report for</span>
               <h2>Jeremy Robson</h2>
            </div>
         </div>
      </div>
   );
};

export default UserProfile;
