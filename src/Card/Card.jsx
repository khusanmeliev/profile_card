import React from "react";
import { S } from "./styles";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Card = () => {
  return (
    <S.Wrapper>
      <S.Card>
        <S.Details>
          <S.Image src="https://cdn.mirchistatus.com/siteuploads/images/images6/2885/thumb/fabulous-look-dp-model-boys_xlrg.jpg?time=1555306482" />
          <S.Title>Khusan Meliev</S.Title>
          <S.Text>front end developer</S.Text>
          <S.Button>Hire Me</S.Button>
        </S.Details>
        <S.Global>
          <S.Box>
            <S.Icon>
              <FiTwitter />
            </S.Icon>
            <S.Followers>
              <h1>16.7k</h1>
              <p>Followers</p>
            </S.Followers>
          </S.Box>
          <S.Box>
            <S.Icon>
              <FaLinkedinIn />
            </S.Icon>
            <S.Followers>
              <h1>16.7k</h1>
              <p>Followers</p>
            </S.Followers>
          </S.Box>
          <S.Box>
            <S.Icon>
              <FiGithub />
            </S.Icon>
            <S.Followers>
              <h1>16.7k</h1>
              <p>Followers</p>
            </S.Followers>
          </S.Box>
        </S.Global>
      </S.Card>
    </S.Wrapper>
  );
};

export default Card;
