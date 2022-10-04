import styled from "styled-components";

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(24, 189, 187, 1) 59%,
      rgba(0, 212, 255, 1) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Card: styled.div`
    width: 350px;
    height: 550px;
    border-radius: 15px;
    border: 2px solid white;
    display: flex;
    flex-direction: column;
  `,

  Details: styled.div`
    width: 100%;
    height: 60%;
    border-radius: 15px 15px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,

  Image: styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
  `,

  Title: styled.h1`
    color: white;
    margin-top: 5px;
    font-weight: 500;
  `,

  Text: styled.p`
    color: white;
    margin-top: 0px;
    font-size: 20px;
  `,

  Button: styled.button`
    width: 120px;
    height: 40px;
    border-radius: 20px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(24, 189, 187, 1) 59%,
      rgba(0, 212, 255, 1) 100%
    );
    color: white;
    border: none;
    font-size: 15px;
    cursor: pointer;
  `,

  Global: styled.div`
    width: 100%;
    height: 40%;
    border-radius: 0px 0px 15px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  Box: styled.div`
    width: 33%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  `,
  Icon: styled.div`
    width: 80%;
    height: 50%;
    border-radius: 50%;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(24, 189, 187, 1) 59%,
      rgba(0, 212, 255, 1) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 40px;
    }
  `,

  Followers: styled.div`
    height: 40%;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;

    h1 {
      font-size: 25px;
      color: white;
      margin-top: 10px;
    }
    p {
      font-size: 12px;
      margin-top: -20px;
      color: white;
      font-weight: 100;
    }
  `,
};
