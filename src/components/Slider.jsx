import { useState } from "react";

function Slider({ data, sliderIndex, setSliderIndex }) {
    // const [sliderIndex, setSliderIndex] = useState(0);

    function carouselHandler() {}

    // function btnHandler(i) {
    //     setSliderIndex(i);
    // }

    return (
        <>
            {data.map((item, index) => {
                return (
                    <span key={index}>
                        {data.map((movieData, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSliderIndex(index);
                                    }}
                                    className={
                                        sliderIndex === index
                                            ? "active"
                                            : "default"
                                    }
                                ></button>
                            );
                        })}
                    </span>
                );
            })}
        </>
    );
}

export default Slider;
