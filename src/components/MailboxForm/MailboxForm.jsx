import { useState } from "react";

const MailboxForm = ({ addBox }) => {
  
  const [boxSize, setBoxSize] = useState("");
  const [boxOwner, setBoxOwner] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (boxSize && boxOwner) {
      const newBox = { boxSize, boxOwner };
      addBox(newBox);
      setBoxSize("");
      setBoxOwner("");
    }
  };

  return (
    <div>
      <h2>Create a New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Box Size:
          <select
            value={boxSize}
            onChange={(e) => setBoxSize(e.target.value)}
            required
          >
            <option value="">Select size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <br />
        <label>
          Box Owner:
          <input
            type="text"
            value={boxOwner}
            onChange={(e) => setBoxOwner(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Mailbox</button>
      </form>
    </div>
  );
};

export default MailboxForm;
