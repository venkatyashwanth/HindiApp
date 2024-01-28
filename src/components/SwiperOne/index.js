import { Keyboard } from 'swiper/modules';
import SwiperCard from '../SwiperCard';
import { register } from 'swiper/element/bundle';
register();

const SwiperOne = () => {
    const swiperList = [
        {
          id: 1,
          "telugu": "నేను",
          "hindi": "मैं"
        },
        {
          id: 2,
          "telugu": "నువ్వు",
          "hindi": "तू / तुम"
        },
        {
          id: 3,
          "telugu": "మీరు",
          "hindi": "आप"
        },
        {
          id: 4,
          "telugu": "అతడు / ఆమె / అది",
          "hindi": "वह"
        },
        {
          id: 5,
          "telugu": "ఇతడు / ఈమె / ఇది",
          "hindi": "यह"
        },
        {
          id: 6,
          "telugu": "వాలు / అవి",
          "hindi": "वे"
        },
        {
          id: 7,
          "telugu": "వీలు / ఇవి",
          "hindi": "ये"
        },
        {
          id: 8,
          "telugu": "మేము / మనము",
          "hindi": "हम"
        }
      ]
    
    return(
        <>
        <swiper-container
            slides-per-view="4"
            slide-to-clicked-slide="true"
            speed="500"
            centered-slides="true"
            space-between="0"
            navigation="true"
            keyboard={{
              enabled: true
            }}
            modules={[Keyboard]}
          >
            {swiperList.map((eachSlide) =>
              <swiper-slide key={eachSlide.id}>
                <SwiperCard cardData={eachSlide} />
              </swiper-slide>
            )}
          </swiper-container>
        </>
    )
}

export default SwiperOne