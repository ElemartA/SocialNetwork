import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import LookingForAJob from '../../../assets/images/lookingForAJob.png';
import WorkingNow from '../../../assets/images/workingNow.png';
import photoAva from '../../..//assets/images/photoBoy.png';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.commonClass}>
      <div >
        <img className={s.imageFon} alt='image' src='https://pbs.twimg.com/profile_banners/2451303042/1397844805/1500x500' />
      </div>
      <div className={s.wrapper}>
        <img className={s.imageAvatar} alt='avatar' src={props.profile.photos.large !=null ? props.profile.photos.large : photoAva} />
        <div className = {s.padding}>
          {props.profile.fdivlName}
        </div>
        
      </div>
    
      <div>
        <div>About me: {props.profile.aboutMe}</div>
      </div>
     <div>
     <div>
        <div>{props.profile.contacts.facebook}</div>
        <div>{props.profile.contacts.website}</div>
        <div>{props.profile.contacts.vk}</div>
        <div>{props.profile.contacts.twitter}</div>
        <div>{props.profile.contacts.instagram}</div>
        <div>{props.profile.contacts.youtube}</div>
        <div>{props.profile.contacts.github}</div>
        <div>{props.profile.contacts.mainLink}</div>
      </div>
     </div>
      
      <div className={s.wrapper}>
        <div>
          < img src={props.profile.lookingForAJob ? LookingForAJob : WorkingNow} alt='logo' className={s.logoJob} />
        </div>
        <div className = {s.padding}>
          Поиск работы: {props.profile.lookingForAJobDescription}
        </div>
      </div>
    </div>

  )
}

export default ProfileInfo;