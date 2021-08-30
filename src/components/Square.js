import { createSelectable } from 'react-selectable-fast'
import React from 'react';
import classNames from 'classnames';

class SelectableItem extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.isSelected !== nextProps.isSelected) {
      return true;
    }
    if (this.props.isSelecting !== nextProps.isSelecting) {
      return true;
    }
    return false;
  }

  render() {
    const { selectableRef, isSelected, isSelecting, image } = this.props;
    const boxClasses = classNames({
      'box-selected': isSelected,
      'box-selecting': isSelecting,
      'box': true
    });

    return !!image ?
      <img className="user-img sold" ref={selectableRef} src={process.env.PUBLIC_URL + '/img/' + image} alt="sold" /> :
      <div className={boxClasses} ref={selectableRef}></div>

  }
}

export default React.memo(createSelectable(SelectableItem));
