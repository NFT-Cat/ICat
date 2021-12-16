import styled from "styled-components";

export const Wrap = styled('div')`
      height: 100vh;
      width: 100vw;
      background: url("../../public/resource3d/bg2.png") center center no-repeat;
      background-size: cover;
      overflow: hidden;
      position: relative;
`

export const Date = styled.div`
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height */
        color: #888E8F;
        margin-bottom: 15px;

`;
export const ListItem = styled.div`
       width: 100%;
       height: 80px;
       background: #1E1E1E;
       border-radius: 20px;
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: space-between;
       padding: 16px;
       
       .column{
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          .title{
             font-family: Nunito Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 25px;
            color: #F6FCFD;

          }
          .subTitle{
          font-family: Nunito Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height */
            
            
            color: #888E8F;
          }
       }
       .margin{
         margin-left: 16px;
       }
       .right{
        text-align: right;
       }
      
`;


export const Container = styled.canvas`
     width: 100%;
     height: auto;
`
export const MenusPosition=styled('div')`
     position: absolute;
     right: 20px;
     top: 100px;
`