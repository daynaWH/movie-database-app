import { useState } from "react";

// Slider (Carousel) to display 3 movie backdrops in the hero section of the home page
// Referred to the codes in the following link for support
// https://codesandbox.io/p/sandbox/reactjs-image-slider-h628v?file=%2Fsrc%2Fcomponents%2Fcustom.slider.js
function Slider({ data, sliderIndex, setSliderIndex }) {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <div key={index} className="slider-btns">
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
                    </div>
                );
            })}
        </>
    );
}

export default Slider;
