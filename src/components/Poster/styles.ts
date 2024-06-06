import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: fit-content;
    margin: auto;
    cursor: pointer;
    border-radius: 6px;
    :hover {
    box-shadow: 0 0 15px #00f7ff, inset 0  0 15px #00f7ff;
    transition: 0.15s ease-in-out;
        img {

            transform: scale(1.15);
            transition: 1s;
        }
       .title p::before {
        width: 100%;
        transition: .5s ease-in;

       }

    }

    .image {
        width: 200px;
        height: 300px;
        overflow: hidden;
        border-radius: 6px;
        img {
        height: 100%;
                 }
    }
   
   
 
    .title {
        border-radius: 6px;
        height: 50px;
        width: 100%;
        background-image: linear-gradient(to bottom,
        rgba(0,0,0,0.9),
        rgba(0,0,0,0)
         );
        position: absolute;
        top: 0;
        font-size: 14px;
        padding: 5px 0 0 5px

        
    }
    .title p {
        margin: 0;
        padding: 0;
        display: inline-block;
        position: relative;
    }



`