import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const CreatorsSection = () => {
    return (
        <section className="top-creators">
            <div className="container">
                <div className="flow">
                    <div className="flex">
                        <h2 className="ff-secondary text-grey-600 fw-semi-bold fs-900">TOP CREATORS OF <br/> THE WEEK</h2>
                        <ul role="list" className="ff-secondary text-grey-300 fw-regular fs-700">
                            <li>Editorials</li>
                            <li>Fashion</li>
                            <li>Lifestyle</li>
                            <li>Blueprint</li>
                        </ul>
                    </div>
                    <p className="ff-secondary fw-light fs-75">
                        “Everything always looked better in black and white. Everything always
                        as if it were the first time; there's always more people in a black
                        and white photograph. It just makes it seem that there were more
                        people at a gig, more people at a football match, than with colour
                        photography. Everything looks more exciting.”– Jack Lowden
                    </p>
                </div>
                <div>
                    <h2 className="ff-secondary fw-bold text-grey-300 fs-secondary-heading">
                        CIRCA
                    </h2>
                    <h1 className="ff-secondary fw-bold text-grey-600 fs-xxl">
                        1985
                    </h1>
                </div>
                <div className="top-creator__animation">
                </div>
            </div>
        </section>
    )
}

export default CreatorsSection;