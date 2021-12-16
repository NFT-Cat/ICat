import styled from "styled-components";


export const Wrap = styled.div`
           width: 100%;
           height: 60vh;
           display: flex;
           flex-direction: column;
           position: relative;
           .top-img{
             height: 100%;
             width: 100%;
             position: absolute;
             left: 0px;
             top: -101px;
             background: url("../../public/assets/modelBG.png") center top no-repeat;
             background-size: contain;
           }
           .cat-top{
              position: absolute;
              width: 83px;
              height: 100px;
              top: -41px;
              left: 50%;
              margin-left: -41px;
              z-index: 1;

           }
          .header{
             width: 100%;
             height: 60px;
             display: flex;
             align-items: center;
             justify-content: center;
              padding-top: 20px;
              .title{
                 font-size: 20px;
                 color: #ffffff;
              }
          }
          .container{
             width: 100%;
             height: 100%;
             display: flex;
             flex-wrap: wrap;
             padding: 0.25rem;
             .item{
                 border: solid 1px #ddd;
                 flex: 1;
                  height: 70px;
                  margin: 5px;
                  border-radius: 5px;
             
             }
          }
`;
export const WrapContent=styled('div')`
        width: 100%;
        height: 100%;
        margin-top: 104px;
`