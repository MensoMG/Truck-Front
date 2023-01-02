import React, { useState } from "react";
import Request from "../../components/Request/Request";
import Header from "../../components/Header/Header";
import User from "../../components/User/User";
import styles from "./userpage.module.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import RequestForm from "../requestForm/RequestForm";

const UserPage = () => {
  const navigate = useNavigate()
  const [path, setPath] = useState("user");
  const [alert, setAlert] = useState(false)

  const handleRequest = () => {
    setPath("request")
    setAlert(false)
  }

  const handleLogOut =() => {
    localStorage.clear();
    navigate('/')
    window.location.reload()
  }

  return (
    <>
      <Header />
      <section className={styles.user_block}>
        <div className={styles.request}>
          {path === "user" && <User />}
          {path === "request" && <Request />}
          {path === "addRequest" && <RequestForm setAlert={setAlert}/>}
          {path === "card" && <Navigate to={"/cars"} /> }
        </div>
        <div className={styles.aside}>
          <div onClick={() => setPath("user")}>Личная страница</div>
          <div onClick={() => handleRequest()}>Заявки</div>
          <div onClick={() => setPath("addRequest")}>Сделать заявку</div>
          <div className={alert ? styles.alert : styles.alertoff}><p>1</p></div>
            <div onClick={() => handleLogOut()}>Выйти из аккаунта</div>
        </div>
      </section>
    </>
  );
};

export default UserPage;
