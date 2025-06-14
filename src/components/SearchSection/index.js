import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchSection = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [searchActive, setSearchState] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRoomType, setSelectedRoomType] = useState("Select Room Type"); // New state for room type

    const [adult, setCount] = useState(0);
    const adultIncrementCount = () => setCount(adult + 1);
    const adultDecrementCount = () => setCount(Math.max(0, adult - 1));

    const [child, setChild] = useState(0);
    const childIncrementCount = () => setChild(child + 1);
    const childDecrementCount = () => setChild(Math.max(0, child - 1));

    const [room, setRoom] = useState(0);
    const roomIncrementCount = () => setRoom(room + 1);
    const roomDecrementCount = () => setRoom(Math.max(0, room - 1));

    const handleRoomSelection = (roomType) => {
        setSelectedRoomType(roomType); // Set selected room type
        setModalOpen(false); // Close modal
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <div className={`wpo-select-section ${props.svClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wpo-select-wrap">
                            <div className="wpo-select-area">
                                <form className="clearfix" onSubmit={SubmitHandler}>
                                    <div className="select-sub">
                                        <div className="input-group date">
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                            <i className="fi flaticon-calendar"></i>
                                        </div>
                                    </div>
                                    <div className="select-sub">
                                        <div className="input-group date">
                                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                                            <i className="fi flaticon-calendar"></i>
                                        </div>
                                    </div>
                                    <div className="select-sub">
                                        <div className="form-group tourist-group">
                                            <div className="tourist-group-wrap">
                                                <div className="tourist-inner" onClick={() => setSearchState(!searchActive)}>
                                                    <i className="fi flaticon-user"></i>
                                                    <ul>
                                                        <li><input disabled type="text" value={adult} /> Adults</li>
                                                        <li><input disabled type="text" value={child} /> Children</li>
                                                        <li><input disabled type="text" value={room} /> Room</li>
                                                    </ul>
                                                    <i className={`ti-angle-down ${searchActive ? "rotate" : ""}`}></i>
                                                </div>
                                                <div className={`tourist-dropdown ${searchActive ? "active" : ""}`}>
                                                    <div className="tourist-item">
                                                        <span>Adults</span>
                                                        <div className="tourist-item-group">
                                                            <button type="button" onClick={adultDecrementCount}>-</button>
                                                            <input disabled value={adult} type="text" />
                                                            <button type="button" onClick={adultIncrementCount}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="tourist-item">
                                                        <span>Children</span>
                                                        <div className="tourist-item-group">
                                                            <button type="button" onClick={childDecrementCount}>-</button>
                                                            <input disabled value={child} type="text" />
                                                            <button type="button" onClick={childIncrementCount}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="tourist-item">
                                                        <span>Rooms</span>
                                                        <div className="tourist-item-group">
                                                            <button type="button" onClick={roomDecrementCount}>-</button>
                                                            <input disabled value={room} type="text" />
                                                            <button type="button" onClick={roomIncrementCount}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="tourist-item">
                                                        <span 
                                                            onClick={() => setModalOpen(true)} 
                                                            // style={{ cursor: 'pointer', color: 'blue',  }}
                                                        >
                                                            {selectedRoomType}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="select-sub">
                                        <Link onClick={ClickHandler} className="theme-btn" to="/search-result">
                                            Check Availability
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        textAlign: 'center',
                        width: '500px',
                        position: 'relative'
                    }}>
                        <h2>Select Room Category</h2>
                        <button onClick={() => setModalOpen(false)} style={{
                            backgroundColor: 'red',
                            color: 'white',
                            border: 'none',
                            padding: '5px 10px',
                            cursor: 'pointer',
                            position: 'absolute',
                            right: '10px',
                            top: '10px'
                        }}>X</button>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #ddd' }} onClick={() => handleRoomSelection("Standard Room")}>Standard Room</li>
                            <li style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #ddd' }} onClick={() => handleRoomSelection("Deluxe Room")}>Deluxe Room</li>
                            <li style={{ padding: '10px', cursor: 'pointer' }} onClick={() => handleRoomSelection("Suite")}>Suite</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchSection;
