import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const MidpageNav = ({ text, url }) => {
    return (
        <li className="flex">
            <h2 className="ff-primary text-grey-300 fw-medium fs-secondary-heading">
                {text}
            </h2>
            <Link to={url}>
                <BsArrowRight className="mid-nav__arrow" />
            </Link>
        </li>
    )
}

export default MidpageNav;