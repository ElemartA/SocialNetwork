import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div >
      <div >
        <img className={s.imageFon} alt='image' src='https://pbs.twimg.com/profile_banners/2451303042/1397844805/1500x500' />
      </div>
      <div>
        <img className={s.imageAvatar} alt='avatar' src='https://get.wallhere.com/photo/sunlight-women-blonde-sea-long-hair-water-rock-nature-sand-reflection-photography-morning-hands-on-head-statue-beauty-season-wave-69442.jpg' />
      </div>
    </div>

  )
}

export default ProfileInfo;