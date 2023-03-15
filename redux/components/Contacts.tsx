import React = require('react');
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  return (
    <div>
      <Form />
      <div className="p-2">
        add new contact&nbsp;
        <button className="btn btn-success btn-sm">Create</button>
      </div>
      <List />
    </div>
  );
};

const Form = () => {
  const dispatch = useDispatch();
  const { selected } = useSelector((e: any) => e);

  const [form, setform] = React.useState<any>({});

  React.useEffect(() => {
    setform(selected);
  }, [selected]);

  console.log(form);

  return (
    <React.Fragment>
      {selected ? (
        <div className="popup-modal position-absolute d-flex justify-content-center w-100 p-5 z-1">
          <div
            className="bg-light rounded p-4"
            style={{ height: 'fit-content' }}
          >
            <label>name</label>
            <input
              onInput={(e) =>
                setform((val) => ({ ...val, name: e.target.value }))
              }
              value={form?.name}
              type="text"
              className="form-control"
            />
            <label>email</label>
            <input
              onInput={(e) =>
                setform((val) => ({ ...val, email: e.target.value }))
              }
              value={form?.email}
              type="text"
              className="form-control"
            />
            <label>phone</label>
            <input
              onInput={(e) =>
                setform((val) => ({ ...val, phone: e.target.value }))
              }
              value={form?.phone}
              type="text"
              className="form-control"
            />
            <label>photo</label>
            {/* <input value={selected.pic} type="file" className="form-control"/> */}
            <div className="btn-group my-2 w-100">
              <button
                onClick={() =>
                  dispatch({
                    type: 'edit',
                    payload: { new: form, old: selected },
                  })
                }
                className="btn btn-success"
              >
                Save
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => dispatch({ type: 'cancel-select' })}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

const List = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((e: any) => e);

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <td>S No.</td>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Edit</td>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, i) => (
          <tr
            key={contact.name}
            onClick={() =>
              dispatch({ type: 'select', payload: { old: contact } })
            }
          >
            <td>{i}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>
              <button className="btn btn-sm btn-success">edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Contacts;
