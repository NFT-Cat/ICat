import styled from "styled-components";

export const Wrap = styled('div')`
      min-height: 100vh;
      width: 100vw;
`
export const Container = styled.div`
       height: 735px!important;
    margin: 0 auto;
    padding: 102px 25px 159px 23px;
    width: 414px;
    margin-top: 40px;
    background: url('../../public/assets/mobile.png') no-repeat;
    background-size: contain;
    transition: all 0.5s ease 0s;
    overflow: visible;
    position: relative;
    top: 54px;
    z-index: 50;
`;
export const List = styled.div`
       width: 100%;
       display: flex;
       flex-direction: column;
       margin-top: 20px;

`;
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
export const Row = styled.div`
      display: flex;
`

