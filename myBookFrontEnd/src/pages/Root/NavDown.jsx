
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
        <div style={{ backgroundColor: "#171717", lineHeight: "0.9" }}>
          <div className="container text-white d-flex justify-content-between">
            <div className="col-4">
              <div className="col-4">
                <div className="btn-group" role="group" aria-label="Basic example">
                <a href="https://www.amazon.it/Melillo-opere-artista-irpino-illustrata/dp/8855002287"
                    className="btn btn-danger d-inline-block mx-4"
                  >
                    Amazon
                  </a>
                  <a href="https://www.lafeltrinelli.it/aldo-melillo-opere-di-artista-libro-marianna-laudisi/e/9788855002288"
                    className="btn btn-danger d-inline-block mx-4"
                  >
                    Feltrinelli
                  </a>
                  <a href=
                    "https://www.ibs.it/aldo-melillo-opere-di-artista-libro-marianna-laudisi/e/9788855002288"
                    className="btn btn-danger d-inline-block mx-4"
                  >
                    IbS
                  </a>
                </div>
              </div>
            </div>

            <div className="col-4">
              <h5>Contacts:</h5>
              <div>
                <p>Email: laudisimarianna@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
