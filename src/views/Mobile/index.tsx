import {Wrap,Container} from './styles'
import React, {useEffect} from "react";
export default () => {

    return (
        <Wrap >
            <Container>
                <iframe id="iframe" src="https://i-cat-one.vercel.app/cat" frameBorder="0" width="100%"
                        height="577" />
            </Container>
        </Wrap>
    )

}
