import React, {useState, useEffect} from 'react'
import {fetchNode} from '../ajax/require.data'
import {MainHome} from './style'

export default function Home(){
const [state = {data: []}, fetchLoad] = useState({data: []})
const result = async () => {
   let response = await fetchNode('POST', 'http://127.0.0.1:5500/api/home')
   fetchLoad({data: response})
}
useEffect(()=>{ result() }, [])
const data = state.data.map((video, index) =>{return <section key={index}>
   <a href={video.show_name_eng}>
      <picture>
         <source media="(max-width: 1024px) and (min-width: 768px)" srcSet={video.show_picture_1024}/>
         <source media="(max-width: 768px)" srcSet={video.show_picture_768}/>
         <img src={video.show_picture_1980} alt={video.show_name_eng}/>
      </picture>
      <p>{video.show_name_ru}</p>
   </a>
</section>})
console.log(state.data)
   return(<MainHome>
      <section>
         {data}
      </section>
   </MainHome>)
}