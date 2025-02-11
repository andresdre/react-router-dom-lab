import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedMailbox = mailboxes.find(mailbox => mailbox._id === Number(mailboxId)); // Find the mailbox by id

  if (!selectedMailbox) {
    return <h2>Mailbox not found</h2>;
  }

  return (
    <div className="mail-box">
      <h2>Mailbox Details</h2>
      <p>Box Size: {selectedMailbox.boxSize}</p>
      <p>Box Owner: {selectedMailbox.boxOwner}</p>
    </div>
  );
};

export default MailboxDetails;
