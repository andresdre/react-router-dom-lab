const MailboxList = ({ mailboxes }) => {
    return (
      <div>
        <h2>All Mailboxes</h2>
        <ul>
          {mailboxes.map((mailbox) => (
            <li key={mailbox._id}>
              {mailbox.boxSize} Box owned by {mailbox.boxOwner}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MailboxList;
  