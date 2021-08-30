import { SelectableGroup } from 'react-selectable-fast';
import List from './List';

const array = Array.from(Array(10000).keys());

function Matrix() {
  return (
    <SelectableGroup
      deselectOnEsc={true}
      selectboxClassName="selectBox"
      className="main"
      clickClassName="tick"
      enableDeselect={true}
      tolerance={0}
      globalMouse={true}
      allowClickWithoutSelected={true}
      duringSelection={() => {}}
      onSelectionClear={() => { }}
      onSelectionFinish={() => {}}
      onSelectedItemUnmount={() => { }}
      ignoreList={['.not-selectable', '.sold', '.on-sale']}>
      <List items={array} />
    </SelectableGroup>
  )
}

export default Matrix;
