import { useAuctionsContext } from "../context/auctions_context";
import { IoIosArrowBack } from "react-icons/io";

const EventSlider = () => {
    const { toggleEvent } = useAuctionsContext();
    return (
        <div className="event-slider flex display-sm-none">
            <div>
            </div>
            <div className="flex">
                <button type="button" onClick={() => toggleEvent(+1)}>
                    <IoIosArrowBack className="event-arrow" />
                </button>
                <button type="button" className="next__event-button" onClick={() => toggleEvent(-1)}>
                    <IoIosArrowBack className="event-arrow" />
                </button>
            </div>
        </div>
    )
}

export default EventSlider;