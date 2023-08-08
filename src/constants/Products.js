import { ROLES } from '.';

export const PRODUCT_COLUMNS = (handleDelete, handleEdit, role) => [
  {
    key: 'id',
    title: 'Id',
  },
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'quantity',
    title: 'Quantity',
  },
  {
    key: 'actions',
    title: 'Actions',
    render: (data) => (
      <div onClick={(e) => e.stopPropagation()}>
        <button
          disabled={role == ROLES.GUEST}
          onClick={() => handleDelete(data.id)}>
          delete
        </button>
        <button
          disabled={role == ROLES.GUEST}
          onClick={() => handleEdit(data.id)}>
          edit
        </button>
      </div>
    ),
  },
];
