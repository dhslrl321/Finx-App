import styled from "styled-components";

export const HomeContainer = styled.div`
  background: whitesmoke;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 30px 0;
  font-size: 1.6rem;
  font-weight: bolder;
`;

export const ModalContainer = styled.div`
  background: gray;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  position: absolute;
  transition: 1s ease;
  top: ${({ temp }) => (temp ? "0%" : "-100%")};
  display: flex;
  justify-content: center;
  opacity: 80%;
  align-items: center;
`;

export const Modal = styled.div`
  width: 70%;
  height: 100px;
  background: linear-gradient(135deg, #9cc3fa 1%, #0b03fc 99%);
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ModalText = styled.div`
  font-size: 1rem;
  margin: 5px 0;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 20%;
  height: auto;
`;

export const LogoText = styled.div`
  font-weight: bolder;
  margin-left: 8px;
`;
