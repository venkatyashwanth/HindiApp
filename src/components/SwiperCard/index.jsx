import "./index.scss";
const SwiperCard = (props) => {
    const {cardData} = props;
    const {telugu,hindi} = cardData;
    return (
        <div className="card-wrapper">
            <div className="flip-card click-show">
                <div className="flip-card-inner">
                    <div className="flip-card-front u-center">
                        <span className="primary-span-text">
                            {telugu}
                        </span>
                    </div>
                    <div className="flip-card-back u-center">
                        <span className="primary-span-text">
                            {hindi}
                        </span>
                    </div>
                </div>
            </div>
            <div className="click-area">
                <span className="secondary-span-text">Hold Card</span>
            </div>
        </div>
    )

}

export default SwiperCard