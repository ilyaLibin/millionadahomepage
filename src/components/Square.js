import { createSelectable } from 'react-selectable-fast'
import React, { memo } from 'react';
import classNames from 'classnames';

const Square = createSelectable(({ selectableRef, isSelected, isSelecting, metadata }) => {
  const boxClasses = classNames({
    'box-selected': isSelected,
    'box-selecting': isSelecting,
    'box': true,
    
  });
  const sharedClasses = {
    'external-link': metadata && metadata.link,
    'for-sale': metadata && !!metadata.price,
    'box-selected': isSelected,
    'box-selecting': isSelecting,
  }
  const imageClasses = classNames('user-img', 'sold', sharedClasses)

  const soldBoxClasses = classNames('box', 'sold', 'box-selected', sharedClasses)

  if (!!metadata) {
    const dataProps = {}
    if (metadata.caption) { dataProps['data-caption'] = metadata.caption; }
    if (metadata.link) { dataProps['data-link'] = metadata.link; }
    if (metadata.price) { dataProps['data-price'] = metadata.price; }

    if (metadata.img) {
      return (
        <img className={imageClasses} {...dataProps} ref={selectableRef} src={process.env.PUBLIC_URL + '/img/' + metadata.img} alt="sold" />
      )
    } else {
      return (
        <div className={soldBoxClasses} {...dataProps} ref={selectableRef}></div>
      )
    }
  } else {
    return (
      <div className={boxClasses} ref={selectableRef}></div>
    )
  }
});

export default memo(Square);
