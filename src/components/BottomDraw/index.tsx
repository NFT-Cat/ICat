import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {Wrap,WrapContent} from './styles';
import './index.less';
type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface Props {
    open:boolean,
    handleCLose:()=>void
}
export  const BottomDraw = ({open=false,handleCLose}:Props)=> {



    return (
        <div>
            {([ 'bottom'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={open}
                        onClose={()=>handleCLose()}
                        onOpen={()=>{}}
                    >
                        <Wrap>
                            <img className='cat-top' src="../../public/assets/top.png" alt=""/>
                            <div className='top-img' >
                                <header className='header'>
                                    <div className='title'>商城</div>
                                </header>
                                <WrapContent>
                                <ul className='container'>
                                    <li className='item'>

                                    </li>
                                    <li className='item'>

                                    </li>
                                    <li className='item'>

                                    </li>
                                    <li className='item'>

                                    </li>
                                </ul>
                                </WrapContent>
                            </div>

                        </Wrap>
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}