import {Wrap, Item} from './styles'

const Icons = ['knapsack','shopping'];
interface Props {
    onSelect:Function
}
export const Menus = ({onSelect}:Props) => {
    return (
        <Wrap>
            {
                Icons.map((item:string) => (<Item onClick={()=>onSelect(item)} key={item}>
                        {item}
                </Item>))
            }
        </Wrap>
    )
}