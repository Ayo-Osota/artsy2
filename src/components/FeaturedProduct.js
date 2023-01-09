import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { pfpImages } from "../utils.js/data";

const FeaturedProduct = ({ imageUrl }) => {
    return (
        <div className="featured-product">
            <div style={{ backgroundImage: `url(${imageUrl})` }}>
                <h3 className="ff-tertiary text-neutral-100 fw-bold fs-sub-heading display-lg-none">
                    The Boolean Egyptian
                </h3>
                <h3 className="ff-tertiary text-neutral-100 fw-bold fs-sub-heading display-sm-none">
                    View product
                </h3>
                <Link to="/product/id" className="feature-btn">
                    <BsArrowRight className="feature-btn__icon" />
                </Link>
            </div>
            <div className="flex">
                <h3 className="ff-tertiary text-grey-300 fw-bold fs-sub-heading display-sm-none">
                    The Boolean Egyptian
                </h3>
                <p className="ff-primary text-grey-300 fw-regular fs-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                    urna, porttitor rhoncus dolor pur
                </p>
                <div className="flex">
                    <ul role="list">
                        {pfpImages.map((likeImage) => {
                            const { id, image } = likeImage;
                            return (
                                <li key={id} className="pfp">
                                    <img src={image} alt="like" />
                                </li>
                            )
                        })}
                        <li className="fs-600 fw-regular">+20</li>
                    </ul>
                    <Link to="/product/id" className="feature-btn">
                        <BsArrowRight className="feature-btn__icon" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct;