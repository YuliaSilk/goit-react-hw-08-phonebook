// import { ContactForm } from "./ContactsForm/ContactsForm";
// import { Filter } from "./Filter/Filter";
// import { ContactList } from "./ContactsList/ContactsList";
// import { ContactHeaderStyle, ContactsContainer, PhonebookContainer } from "./Contacts/Contacts.styled";
// import { FormTittle } from "./ContactsForm/ContactsForm.styled";
import { useDispatch } from "react-redux";
// import { selectContacts } from "redux/selectors";
import { lazy, useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { useAuth } from "./hooks";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import('./Pages/HomePage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const ContactPage = lazy(() => import('./Pages/ContactPage'));

export const App = () => {
  // const contacts = useSelector(selectContacts);
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchContacts())
}, [dispatch])


  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={
          <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
        } />
        <Route path="/login" elements={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
        } />
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={<ContactPage />} />
        } />
      </Route>
      
    </Routes>

    // <PhonebookContainer>
    //   <FormTittle>Phonebook</FormTittle>
    //   <ContactForm />
    //   <ContactsContainer>
    //   <ContactHeaderStyle>Contacts</ContactHeaderStyle>
    //   <Filter />
    //   {contacts.length > 0 && (  <ContactList />)}
    //   </ContactsContainer>
    // </PhonebookContainer>
  )
}

// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const TasksPage = lazy(() => import('../pages/Tasks'));

// export const App = () => {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Refreshing user...</b>
//   ) : (
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<HomePage />} />
    //     <Route
    //       path="/register"
    //       element={
    //         <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
    //       }
    //     />
    //     <Route
    //       path="/login"
    //       element={
    //         <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
    //       }
    //     />
    //     <Route
    //       path="/tasks"
    //       element={
    //         <PrivateRoute redirectTo="/login" component={<TasksPage />} />
    //       }
    //     />
    //   </Route>
    // </Routes>
//   );
// };











