import React from "react";
import "./userspage.css";


const Userspage = () => {
 
  return (
    <section className="users">
      <div className="card1" style={{
          backgroundImage:
            "url(https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "90%",
          height: "100%"
        }}>
        <div>
          <i
            style={{ color: "#6c9cc6" }}
            className="fa fa-user-circle fa-3x"
            aria-hidden="true"
          ></i>
        </div>
        <div style={{marginLeft:"2rem"}}>
          <h3>Maca Diskrecija</h3>
          <p>macone@gmail.com</p>
          <p>30 slika</p>
        </div>
      </div>
      <div className="card1" style={{
          backgroundImage:
            "url(https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "90%",
          height: "100%"
        }}>
        <div>
          <i
            style={{ color: "#312d2d" }}
            className="fa fa-user-circle fa-3x"
            aria-hidden="true"
          ></i>
        </div>
        <div style={{marginLeft:"2rem"}}>
          <h3>Sandra Afrika</h3>
          <p>afrika@gmail.com</p>
          <p>100 slika</p>
        </div>
      </div>
      <div
        className="card1"
        style={{
          backgroundImage:
            "url(https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "90%",
          height: "100%"
        }}
      >
        <div>
          <i
            style={{ color: "#f1f1f1" }}
            className="fa fa-user-circle fa-3x"
            aria-hidden="true"
          ></i>
        </div>
        <div style={{marginLeft:"2rem"}}>
          <h3>Tiana Ajfon</h3>
          <p>ajfon@mtel.ba</p>
          <p>88 slika</p>
        </div>
      </div>
      <div className="card1" style={{
          backgroundImage:
            "url(https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "90%",
          height: "100%"
        }}>
        <div>
          <i
            style={{ color: "#312d2d" }}
            className="fa fa-user-circle fa-3x"
            aria-hidden="true"
          ></i>
        </div>
        <div style={{marginLeft:"2rem"}}>
          <h3>Mekdzida Kreso</h3>
          <p>kresoje@hotmail.com</p>
          <p>17 slika</p>
        </div>
      </div>
    </section>
  );
};

export default Userspage;
