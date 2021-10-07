//import styled-components
import { DropdownList, DropdownListContainer, ListItem } from './Dropdown-styled';

function Dropdown(props) {
    return (
        <DropdownListContainer visibility={props.visibility} >
            <DropdownList>
                {props.children.map((item) => {
                    return (
                        <ListItem key={item.id} to={"/category/" + item.id}>
                            {item.category_name}
                        </ListItem>
                    );
                })}
            </DropdownList>
        </DropdownListContainer>
    );

};

export default Dropdown;