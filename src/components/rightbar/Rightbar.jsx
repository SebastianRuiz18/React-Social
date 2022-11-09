import "./rightbar.css"
import { Users } from "../../mockData"
import Online from "../online/Online"

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText"> 
            <b>El chapo</b> y otros <b> 3 amigos</b> cumplen años el día de hoy. 
          </span>
        </div>
        <img className="rightbarAd" src="assets/ittad.jpeg" alt="" />
        <h4 className="rightbarTitle">Amigos En Linea</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () =>{
    return (
      <>
      <h4 className="rightbarTitle">Información</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Plantel:</span>
          <span className="rightbarInfoValue">Tomas Aquino</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Carrera:</span>
          <span className="rightbarInfoValue">Ing Sistemas Computacionales</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relacion:</span>
          <span className="rightbarInfoValue">Soltero</span>
        </div>
      </div>
      <h4 className="rightbarTitle">Amigos</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Amigo Test 1</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Amigo Test 2</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Amigo Test 3</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Amigo Test 4</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Amigo Test 5</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Amigo Test 6</span>
        </div>
      </div>

      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar />}
      </div>
    </div>
  )
}
