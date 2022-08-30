import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import AddContact from "../components/AddContact";
import ContactsList from "../components/ContactsList";
import EditContact from "../components/EditContact";
import { getAllContacts } from "../services/ContactService";

const AppRouter = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    // data fetching here
    getAllContacts()
      .then((response) => response.json())
      .then((data) => setContacts(data["data"]));
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <ContactsList
                  {...props}
                  contacts={contacts}
                  setContacts={setContacts}
                />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddContact
                  {...props}
                  contacts={contacts}
                  setContacts={setContacts}
                />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditContact
                  {...props}
                  contacts={contacts}
                  setContacts={setContacts}
                />
              )}
              path="/edit/:id"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
