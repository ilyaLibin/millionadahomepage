import { createSelectable } from 'react-selectable-fast'
import React, { memo } from 'react';
import classNames from 'classnames';

const Square = createSelectable(({ selectableRef, isSelected, isSelecting, image }) => {
  const boxClasses = classNames({
    'box-selected': isSelected,
    'box-selecting': isSelecting,
    'box': true
  });

  return !!image ?
    <img className="user-img sold" ref={selectableRef} src={process.env.PUBLIC_URL + '/img/' + image} alt="sold" /> :
    <div className={boxClasses} ref={selectableRef}></div>
}
);

export default memo(Square);
