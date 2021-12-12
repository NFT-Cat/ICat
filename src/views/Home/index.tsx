import {Wrap,AEmpty,List,Date,ListItem,Container} from './styles'
import {DoubleIcon} from '@/components'
import React, {useEffect} from "react";
import Cart3d from '../../utils/animations3D';
export default () => {
    useEffect(()=>{
        const Cat = new Cart3d();
        Cat.start();
        const list = require('../../utils/getBubbleScoreList.json').Content.bubbleScoreList;
        Cat.setGoldCoinInfo(list);
    },[])
    return (
        <Wrap >
                <Container id='canvas'>

                </Container>
        </Wrap>
    )

}
