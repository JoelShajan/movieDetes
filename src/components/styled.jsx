import styled from "styled-components";
export const Flexgrid=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
padding:2ch;`;

export const SearchCard = styled.div`
  width: 20vw;
  height: 100%;
  margin: 0 15px 40px;
  //background:rgb(150,150,150,.1);
  border-radius: 2ch;
  padding:1ch;
  transition:transform .2s;
  border: solid 3px black;
  &:hover{
    transform: scale(1.05);
  }
  .img-wrapper {
    width: 100%;
    border-radius: 2ch;
    height: 420px;
    overflow: hidden;
    border: 1px solid #ddd;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }


  h1 {
    margin: 10px 0;
    font-size: 21px;
  }

  p {
    margin: 0;
  }
`;