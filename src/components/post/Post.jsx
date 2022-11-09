import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Users } from "../../mockData";
import { useState } from "react";

export default function Post({post}) {
    const [like,setLike]=useState(post.like)
    const [isLiked,setIsLiked]=useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">
                        {Users.filter((u) => u.id === post.userId)[0].username}
                        </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpAltIcon className="likeIcon" onClick={likeHandler} />
                    <span className="postLikeCounter">a {like} personas les gusta</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comments} Comentarios</span>
                </div>
            </div>
        </div>
    </div>
  )
}
