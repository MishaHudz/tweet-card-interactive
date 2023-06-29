import { useState } from 'react';
import {
  DropdownBtn,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
  DropdownItemBtn,
} from './Dropdown.styled';

function Dropdown({ setFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  const onDropdownBtnClick = () => {
    setIsOpen(prev => !prev);
  };

  const onFilterItemClick = evt => {
    setFilter(evt.target.innerText);
  };

  return (
    <DropdownContainer>
      <DropdownBtn onClick={onDropdownBtnClick}>Filter</DropdownBtn>
      {isOpen && (
        <DropdownContent>
          <DropdownItem>
            <DropdownItemBtn onClick={onFilterItemClick}>All</DropdownItemBtn>
          </DropdownItem>
          <DropdownItem>
            <DropdownItemBtn onClick={onFilterItemClick}>
              Follow
            </DropdownItemBtn>
          </DropdownItem>
          <DropdownItem>
            <DropdownItemBtn onClick={onFilterItemClick}>
              Followings
            </DropdownItemBtn>
          </DropdownItem>
        </DropdownContent>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;
