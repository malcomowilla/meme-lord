import { useEffect, useState } from "react";
import styles from "./styles.module.css";

function Memes() {
    const [memes, setMemes] = useState([]);
    const [memeIndex, setMemeIndex] = useState(0);
    const [upvotes, setUpvotes] = useState(0);
    const [downvotes, setDownvotes] = useState(0);

    //useEffect hook will make a network request  on component render,when the fetch resolves,it will set the response from the server
    //to the local state using the setState function,in turn causing the component to render so as to update the ui with the data
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                const memes = res.data.memes;
                const shuffleMemes = Math.floor(Math.random() * memes.length);

                setMemes(memes[shuffleMemes]);

                setMemes(memes);
            });
    }, []);

    const handleDownvotes = () => {
        setDownvotes(() => downvotes + 1);
    }

    const handleUpvotes = () => {
        setUpvotes(() => upvotes + 1);
    }

    return memes.length ? (
        <div className={styles.container}>

            <div class="flex space-x-2 justify-center">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={() => setMemeIndex(memeIndex + 1)}
                    class="inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-900 hover:shadow-lg focus:bg-stone-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-900 active:shadow-lg transition duration-150 ease-in-out">
                    skip{" "}
                </button>
            </div>

            <img src={memes[memeIndex].url} alt="random meme" />

            <div class="flex space-x-2 justify-center">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={handleUpvotes}
                    class="inline-block px-2 py-2.5 my-4 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-900 hover:shadow-lg focus:bg-stone-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-900 active:shadow-lg transition duration-150 ease-in-out">
                    &#x2B06;	UPVOTES: {upvotes}
                </button>

                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={handleDownvotes}
                    class="inline-block px-2 py-2.5 my-4 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orage-900 hover:shadow-lg focus:bg-stone-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-900 active:shadow-lg transition duration-150 ease-in-out">
                    &#x2B07;    DOWNVOTES: {downvotes}
                </button>
            </div>
        </div>
    ) : (
        <></>
    );
}

export default Memes;
