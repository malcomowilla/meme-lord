import { useEffect, useState } from "react";
import styles from "./styles.module.css";

function Memes() {
    const [memes, setMemes] = useState([]);
    const [memeIndex, setMemeIndex] = useState(0);

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
    return memes.length ? (
        <div className={styles.container}>
            <button
                onClick={() => setMemeIndex(memeIndex + 1)}
                className={styles.skip}
            >
                skip{" "}
            </button>
            <img src={memes[memeIndex].url} alt="random meme" />
        </div>
    ) : (
        <></>
    );
}

export default Memes;
