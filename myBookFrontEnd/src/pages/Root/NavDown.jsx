export default function NavDown() {
  return (
    <>
      <div style={{ bottom: "0", left: "0", width: "100%" }}>
       
        <div
          style={{
            background: "#FF0000",
            height: "3px",
            width: "100%",
          }}
        ></div>
        <div style={{ backgroundColor: "#171717", lineHeight:"0.9"}}>
          <div className="container text-white d-flex justify-content-between">
            <div className="col-4">
              <p>Contattami se vuoi più info</p>
            </div>
            <div className="col-4">
              <h5>Contatti:</h5>
              <div>
              Email: laudisimarianna@gmail.com
              Gli orari per contattare il servizio clienti:
              <div>Dal Lunedi al Venerdi : 9:30 19:30.</div>
              <p>Sabato: 9:30 12:00.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
