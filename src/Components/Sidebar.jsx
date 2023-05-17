import { BsFillHouseDoorFill,BsSearch, BsJustifyLeft,BsFillPlusCircleFill,BsFillChatSquareHeartFill } from "react-icons/bs";


const Side = () => {
  return (
    <div className="container-fluid">
      <div className="row">
         <div className="col-auto min-vh-100 bg-dark text-white  pt-5   side  ">
            <ul>
              <il>
                <a href="/" className="nav-link  mb-3">
                   <BsFillHouseDoorFill />
                   <span className="ms-3 mb-2 d-none d-sm-inline">Home</span>
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                <BsSearch />
                  <span className="ms-3  d-none d-sm-inline">Search</span> 
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                   <BsJustifyLeft />   
                   <span className="ms-3 d-none d-sm-inline">Your library</span> 
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                   <BsFillPlusCircleFill />
                   <span className="ms-3 mb-2 d-none d-sm-inline">Create Playlist</span>
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                <BsFillChatSquareHeartFill />
                  <span className="ms-3  d-none d-sm-inline">Liked song</span> 
                </a>
              </il>
             
            </ul>
         </div>
      </div>
    </div>
  )
}
export default Side;