import React, { useEffect, useState } from 'react';
import './style.css';

const Table = ({ isLoading, columns, data, onRowClick = () => {} }) => {
  const [rows, setRows] = useState(data);
  useEffect(() => {
    setRows(data);
  }, [data]);
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>

        {!isLoading && (
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} onClick={() => onRowClick(row)}>
                {columns.map((column) => (
                  <td key={`${row.id + column.key}`}>
                    {column.render
                      ? column.render(row)
                      : Array.isArray(row[column.key])
                      ? row[column.key].join(' - ')
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {isLoading && <h1>Loading...</h1>}
    </>
  );
};

export default Table;
