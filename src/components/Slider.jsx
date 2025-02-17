import { useState } from "react";

function Slider({ data, sliderIndex, setSliderIndex }) {
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
