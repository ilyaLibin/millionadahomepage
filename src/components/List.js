import Square from './Square';

function coordinates(i) {
  const raw = Math.ceil(i / 100);
  const column = i % 100 + 1;
  const rc = `r${raw}c${column}`;

  return rc;
}

const sold = {
  r2c2: '8.jpg',
  r2c3: '7.jpg',
  r2c4: '6.jpg',
  r2c5: '5.jpg',
  r3c2: '4.jpg',
  r3c3: '3.jpg',
  r3c4: '2.jpg',
  r3c5: '1.jpg',
}
const List = (props) => {
  const { items } = props;

  return (
    <div className="grid">
      {
        items.map((item, i) => {
          const image = sold[coordinates(i)];
          return (<Square key={i} image={image} />)
        })
      }
    </div>
  )
}

export default List;
