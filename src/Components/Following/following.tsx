import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FollowingComponent from "../followingComponent/followingComponent";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./following.scss";
import axios from "axios";

function Following() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [following, setFollowing] = useState([]);

  useEffect(() => {
    const getFollowing = async () => {
      try {
        const res = await axios(
          `http://localhost:3000/api/follow/?pageNo=1&pageSize=20`,
          {
            headers: {
              Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTY0NTU0OTM2NSwiZXhwIjoxNjQ1NTY3MzY1fQ.VsKioB8rYVDgqbE-1w-vpvLu6RvA9eYW-uSnT-G9VAU", //the token is a variable which holds the token
            },
          }
        );
        setFollowing(res.data.data.followers);
          console.log(following)
      } catch (err) {
        console.log(err);
      }
    };
    getFollowing();
  }, []);

  let arr = [1, 2, 3, 4];
  const user:any = following
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Following List
      </Button>
  
      {following && console.log(user)}

      <Modal
        dialogClassName="my-modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <div>
            <p>daniel jenson is following </p>
          </div>
        </Modal.Header>
        {following.length > 0 && following.map((val:any, index) => (
          <div key={index}>
            <FollowingComponent  name={val.firstName+" "+ val.lastName} />
          </div>
        ))}
      </Modal>
    </>
  );
}

export default Following;

// export default function Following() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//       return (
//           <section>

//         <div>
//           <Button onClick={handleOpen}>Following List</Button>
//           <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box sx={style} className="modal">
//                 <article>
//                     <div className="top-header">
//                         <h5>daniel jenson is  following </h5>
//                         <ClearIcon onClick={handleClose} />
//                     </div>
//                     <div className="header border">
//                         <div className='img-component'>
//                             <img src="https://images.unsplash.com/photo-1607758164193-19539498ddf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80" alt="" className="follow-img"/>
//                             <div>
//                                 <h4 className="follow-name"> Austin Neil</h4>
//                                 <p> 120k followers</p>

//                             </div>
//                         </div>
//                         <button className="btn"> Following  </button>
//                     </div>
//                     <div>
//                     <p> lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem</p>
//                     </div>
//                     <div className="header border">
//                         <div className='img-component'>
//                             <img src="https://images.unsplash.com/photo-1607758164193-19539498ddf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80" alt="" className="follow-img"/>
//                             <div>
//                                 <h4 className="follow-name"> Austin Neil</h4>
//                                 <p> 120k followers</p>

//                             </div>
//                         </div>
//                         <button className="btn"><PersonAddIcon sx={{ fontSize: 12 }}  />  Follow </button>
//                     </div>
//                     <div>
//                     <p> lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem</p>
//                     </div>
//                     <div className="header border">
//                         <div className='img-component'>
//                             <img src="https://images.unsplash.com/photo-1607758164193-19539498ddf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80" alt="" className="follow-img"/>
//                             <div>
//                                 <h4 className="follow-name"> Austin Neil</h4>
//                                 <p> 120k followers</p>

//                             </div>
//                         </div>
//                         <button className="btn"><PersonAddIcon sx={{ fontSize: 12 }}  />  Follow </button>
//                     </div>
//                     <div>
//                     <p> lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem</p>
//                     </div>
//                     <div className="header border">
//                         <div className='img-component'>
//                             <img src="https://images.unsplash.com/photo-1607758164193-19539498ddf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80" alt="" className="follow-img"/>
//                             <div>
//                                 <h4 className="follow-name"> Austin Neil</h4>
//                                 <p> 120k followers</p>

//                             </div>
//                         </div>
//                         <button className="btn"><PersonAddIcon sx={{ fontSize: 12 }}  />  Follow </button>
//                     </div>
//                     <div>
//                     <p> lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem</p>
//                     </div>
//                 </article>
//             </Box>
//           </Modal>
//         </div>

//           </section>
//       );
//     }
