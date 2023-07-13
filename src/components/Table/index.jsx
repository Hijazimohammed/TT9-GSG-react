import React from 'react';

export const Table = ({ columns, data, actions }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.userId}</td>
            <td>{row.title}</td>
            <td>{row.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
