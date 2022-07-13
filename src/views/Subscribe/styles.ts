import styled from "styled-components";
import mediaQuery from "../../utils/mediaQuery";

export const Container = styled.div`
  margin-top: 9.375rem;
  margin-bottom: 20rem;
  form {
    width: 32.4263rem;
    height: 3.2237rem;
    background: #ffffff;
    border-radius: 1.625rem;
  }

  form > input {
    border: none;
    width: 22.5rem;
    height: 3.2237rem;
    border-radius: 1.625rem;
    padding-left: 1rem;
    font-weight: 300;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    color: rgba(41, 50, 65, 0.5);
    
  }

  form > button {
    width: 9.61rem;
    height: 2.8519rem;
    background: #293241;
    border-radius: 1.4375rem;
    border: none;
    outline: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 1.125rem;
    text-align: center;
    color: #ffffff;
  }
  @media (max-width: ${mediaQuery.sml}) {
  
    form {
      width: 90%;
    }
    form > input {
      width:100%;
      margin: 0 auto;
      text-align: center;
      padding: 0;
    }
      
    form > button{
      background-color: #EE6C4D;
      margin-top: 20px;;
    }
  }
`;
export const Modal = styled.div`
width: 90%;
  height: 24.8rem;
  padding-left: 7.5rem;
  padding-top: 3.75rem;
  background-color: #293241;
  border-radius: 1.25rem;
  margin: 5rem auto;
  background-image: url("/contactImage.svg");
  background-repeat: no-repeat;
  background-position: 37.5rem -5.625rem;
  h1 {
    font-weight: 700;
    font-size: 2.25rem;
    margin: 0;
    color: #ffffff;
  }
  p {
    font-weight: 400;
    font-size: 1.125rem;
    margin: 0;
    margin-top: 0.5625rem;
    margin-bottom: 3.125rem;
    color: #ffffff;
    width: 32.1875rem;
  }
  @media (max-width: ${mediaQuery.lg}) {
    background-repeat: no-repeat;
    background-position: 27rem -2.625rem;
    padding-left: 3rem;
    background-size: 550px;
  }
  @media (max-width: ${mediaQuery.mdl}) {
    background-image: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    text-align: center;
  }
 @media (max-width: ${mediaQuery.md}) {
  div{
    width: 80%;
   
    display: flex;
    flex-direction: column;
    align-items: center; 
    
  
   p {
      width: 80%;
  }
  }
  
 }
 @media (max-width: ${mediaQuery.sml}) {
  height: 30rem;
  padding: 0;
 }
`;
