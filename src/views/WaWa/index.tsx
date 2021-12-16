import {Wrap, Container, MenusPosition} from './styles'
import {BottomDraw, Menus} from '@/components'
import React, {useEffect, useState} from "react";
import {WaWa} from '@/utils/wawa';
import './index.less'
export default () => {
    useEffect(()=>{
        WaWa()
    },[])
    return (
        <Wrap>
            <div id="wrapper">
                <div id="rod"></div>
                <div id="hand"></div>
            </div>

            <div id="babys">

            </div>

            <div id="uptoy">
                <img className='img-wa' src="../../public/assets/images/toy117.png" />
            </div>
            <div id="start_btn">
            </div>
        </Wrap>
    )

}
