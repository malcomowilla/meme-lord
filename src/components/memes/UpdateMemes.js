import React, { useEffect, useState } from "react";

const MEMES_API = "https://api.imgflip.com/get_memes";

function UpdateMemes() {
    const [memes, setMemes] = useState([]);
    const [memeIndex, setMemeIndex] = useState(0);
    const [captions, setCaptions] = useState([]);

    const fetchMemes = () => {
        fetch(MEMES_API).then(res => res.json())
            .then(data => {
                const updatedMemes = data.data.memes;
                setMemes(updatedMemes);
            });
    }

    useEffect(() => {
        fetchMemes();
    }, []);

    useEffect(() => {
        if (memes.length) {
            setCaptions(() => Array(memes[memeIndex].box_count).fill(''));
        }
    }, [memeIndex, memes]);

    return (
        <>

            <div className="flex space-x-2 justify-center mt-6">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={() => setMemeIndex(Math.floor(Math.random() * 100) + 1)}
                    className="inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-900 hover:shadow-lg focus:bg-stone-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-900 active:shadow-lg transition duration-150 ease-in-out">
                    skip{" "}
                </button>
            </div>

            {/**inputs for the captions */}
            {captions.map((caption, index) => (
                <div className="flex justify-center mt-4" key={index}>
                    <div className="mb-3 xl:w-96">
                        <input
                            type="text"
                            className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                            id="exampleText0"
                            placeholder="captions"
                        />
                    </div>
                </div>
            ))}

            {memes.length ? <img src={memes[memeIndex].url} alt="random meme" /> : <></>}

            {/**The Generate Button */}
            <div className="flex space-x-2 justify-center my-6">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={() => console.log("Generate meme")}
                    className="inline-block px-6 py-2.5 bg-amber-300 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-lime-500 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out">
                    Generate{" "}
                </button>
            </div>
        </>
    );
}

export default UpdateMemes;