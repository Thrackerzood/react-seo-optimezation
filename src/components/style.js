import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle
`
*{
   margin: 0;
   padding: 0;
}
.deactive_body_style{
   main{
      animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      @keyframes slide-bottom {
         0% {
            transform: translateY(0);
         }
         100% {
            transform: translateY(50px);
         }
      }
   }
}
.active_body_style{
   main{
      z-index: -1;
      position: fixed;
      left: 280px;
      animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      @keyframes slide-right {
         0% {
           transform: translateX(0px);
         }
         100% {
           transform: translateX(280px);
         }
      }
   }
   }
}
.sidebar_close{
   z-index: 1;
   position: fixed;
   top: 0;
   left: -280px;
   width: 100%;
   >nav{
      width: calc(100vw + 280px);
      height: 50px;
      animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      @keyframes slide-bottom {
         0% {
            transform: translateY(-50px);
         }
         100% {
            transform: translateY(0);
         }
      }
      ul{
         display: none;
      }
   }
}

.sidebar_open{
   position: fixed;
   top: 0;
   left: 0px;
   width: 300px; 
   >nav{
      height: 100vh;
      animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      @keyframes slide-right {
         0% {
           transform: translateX(-400px);
         }
         100% {
           transform: translateX(0);
         }
      }
   }
   >div{
      background: rgb(0,0,0,0.8);
      height: 100vh;
      width: 100vw;
      position: absolute;
   }
}
`

export const Header = styled.header
`
>nav{
   backdrop-filter: blur(1px);
   background: rgb(0,0,0, .85);
   ul{
      padding: 20px;
      display: flex;
      list-style: none;
      flex-direction: column;
      li{
         margin: 20px 0;
         a{
            font-size: 1em;
            font-weight: 700;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            color: white;
            text-decoration: none;
         }  
      }

   }
   .active{
      color: #0095ff;
   }
}
`

export const MainHome = styled.main
`
padding: 20px;
margin: 0 auto;
margin-top: 70px;
max-width: 1024px;
min-height: 1200px;
>section{
   display: flex;
   align-items: flex-start;
   justify-content: space-evenly;
   section {
      width: 200px;
      text-align: center;
      a{
         color: black;
         text-decoration: none;
         font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
         :hover{
            color: red;
         }
      }    
   }
}
img{
   width: 125px;
}
@media (max-width: 1024px) and (min-width: 768px){
   img{
      width: 75px;
   }
}
@media (max-width: 768px){
   img{
      width: 50px;
   }
}
`