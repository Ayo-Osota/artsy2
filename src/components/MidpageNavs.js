import { midNavs } from "../utils.js/data";
import MidpageNav from "./MidpageNav";

const MidpageNavs = () => {
    return (
        <section className="middle-page__nav">
            <ul>
                {midNavs.map((nav) => {
                    const { id, text, url } = nav;
                    return (
                        <MidpageNav key={id} text={text} url={url}/>
                    )
                })}
            </ul>
        </section>
    )
}

export default MidpageNavs;