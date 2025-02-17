import { useState } from "react";

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
