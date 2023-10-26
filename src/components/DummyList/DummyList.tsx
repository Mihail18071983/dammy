const list = [
    'Item 1', 
    'Item 2',
    'Item 3' 
  ];

const DummyList = () => (
  
    <div>
      <h2>Dummy List</h2>

      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}  
      </ul>

    </div>
);

export default DummyList;
