import {Wrap, Container, MenusPosition} from './styles'
import {BottomDraw, Menus} from '@/components'
import React, {useEffect, useState} from "react";
import Cart3d from '../../utils/animations3D';

export default () => {
    const [open, setOpen] = useState(false);
    //---------------methods-------------------
    const handleClose = () => {
        setOpen(false);
    }
    const handleSelected = () => {
        setOpen(true);
    }
    useEffect(() => {
        const Cat = new Cart3d();
        Cat.start();
        const list = require('../../utils/getBubbleScoreList.json').Content.bubbleScoreList;
        Cat.setGoldCoinInfo(list);
    }, [])
    return (
        <Wrap>
            <Container id='canvas'/>
            <MenusPosition>
                <Menus onSelect={handleSelected}/>
            </MenusPosition>
            <BottomDraw open={open} handleCLose={handleClose}/>
        </Wrap>
    )

}
