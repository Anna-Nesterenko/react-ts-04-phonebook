import { ContactContainer, ContactEl, ContactBtn } from "./ContactList.styled";

interface IPropsContacts {
  contacts: { [key: string]: string }[];
  onDeleteContact: (contactId: string) => void;
}

export const ContactList = ({ contacts, onDeleteContact }: IPropsContacts) => {
  return (
    <ContactContainer>
      {contacts.map(({ id, name, number }) => (
        <ContactEl key={id}>
          <span>- {name}: </span>
          <span>{number}</span>
          <ContactBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </ContactBtn>
        </ContactEl>
      ))}
    </ContactContainer>
  );
};
