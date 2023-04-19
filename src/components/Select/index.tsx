import React, { useEffect, useRef, useState } from 'react';
import * as S from './Select.styled';
import { SelectOption, SelectProps } from './models';

export const Select: React.FC<SelectProps> = ({
  dynamic,
  multiple,
  value,
  onChange,
  options,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((val) => val !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDownEvent = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;

      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown': {
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            break;
          }
          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };
    containerRef?.current?.addEventListener('keydown', handleKeyDownEvent);

    return () => {
      containerRef?.current?.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, [isOpen, highlightedIndex]);

  return (
    <S.SelectContainer
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
    >
      <S.InitialValue>
        {multiple
          ? value.map((v) => (
              <S.OptionBadge
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
              >
                {v.label}
                <span>&times;</span>
              </S.OptionBadge>
            ))
          : value?.label}
      </S.InitialValue>
      <S.ClearButton
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </S.ClearButton>
      <S.Divider />
      <S.Caret />
      <S.OptionsList show={isOpen}>
        {options.map((option, index) => (
          <S.OptionItem
            key={option.value}
            onMouseEnter={() => setHighlightedIndex(index)}
            isSelected={isOptionSelected(option)}
            isHighlighted={index === highlightedIndex}
            // isSelected={option === value}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
          >
            {option.label}
          </S.OptionItem>
        ))}
      </S.OptionsList>
    </S.SelectContainer>
  );
};
