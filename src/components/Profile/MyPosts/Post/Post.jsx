import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className = {s.item}>
            <img className = {s.imgMiniAvatar} src = 'https://avatars.mds.yandex.net/get-pdb/2761912/0d6e8505-1f00-4e8a-a54c-9a545ae752bb/s1200?webp=false' />
            {props.message}
            <div>
                 <span>Like</span> {props.likesCount}
            </div>
              
          </div>
    )
}


export default Post;