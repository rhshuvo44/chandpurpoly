import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slides from "../../components/slider/Slides";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Container className="header" style={{ borderColor: "10px solid red" }}>
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <a
                style={{ color: "white" }}
                href="https://bangladesh.gov.bd/index.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                বাংলাদেশ জাতীয় তথ্য বাতায়ন
              </a>
            </Navbar.Brand>
            <Nav className="chooses">
              <Link>
                <select className="navbar">
                  <option>
                    <span>---------</span>
                  </option>
                  <option>
                    <p>বিভাগ</p>
                  </option>
                  <option>
                    <p>বিভাগ পর্যায়ের সরকারি অফিস</p>
                  </option>
                  <option>
                    <p>জেলা পর্যায়ের সরকারি অফিস</p>
                  </option>
                  <option>
                    <p>উপজেলা পর্যায়ের সরকারি অফিস</p>
                  </option>
                  <option>
                    <p> আঞ্চলিক অফিসসমূহ</p>
                  </option>
                </select>
              </Link>
              <Link>
                <select className="navbar">
                  <option>
                    <span>---------</span>
                  </option>
                  <option>
                    <p>বিভাগ সমূহ</p>
                  </option>
                  <option>
                    <p>ঢাকা বিভাগ</p>
                  </option>
                  <option>
                    <p>চট্টগ্রাম বিভাগ</p>
                  </option>
                  <option>
                    <p>বরিশাল বিভাগ</p>
                  </option>
                  <option>
                    <p>সিলেট বিভাগ</p>
                  </option>
                  <option>
                    <p>ময়মনসিংহ বিভাগ</p>
                  </option>
                  <option>
                    <p>রাজশাহী বিভাগ</p>
                  </option>
                </select>
              </Link>
              <Link>
                <select className="navbar">
                  <option>
                    <span>---------</span>
                  </option>
                  <option>
                    <p>জেলা</p>
                  </option>
                  <option>
                    <p>বরগুনা জেলা</p>
                  </option>
                  <option>
                    <p>ঝালকাঠি জেলা</p>
                  </option>
                  <option>
                    <p>পটুয়াখালী জেলা</p>
                  </option>
                  <option>
                    <p>পিরোজপুর জেলা</p>
                  </option>
                  <option>
                    <p>বরিশাল জেলা</p>
                  </option>
                  <option>
                    <p>ভোলা জেলা</p>
                  </option>
                  <option>
                    <p>চাঁদপুর জেলা</p>
                  </option>
                  <option>
                    <p>কুমিল্লা জেলা</p>
                  </option>
                  <option>
                    <p>নোয়াখালী জেলা</p>
                  </option>
                  <option>
                    <p>ফেনী জেলা</p>
                  </option>
                  <option>
                    <p>লক্ষ্মীপুর জেলা</p>
                  </option>
                </select>
              </Link>
              <Link>
                <select className="navbar">
                  <option>
                    <span>---------</span>
                  </option>
                  <option>
                    <p>সরকারী প্রতিষ্ঠান</p>
                  </option>
                  <option>
                    <p>বিভাগ পর্যায়ের সরকারি অফিস</p>
                  </option>
                  <option>
                    <p>জেলা পর্যায়ের সরকারি অফিস</p>
                  </option>
                  <option>
                    <p>উপজেলা পর্যায়ের সরকারি অফিস</p>
                  </option>
                  <option>
                    <p> আঞ্চলিক অফিসসমূহ</p>
                  </option>
                </select>
              </Link>
              <Button>Go</Button>
            </Nav>
          </Container>
        </Navbar>
      </Container>
      <section>
        <Slides></Slides>
      </section>
      <Container className="mid-container">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <FaHome />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  className="dropdown"
                  id="nav-dropdown-dark-example"
                  title="
                  আমাদের সম্পর্কে"
                  menuVariant="dark"
                >
                  <Container className="hide d-flex flex-row">
                    <NavDropdown.Item>
                      <p>অফিস সম্পর্কিত</p>
                      <Link>
                        <p>এক নজরে</p>
                      </Link>
                      <Link>
                        <p>সাম্প্রতিক কর্মকাণ্ড</p>
                      </Link>
                      <Link>
                        <p>সাংগঠনিক কাঠামো</p>
                      </Link>
                      <Link>
                        <p>ভিশন ও মিশন</p>
                      </Link>
                      <Link>
                        <p>অর্জনসমূহ</p>
                      </Link>
                      <Link>
                        <p>ঘটনাসমূহ</p>
                      </Link>
                      <Link>
                        <p>ভবিষ্যৎ পরিকল্পনা</p>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      <p>জনবল</p>
                      <Link>
                        <p>অফিস প্রধান</p>
                      </Link>
                      <Link>
                        <p>কর্মকর্তাগণ</p>
                      </Link>
                      <Link>
                        <p>কর্মচারীবৃন্দ</p>
                      </Link>
                      <Link>
                        <p>উপজেলা পর্যায়ের কর্মকর্তাগণ</p>
                      </Link>
                      <Link>
                        <p>তথ্য প্রদানকারী কর্মকর্তা</p>
                      </Link>
                    </NavDropdown.Item>
                  </Container>
                </NavDropdown>
                <NavDropdown
                  className="dropdown"
                  id="nav-dropdown-dark-example"
                  title="
                  আমাদের সেবা"
                  menuVariant="dark"
                >
                  <Container className="d-flex flex-row">
                    <NavDropdown.Item href="#action/3.1">
                      <p>ডাউনলোড</p>
                      <Link>
                        <p>বিভাগীয় আইন</p>
                      </Link>
                      <Link>
                        <p>বিধিমালা</p>
                      </Link>
                      <Link>
                        <p>পরিপত্র/নীতিমালা</p>
                      </Link>
                      <Link>
                        <p>গার্ডফাইল</p>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      <p>সেবাসমূহ</p>
                      <Link>
                        <p>সেবার তালিকা</p>
                      </Link>
                      <Link>
                        <p>কী সেবা কীভাবে পাবেন</p>
                      </Link>
                      <Link>
                        <p>সিটিজেন চার্টার</p>
                      </Link>
                      <Link>
                        <p>সেবাকুঞ্জ</p>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      <p>প্রশিক্ষণ ও পরামর্শ</p>
                      <Link>
                        <p>চলমান প্রশিক্ষণের তালিকা</p>
                      </Link>
                      <Link>
                        <p>প্রশিক্ষণ সংক্রান্ত পরামর্শ</p>
                      </Link>
                      <Link>
                        <p>প্রশিক্ষণের বিস্তারিত</p>
                      </Link>
                      <Link>
                        <p>যোগাযোগ</p>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      <p>পরিদর্শন</p>
                      <Link>
                        <p> উপজেলা অফিস পরিদর্শন</p>
                      </Link>
                      <Link>
                        <p>ইউনিয়ন অফিস পরিদর্শন</p>
                      </Link>
                      <Link>
                        <p>প্রকল্প পরিদর্শন</p>
                      </Link>
                    </NavDropdown.Item>
                  </Container>
                </NavDropdown>
                <NavDropdown
                  className="dropdown"
                  id="nav-dropdown-dark-example"
                  title="
                  অন্যান্য কার্যালয়"
                  menuVariant="dark"
                >
                  <Container className="d-flex flex-row">
                    <NavDropdown.Item href="#action/3.1">
                      <p>বিভাগীয়/ উপজেলা কার্যালয়</p>
                      <Link>
                        <p>বিভাগীয় কার্যালয়</p>
                      </Link>
                      <Link>
                        <p>উপজেলা কার্যালয়সমূহ</p>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      <p>মন্ত্রণালয়/বিভাগ ও অধিদপ্তর</p>
                      <Link>
                        <p>মন্ত্রণালয়/বিভাগ</p>
                      </Link>
                      <Link>
                        <p>অধিদপ্তর</p>
                      </Link>
                    </NavDropdown.Item>
                  </Container>
                </NavDropdown>
                <NavDropdown
                  className="dropdown"
                  id="nav-dropdown-dark-example"
                  title="
                  ই-সেবা"
                  menuVariant="dark"
                >
                  <Container className="d-flex flex-row">
                    <NavDropdown.Item href="#action/3.1">
                      <p>জাতীয় ই-সেবা</p>
                      <Link>
                        <p>নথি</p>
                      </Link>
                      <Link>
                        <p>ই-মোবাইল কোর্ট</p>
                      </Link>
                      <Link>
                        <p>ভূমি-সেবা</p>
                      </Link>
                      <Link>
                        <p>বাংলাদেশ ফরম</p>
                      </Link>
                      <Link>
                        <p>সেবাকুঞ্জ</p>
                      </Link>
                      <Link>
                        <p>অনলাইন আবেদন</p>
                      </Link>
                      <Link>
                        <p>উত্তরাধিকার ক্যালকুলেটর</p>
                      </Link>
                      <Link>
                        <p>ই-বুক</p>
                      </Link>
                      <Link>
                        <p>ই-তথ্য কোষ</p>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      <p>মোবাইল অ্যাপস্‌</p>
                      <Link>
                        <p>নথি (এনড্রয়েড ফোন)</p>
                      </Link>
                      <Link>
                        <p>নথি (আইওএস)</p>
                      </Link>
                      <Link>
                        <p>বাংলাদেশ-ডিরেক্টরি (এনড্রয়েড)</p>
                      </Link>
                      <Link>
                        <p>বাংলাদেশ পর্যটন (এনড্রয়েড)</p>
                      </Link>
                      <Link>
                        <p>উত্তরাধিকার ক্যালকুলেটর (এনড্রয়েড)</p>
                      </Link>
                    </NavDropdown.Item>
                  </Container>
                </NavDropdown>
                <NavDropdown
                  className="dropdown"
                  id="nav-dropdown-dark-example"
                  title="
                  গ্যালারি"
                  menuVariant="dark"
                >
                  <Container className="d-flex flex-row">
                    <NavDropdown.Item href="#action/3.1">
                      <p>ফটো গ্যালারি</p>
                      <Link>
                        <p>ভিডিও গ্যালারি</p>
                      </Link>
                    </NavDropdown.Item>
                  </Container>
                </NavDropdown>
                <NavDropdown
                  className="dropdown"
                  id="nav-dropdown-dark-example"
                  title="
                  যোগাযোগ"
                  menuVariant="dark"
                >
                  <Container className="d-flex flex-row">
                    <NavDropdown.Item href="#action/3.1">
                      <p>অফিস যোগাযোগ</p>
                      <Link>
                        <p>ডাক যোগাযোগ</p>
                      </Link>
                      <Link>
                        <p>অনলাইন যোগাযোগ</p>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      <p>যোগাযোগ ম্যাপ</p>
                      <Link>
                        <p>যোগাযোগের ম্যাপ</p>
                      </Link>
                      <Link>
                        <p>কীভাবে যাবেন</p>
                      </Link>
                    </NavDropdown.Item>
                  </Container>
                </NavDropdown>
                <NavDropdown
                  className="dropdown"
                  id="nav-dropdown-dark-example"
                  title="
                  মতামত"
                  menuVariant="dark"
                >
                  <Container className="d-flex flex-row">
                    <NavDropdown.Item href="#action/3.1">
                      <Link>
                        <p>মতামত ও পরামর্শ</p>
                      </Link>
                    </NavDropdown.Item>
                  </Container>
                </NavDropdown>
                <span>বিপিআই</span>
                <span>সহায়ক তথ্য সেবা</span>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;

//
//
//
// মতামত
// বিপিআই
//

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
