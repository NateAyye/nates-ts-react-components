import styled from 'styled-components';

type OptionItemType = React.HTMLAttributes<HTMLLIElement> & {
  isSelected: boolean;
  isHighlighted: boolean;
};

type OptionsListType = React.HTMLAttributes<HTMLUListElement> & {
  show: boolean;
};
export const OptionBadge = styled.button`
  display: flex;
  align-items: center;
  border: 0.05em solid #777;
  border-radius: 0.5em;
  padding: 0.15em 0.25em;
  gap: 0.25em;
  cursor: pointer;
  background: none;
  outline: none;

  :hover,
  :focus {
    background-color: hsl(0, 100%, 90%);
    border-color: hsl(0, 100%, 50%);
  }
  :hover span,
  :focus span {
    color: hsl(0, 100%, 50%);
  }

  span {
    font-size: 1.25em;
    color: #777;
  }
`;

export const OptionItem = styled.li<OptionItemType>`
  padding: 0.25em 0.5em;
  cursor: pointer;
  background-color: ${({ isSelected, isHighlighted }) =>
    isHighlighted
      ? 'hsl(200, 100%, 50%)'
      : isSelected
      ? 'hsl(200, 100%, 70%)'
      : ''};
  color: ${(props) => (props.isHighlighted ? 'white' : 'black')};
`;

export const Caret = styled.div`
  transform: translate(0 25%);
  border: 0.25em solid transparent;
  border-top-color: #777;
`;

export const OptionsList = styled.ul<OptionsListType>`
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  display: ${({ show }) => (show ? 'block' : 'none')};
  max-height: 15em;
  overflow-y: auto;
  border: 0.05em solid #777;
  border-radius: 0.25em;
  width: 100%;
  left: 0;
  top: calc(100% + 0.25em);
  background-color: white;
  z-index: 100;
`;

export const InitialValue = styled.span`
  flex-grow: 1;
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
`;

export const Divider = styled.div`
  background-color: #777;
  align-self: stretch;
  width: 0.05em;
`;

export const ClearButton = styled.button`
  background: none;
  color: #777;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.25em;

  :focus,
  :hover {
    color: #333;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 20em;
  min-height: 1.5em;
  border: 0.05em solid #777;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
  border-radius: 0.25em;
  outline: none;

  :focus {
    border-color: hsl(200, 100%, 50%);
  }
`;
