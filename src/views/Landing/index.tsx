import {Wrap,AEmpty,List,Date,ListItem,Container} from './styles'
import React, {useEffect} from "react";
import './index.css';
import './main.css';
export default () => {
    useEffect(()=>{

    },[])
    return (
        <Wrap >
                <div className="App">
                    <div className="wrap">
                        <div className="top"></div>
                        <div className="header">
                            <div className="titleimg"></div>
                            <p className="intr-text">免费领取3D猫</p>
                            <p className="getnft-text">Get your NFT badge On Internet Computer</p></div>
                        <div className="form-wrap">
                            <div className="input-wrap">
                                <input type="text" placeholder="Type your nick name to get NFT badge"
                                                               value=""/>
                            </div>
                            <div className="btn-wrap">
                                <button className="btn-claim">login</button>
                                <div className="Toastify"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </Wrap>
    )

}
