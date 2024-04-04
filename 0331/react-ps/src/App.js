import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardLink from "react-bootstrap/CardLink";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";
import ListGroup from "react-bootstrap/ListGroup";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      <Card style={{ width: "36rem" }}>
        <CardBody>
          <CardTitle style={{ fontWeight: "bold" }}>LEE SEUNG HEON</CardTitle>
          <CardText>{`Republic of Korea\n2021, Kyungsung University Electronic Engineering`}</CardText>
        </CardBody>

        <ListGroup variant="flush">
          <div>
            <ListGroup.Item style={{ borderWidth: '0' }}>
              <CardTitle as="h6" style={{ fontWeight: "bold" }}>
                Languages
              </CardTitle>
              <div>
                <Badge bg="primary" style={{ marginRight: "5px" }}>
                  C
                </Badge>
                <Badge bg="primary" style={{ marginRight: "5px" }}>
                  C++
                </Badge>
                <Badge bg="primary" style={{ marginRight: "5px" }}>
                  C#
                </Badge>
                <Badge bg="danger" style={{ marginRight: "5px" }}>
                  Java
                </Badge>
                <Badge
                  bg="warning"
                  style={{ marginRight: "5px", color: "black" }}
                >
                  Python
                </Badge>
              </div>
            </ListGroup.Item>
          </div>

          <div>
            <ListGroup.Item style={{ borderWidth: '0' }}>
              <div>
                <CardTitle
                  as="h6"
                  style={{ fontWeight: "bold", marginBottom: "15px" }}
                >
                  Completed Projects
                </CardTitle>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    marginTop: "10px",
                  }}
                >
                  <Badge bg="danger">NGS</Badge>
                  <Card.Subtitle
                    as="h6"
                    className="mb-2 text-muted"
                    style={{ marginLeft: "5px", fontWeight: "bold" }}
                  >
                    FASTQ/A Quality Statistics, Geumcheon-gu, Seoul
                  </Card.Subtitle>
                </div>
                <CardText style={{ marginTop: "3px", marginLeft: "3px" }}>
                  {`Porting from C to Python and Optimization\nImproved performance by ~150%`}
                </CardText>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    marginTop: "10px",
                  }}
                >
                  <Badge bg="danger">NGS</Badge>
                  <Card.Subtitle
                    as="h6"
                    className="mb-2 text-muted"
                    style={{ marginLeft: "5px", fontWeight: "bold" }}
                  >
                    Sequencing Depth & Coverage, Geumcheon-gu, Seoul
                  </Card.Subtitle>
                </div>
                <CardText style={{ marginTop: "3px", marginLeft: "3px" }}>
                  {`Optimization\nImproved performance by tens to hundreds of percent.`}
                </CardText>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    marginTop: "10px",
                  }}
                >
                  <Badge bg="secondary">RPA</Badge>
                  <Card.Subtitle
                    as="h6"
                    className="mb-2 text-muted"
                    style={{ marginLeft: "5px", fontWeight: "bold" }}
                  >
                    Project Documents Download & Analysis, Gangdong-gu, Seoul
                  </Card.Subtitle>
                </div>
                <CardText style={{ marginTop: "3px", marginLeft: "3px" }}>
                  {`Automation\nImproved work efficiency by dozens of hours a day.`}
                </CardText>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    marginTop: "10px",
                  }}
                >
                  <Badge bg="secondary">RPA</Badge>
                  <Card.Subtitle
                    as="h6"
                    className="mb-2 text-muted"
                    style={{ marginLeft: "5px", fontWeight: "bold" }}
                  >
                    AI Dataset Up & Down, Document Analysis, Yeonje-ro, Busan
                  </Card.Subtitle>
                </div>
                <CardText style={{ marginTop: "3px", marginLeft: "3px" }}>
                  {`Automation\nImproved work efficiency by dozens of hours a day.`}
                </CardText>
              </div>
            </ListGroup.Item>

            <ListGroup.Item style={{borderWidth: '0'}}>
              <div>
                <CardTitle
                  as="h6"
                  style={{ fontWeight: "bold", marginBottom: "10px" }}
                >
                  Ongoing Projects
                </CardTitle>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    marginTop: "10px",
                  }}
                >
                  <Badge bg="primary">IoT</Badge>
                  <Card.Subtitle
                    as="h6"
                    className="mb-2 text-muted"
                    style={{ marginLeft: "5px", fontWeight: "bold" }}
                  >
                    Smart Fire Alarm System
                  </Card.Subtitle>
                </div>
                <CardText style={{ marginTop: "3px", marginLeft: "3px" }}>
                  {`Integrated Fire Alarm System\nESP32-S3, Android, Azure`}
                </CardText>
              </div>
            </ListGroup.Item>
          </div>
        </ListGroup>

        <CardBody
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardLink
            className="btn btn-primary"
            href="mailto:lyra@ks.ac.kr"
          >
            Contact
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
