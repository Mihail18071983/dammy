import styles from "./DummyTable.module.css";

const DummyTable = () => (
 <div className={styles.wrapper}>
    <h2 className={styles.head}>Dummy Table</h2>
    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
        </tr>
        <tr>
          <td>Data 3</td>
          <td>Data 4</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DummyTable;
