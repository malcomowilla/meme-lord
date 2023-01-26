
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



                
            });
            




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


    </div> :
    <></>
);


};


export default Memes