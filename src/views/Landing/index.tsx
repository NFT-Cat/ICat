import {Wrap,AEmpty,List,Date,ListItem,Container} from './styles'
import React, {useEffect} from "react";
import {useHistory} from 'react-router'
import './index.css';
import './main.css';
import {Principal} from "@dfinity/agent";
import {useAuth} from "@/usehooks/useAuth";
export default () => {
    const history = useHistory();
    const {principal,logOut,logIn}: {  principal: Principal,logOut:Function,logIn:Function} = useAuth();
    const Login = async ()=>{
        await logIn()
        // history.push('/cat')
    }
    useEffect(()=>{

    },[])
    return (
        <Wrap >
                <div className="App">
                    <div className="wrap">
                        <div className="header">
                            <div className="titleimg"></div>
                            <p className="intr-text">免费领取3D猫</p>
                            <p className="getnft-text">Get your NFT badge On Internet Computer</p></div>
                        <div className="form-wrap">
                            <div className="btn-wrap">
                                <button className="btn-claim" onClick={Login}>internet identity</button>
                                <div className="Toastify"></div>
                            </div>
                            <div className="btn-wrap">
                                <button className="btn-claim">plug wallet</button>
                                <div className="Toastify"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </Wrap>
    )

}
