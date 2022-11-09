import "./sidebar.css"
import { Users } from "../../mockData"

// Imports de Iconos
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon"/>
            <span className="sidebarListItemtext">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon"/>
            <span className="sidebarListItemtext">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledIcon className="sidebarIcon"/>
            <span className="sidebarListItemtext">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className="sidebarIcon"/>
            <span className="sidebarListItemtext">Grupos</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon"/>
            <span className="sidebarListItemtext">Marcadores</span>
          </li>
          <li className="sidebarListItem">
            <HelpIcon className="sidebarIcon"/>
            <span className="sidebarListItemtext">Preguntas</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon"/>
            <span className="sidebarListItemtext">Trabajos</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon"/>
            <span className="sidebarListItemtext">Eventos</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon"/>
            <span className="sidebarListItemtext">Cursos</span>
          </li>
        </ul>
        <button className="sidebarButton">
          Show More
        </button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
