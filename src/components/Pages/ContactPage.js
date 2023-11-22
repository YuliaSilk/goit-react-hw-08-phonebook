import { ContactsContainer, PhonebookContainer, ContactHeaderStyle } from "components/Contacts/Contacts.styled";
import { ContactForm } from "components/ContactsForm/ContactsForm";
import { FormTittle } from "components/ContactsForm/ContactsForm.styled";
import { ContactList } from "components/ContactsList/ContactsList";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectIsLoading } from "redux/selectors";
import { selectContacts } from "redux/selectors";
// import { FormTittle } from "components/ContactsForm/ContactsForm.styled";


export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const contacts = useSelector(selectContacts);


    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <PhonebookContainer>
        <Helmet>
            <FormTittle>
            Phonebook
            </FormTittle>
        </Helmet>
        <ContactForm />
        <ContactsContainer>
        <ContactHeaderStyle>Contacts</ContactHeaderStyle>
        {isLoading && 'Request in progress...'}
        <Filter />
        {contacts.length > 0 && (<ContactList />)}
        </ContactsContainer>
        </PhonebookContainer>
    )
}

