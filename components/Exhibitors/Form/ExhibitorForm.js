import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import ConfirmSms from "./ConfirmSms";
import { BsArrowRight } from "react-icons/bs";
import Swal from "sweetalert2";

const ExhibitorForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // form show function

  const [steeper, setSteeper] = useState(0);
  const NextHandler = () => {
    setSteeper(steeper + 1);
  };

  const prevHandler = () => {
    steeper < 0 && setSteeper(0);
    setSteeper(steeper - 1);
  };

  const options = [
    {
      label: "Day 1 Wed (31 Aug)",
      name: "option1",
    },
    {
      label: "Day 2 Thu (1 Sept)",
      name: "option2",
    },
    {
      label: "Both Days (31 Aug & 1 Sept)",
      name: "option3",
    },
  ];

  const [successMassage, setSuccessMassage] = useState(false);

  const [saveAsDraft, setDraft] = useState([]);
  

  // console.log("saveAsDraft: sdas", saveAsDraft.days);

  const [valueFromFirstForm, setValueFromFirstForm] = useState([]);
  console.log("FinalFromValue", valueFromFirstForm);

  const nameInputRef = useRef(null);
  const contactInputRef = useRef(null);
  const emailAddress = useRef(null);
  const companyAddress = useRef(null);
  const [radioValue, setRedioValue] = useState(saveAsDraft?.days);
  console.log("radiovalue", radioValue);
  const referralCodeForSec = useRef(null);

  
  const agreement = useRef(null);


  // save as draft
  const [nameVal, setNameVal] =useState()
  const [emailVal, setEmailVal] =useState()
  const [contactVal, setContactVal] =useState()
  const [companyAddresstVal, setCompanyAddressVal] =useState()
  
  

  const saveDataFormFirst = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    setNameVal(name)
    const email = emailAddress.current.value;
    setEmailVal(email)
    const contact = contactInputRef.current.value;
    setContactVal(contact)
    const company_name = companyAddress.current.value;
    setCompanyAddressVal(company_name)
    const days = radioValue;
    const firstForm = { name, email, contact, company_name, days };
    setValueFromFirstForm(firstForm);
    NextHandler();
  };

  const saveDataFormSecond = (e) => {
    e.preventDefault();
    const referrel = referralCodeForSec.current.value;
  
    const secondForm = { referrel };

    const valueFromFirstFormArray = [valueFromFirstForm];
    let oldVal = [];
    oldVal.push(...valueFromFirstFormArray, secondForm);
    setValueFromFirstForm(oldVal);

    console.log("second", valueFromFirstForm);

    NextHandler();
  };

  const saveDataFormThird = (e) => {
    e.preventDefault();
    const never_give_password = agreement.current.value;
    const thirdForm = { never_give_password };

    const valueFromFirstFormArray2 = [valueFromFirstForm];
    let oldVal = [];
    oldVal.push(...valueFromFirstFormArray2, thirdForm);
    setValueFromFirstForm(oldVal);

    console.log("third", valueFromFirstForm);
    const name = valueFromFirstForm[0]?.name;
    const email = valueFromFirstForm[0]?.email;
    const contact = valueFromFirstForm[0]?.contact;
    const company_name = valueFromFirstForm[0]?.company_name;
    const days = valueFromFirstForm[0]?.days;
    const referrel = valueFromFirstForm[1]?.referrel;
    const designation = "asdffhfghf";
    const status = 1;
    const subscription = "asdffhfghfg";
    const created_at = "2022-12-05T22:36:32.000000Z";
    const updated_at = "2022-12-05T22:36:32.000000Z";

    // const never_give_password = valueFromFirstForm[1]?.never_give_password;

    const finalFormValueForDataBaseInput = {
      name,
      email,
      contact,
      company_name,
      days,
      referrel,
      never_give_password,
      designation,
      status,
      subscription,
      created_at,
      updated_at,
    };

    console.log(finalFormValueForDataBaseInput);

    const url = process.env.NEXT_PUBLIC_API_LOCAL;
    fetch(`${url}/api/exhibition-registration`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalFormValueForDataBaseInput),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        {
          data.msg === "Registration Successful !"
          
            ? setSuccessMassage(true)
            : Swal.fire({
                icon: "error",
                title: "Registration unsuccessful!",
                text: "Please try again",
              });
        }
      });

    handleShow();
  };

  const SaveAsDraft = (e) => {
    e.preventDefault();

    const name = nameInputRef.current.value;
    const email = emailAddress.current.value;
    const contact = contactInputRef.current.value;
    const company_name = companyAddress.current.value;
    const days = radioValue;

    const firstForm = { name, email, contact, company_name, days};

    localStorage.setItem("ExhibitorForm", JSON.stringify(firstForm));
    // localStorage.setItem('RegistrationForm', 'firstForm');
  };

  useEffect(() => {
    const value = localStorage.getItem("ExhibitorForm");
    const trainData = JSON.parse(value)
    setRedioValue(trainData?.days)

    setDraft(JSON.parse(value));
  }, []);


  return (
    <Container className="sub_section_gap">
      <h2 className="accomodation_bluetitle text-center mb-5">
        Fill up the form
      </h2>

      {steeper === 0 ? (
        // onSubmit={saveDataFormFirst}
        <Form onSubmit={saveDataFormFirst}>
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="fw-bold mb-3">Name</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="text"
                  required
                  placeholder="Enter your answer"
                  // placeholder={saveAsDraft.name ? saveAsDraft.name:"Enter your answer" }
                  Value={saveAsDraft?.name ? saveAsDraft?.name:nameVal}
                  id="name"
                  ref={nameInputRef}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword1">
                <Form.Label className="fw-bold mb-3">Contact</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="number"              
                  // placeholder={saveAsDraft.contact?saveAsDraft.contact: "Enter your answer"}
                  placeholder="Enter your answer"
                  required
                  Value={saveAsDraft?.contact?saveAsDraft?.contact:contactVal}
                  id="contact"
                  ref={contactInputRef}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-lg-6">
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="fw-bold mb-3">Email address</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="email"
                  placeholder="Enter your answer"
                  // placeholder={saveAsDraft.email? saveAsDraft.email:"Enter your answer" }
                  required
                  Value={saveAsDraft?.email? saveAsDraft?.email:emailVal}          
                  id="emailAddress"
                  ref={emailAddress}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label className="fw-bold mb-3">Company</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="text"
                  placeholder="Enter your answer"
                  // placeholder={saveAsDraft.company_name?saveAsDraft.company_name: "Enter your answer"}
                  required     
                  
                  Value={saveAsDraft?.company_name?saveAsDraft?.company_name:companyAddresstVal}          
                  id="companyAddress"
                  ref={companyAddress}
                />
              </Form.Group>
            </div>
          </div>

          <div>
            <p className="fw-bold">
              Which day(s) will you be attending the exhibition?
            </p>
            <div className="d-flex flex-column flex-lg-row">
              {options.map((option, index) => (
                <div key={index} className="d-flex mb-3 me-4">
                  <div class="form-check form-check-inline">
                    <input
                      required
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadioOptions"
                      // Value={saveAsDraft.days ? saveAsDraft.days:<></>} 
                      value={option.label}
                      checked = { option.label  === radioValue   }

                      onClick={() => setRedioValue(option.label)}
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      {option.label}
                    </label>
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-between mt-5">
            <Button
              className="bc__btn inputField border-0 text-muted"
              onClick={SaveAsDraft}
            >
              Save as Draft
            </Button>

            <Button
              className="primary__btn arrow__btn arrow__btn6"
              type="submit"
            >
              Next <BsArrowRight />
            </Button>
          </div>
        </Form>
      ) : steeper === 1 ? (
        <Form onSubmit={saveDataFormSecond}>
          <div className="my-5">
            <div className="col-12 col-lg-6">
              <Form.Group className="mb-3" controlId="formBasicPassword3">
                <Form.Label className="fw-bold mb-3">Referral code</Form.Label>
                <Form.Control
               
                  required
                  className="inputField border-0"
                  type="text"
                  placeholder="Enter your answer"
             
                  id="referralCodeForSec"
                  ref={referralCodeForSec}
                
                />
              </Form.Group>
            </div>

            <div className="d-flex justify-content-between mt-5">
              {steeper === 0 ? null : (
                <Button
                  onClick={prevHandler}
                  className="bc__btn inputField border-0 text-muted"
                >
                  Back
                </Button>
              )}

              <Button
                className="primary__btn arrow__btn arrow__btn6"
                type="submit"
              >
                Next <BsArrowRight />
              </Button>
            </div>
          </div>
        </Form>
      ) : (
        <div className="my-5">
          <h2 className="accomodation_bluetitle">Agreement</h2>
          <p className="fw-bold mt-5 mb-3">
            In addition, if you would like to receive future marketing materials
            from IEH, not limited to the Ergonomics & Hygiene 2022 conference
            and exhibition, kindly give your consent below.
          </p>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              required
              id="flexRadioDefault1"
              ref={agreement}
            />
            <label class="form-check-label radioOption" for="flexRadioDefault1">
              I wish to receive marketing materials from IEH in the future
            </label>
          </div>
          <div className="d-flex justify-content-between mt-5">
            {steeper === 0 ? null : (
              <Button
                onClick={prevHandler}
                className="bc__btn inputField border-0 text-muted"
              >
                Back
              </Button>
            )}

            <div>
              {successMassage? <Button className="primary__btn" onClick={saveDataFormThird} disabled>
                Submit
              </Button>:<Button className="primary__btn" onClick={saveDataFormThird}>
                Submit
              </Button>}
              
            </div>

            {successMassage ? (
              <Modal show={show} onHide={handleClose}>
                <Modal.Header className="border-0" closeButton></Modal.Header>
                <Modal.Body>
                  <ConfirmSms setSuccessMassage={setSuccessMassage} />
                </Modal.Body>
              </Modal>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}

      {/* Agreement code part start*/}
    </Container>
  );
};

export default ExhibitorForm;
