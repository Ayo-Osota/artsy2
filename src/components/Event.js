import { Link } from "react-router-dom";

const Event = ({ title, date, image, details }) => {
    return (
        <div className="flex" style={{
            background: `linear-gradient(0deg,
                rgba(0, 0, 0, 0.52),
                rgba(0, 0, 0, 0.52)),
                linear-gradient(104.57deg,
                    rgba(0, 0, 0, 0) 21.03%,
                    rgba(0, 0, 0, 0.2) 56.5%,
                    rgba(0, 0, 0, 0.2) 93.84%),url(${image})`
        }}>
            <div className="event-details flow">
                <ul>
                    <li className="ff-bellefair fw-regular fs-500">
                        {title}
                    </li>
                    <li className="ff-poppins fw-regular fs-75">
                        Start on : {date}
                    </li>
                </ul>

                <p className="fw-medium fs-100">
                    {details}
                </p>
            </div>
            <nav className="events-nav">
                <ul role="list" className="flex">
                    <li><Link to="/auctions">See more</Link></li>
                    <li><a href="#">Set a reminder</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Event;