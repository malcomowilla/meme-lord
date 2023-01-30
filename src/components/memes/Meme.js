<<<<<<< HEAD

import React from 'react'
import  { useEffect,useState } from 'react'
import styles from './styles.module.css'
import {useNavigate} from 'react-router-dom'
import MemeGenerated from './MemeGenerated/MemeGenerated'

const Memes=()=>{
    const[memes, setMemes] = useState([])
    const[memeIndex, setMemeIndex] = useState(0)
    const [captions, setCaptions] = useState([])
 const navigate = useNavigate()
   
   
       const updateCaption =(e, index)=>{
        const text = e.target.value || '';
            setCaptions(
                captions.map((c, i)=>{
                    if(index === i) {
                        return text;

                    } else {
                        return c;

                    }
                })
            );

    };

    


        const generateMeme = () =>{
            const currentMeme = memes[memeIndex];
            const formData = new FormData();

            
            formData.append('username', 'malcomowilla');
            formData.append('password', 'malcommalin12');
            formData.append('template_id', currentMeme.id);
            captions.forEach((c, index)=>formData.append(`boxes[${index}][text]`, c));

            fetch('https://api.imgflip.com/caption_image',{
                method:'POST',
                body:formData
            }).then(res=>{
                res.json().then(res=>{
                    navigate(`/generated?url=${res.data.url}`)
                   
                            
                });
            });


        };


























        
        const shuffleMemes = (array) =>{
            for(let i= array.length-1; i > 0; i--){
                const j = Math.floor(Math.random()*i);

                const temp = array[i];
                array[i] =array[j];
                array[j] = temp
            }   
        }



     


//useEffect hook will make a network request  on component render,when the fetch resolves,it will set the response from the server
//to the local state using the setState function,in turn causing the component to render so as to update the ui with the data


    useEffect(()=>{
            fetch("https://api.imgflip.com/get_memes")
            .then(res=>{
                return res.json()
            })
            .then(res=>{
                const _memes = res.data.memes;
                shuffleMemes(_memes)
                setMemes(_memes);
                 // const shuffleMemes = Math.floor(Math.random() * memes.length)

  // setMemes(memes[shuffleMemes])

=======
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
>>>>>>> origin/addmeme

                setMemes(memes[shuffleMemes]);

                
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
            <h2 className="text-2xl font-semibold tracking-wider text-center text-orange-800 m-2 p-4">Browse Memes</h2>

<<<<<<< HEAD
    },[]);


    useEffect(()=>{
       
        if(memes.length) {
             setCaptions(Array(memes[memeIndex].box_count).fill(''))



        }




    },[memeIndex, memes]);









return(
    

    
    memes.length ?
    <div className={styles.container}>
        <button onClick={generateMeme} className={styles.generate}>generate </button>
        {
            captions.map((c, index)=>{
             return   <input onChange={(e)=>updateCaption(e, index)} key={index} />
            })
        }
            <button onClick={()=>setMemeIndex(memeIndex + 1)} className={styles.skip}>skip </button>
            <img alt='memes' src={memes[memeIndex].url}/>
=======
            <div className="flex space-x-2 justify-center">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={() => setMemeIndex(Math.floor(Math.random() * 100) + 1)}
                    className="inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-900 hover:shadow-lg focus:bg-stone-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-900 active:shadow-lg transition duration-150 ease-in-out">
                    skip{" "}
                </button>
            </div>

            <img src={memes[memeIndex].url} alt="random meme" />
>>>>>>> origin/addmeme

            <div className="flex space-x-2 justify-center">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={handleUpvotes}
                    className="inline-block px-2 py-2.5 my-4 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-900 hover:shadow-lg focus:bg-stone-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-900 active:shadow-lg transition duration-150 ease-in-out">
                    &#x2B06;	UPVOTES: {upvotes}
                </button>

                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={handleDownvotes}
                    className="inline-block px-2 py-2.5 my-4 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orage-900 hover:shadow-lg focus:bg-stone-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-900 active:shadow-lg transition duration-150 ease-in-out">
                    &#x2B07;    DOWNVOTES: {downvotes}
                </button>
            </div>
        </div>
    ) : (
        <></>
    );
}

export default Memes;
