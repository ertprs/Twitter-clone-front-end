import * as React from 'react';
import './following.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Following() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      return (
          <section>

        <div>
          <Button onClick={handleOpen}>Following List</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
                <article>
                    <div className="header">
                        <h5>daniel jenson is  following </h5>
                        <ClearIcon onClick={handleClose} />
                    </div>
                    <div className="header border">
                        <div className='img-component'>
                            <img src="https://images.unsplash.com/photo-1607758164193-19539498ddf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80" alt="" className="follow-img"/>
                            <div>
                                <h4 className="follow-name"> Austin Neil</h4>
                                <p> 120k followers</p>

                            </div>
                        </div>
                        <button className="btn"> Following  </button>
                    </div>
                    <div>
                    <p> lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem</p>
                    </div>
                    <div className="header border">
                        <div className='img-component'>
                            <img src="https://images.unsplash.com/photo-1607758164193-19539498ddf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80" alt="" className="follow-img"/>
                            <div>
                                <h4 className="follow-name"> Austin Neil</h4>
                                <p> 120k followers</p>

                            </div>
                        </div>
                        <button className="btn"><PersonAddIcon sx={{ fontSize: 12 }}  />  Follow </button>
                    </div>
                    <div>
                    <p> lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem</p>
                    </div>
                    <div className="header border">
                        <div className='img-component'>
                            <img src="https://images.unsplash.com/photo-1607758164193-19539498ddf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80" alt="" className="follow-img"/>
                            <div>
                                <h4 className="follow-name"> Austin Neil</h4>
                                <p> 120k followers</p>

                            </div>
                        </div>
                        <button className="btn"><PersonAddIcon sx={{ fontSize: 12 }}  />  Follow </button>
                    </div>
                    <div>
                    <p> lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem</p>
                    </div>
                    <div className="header border">
                        <div className='img-component'>
                            <img src="https://images.unsplash.com/photo-1607758164193-19539498ddf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80" alt="" className="follow-img"/>
                            <div>
                                <h4 className="follow-name"> Austin Neil</h4>
                                <p> 120k followers</p>

                            </div>
                        </div>
                        <button className="btn"><PersonAddIcon sx={{ fontSize: 12 }}  />  Follow </button>
                    </div>
                    <div>
                    <p> lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem</p>
                    </div>
                </article>
            </Box>
          </Modal>
        </div>

          </section>
      );
    }