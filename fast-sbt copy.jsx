

const SubmitBtn = styled.button`
display: flex;
width: 107px;
padding: 8px 12px;
justify-content: center;
align-items: center;
gap: 10px;
color:#000;
display: flex;
width: 107px;
padding: 8px 12px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;
 border-width: 1px;
  border: solid 1px transparent;
 
 
  background-image: ${
    state.Submitdisable
      ? "linear-gradient(#a4a39e, #cbcac8), radial-gradient(circle at top left,#000000, #000000);"
      : "linear-gradient(#FFD50D, #FFD50D), radial-gradient(circle at top left,#F0E1CE, #F0E1CE);"
  }
  background-origin: border-box;
  background-clip: padding-box, border-box;
@media only screen and (max-width: 480px) {
 
}

`;

const CustomCheckbox = styled.div`
 width:20px;
 height:20px;
 background:${
   state.ischeckselected
     ? "linear-gradient(90deg, #9333EA 0%, #4F46E5 100%);"
     : "#F8F8F9;"
 }
border: medium solid ${
  state.ischeckselected
    ? "linear-gradient(90deg, #9333EA 0%, #4F46E5 100%);"
    : "black"
};
border-radius:4px;
 
`;
 
const cssFont = fetch(
  "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800"
).body;
const css = fetch(
  "https://raw.githubusercontent.com/dokxo96/fastSbt/master/fastsbt.css?token=GHSAT0AAAAAACEQ4SVRD7BVOYKVKF5B4FEAZF36DWQ"
).body;

if (!cssFont || !css) return "";
if (!state.theme) {
  State.update({
    theme: styled.div`
    font-family: Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    ${cssFont}
    ${css}
`,

  });
}
const Theme = state.theme;
const NDCicon =
  "https://emerald-related-swordtail-341.mypinata.cloud/ipfs/QmP5CETfUsGFqdcsnrfPgUk3NvRh78TGZcX2srfCVFuvqi?_gl=1*faq1pt*_ga*Mzc5OTE2NDYyLjE2ODg1MTY4MTA.*_ga_5RMPXG14TE*MTY4OTg3Njc1OC4xMS4xLjE2ODk4NzY4MjYuNjAuMC4w";
const CheckIcon =
  "https://emerald-related-swordtail-341.mypinata.cloud/ipfs/QmVGE45rLuHiEHh8RPfL11QsQBXVDfmdV3pevZU7CG1ucg?preview=1&_gl=1*1dpaowv*_ga*Mzc5OTE2NDYyLjE2ODg1MTY4MTA.*_ga_5RMPXG14TE*MTY4OTg4MDMyOS4xMi4xLjE2ODk4ODA3MTAuMTkuMC4w";
// State
State.init({
  theme: "",
  Dao_Contract: "",
  Issuer_selected: null,
  Issuer_filled:"",
  Receiver: "",
  ClassIdSelected: "",
  IssuedAT: "",
  ExpiresAt: "",
  Referencelink: "",
  Referencehash: "",

  ischeckselected: false,
  Submitdisable: true,
});

const validatedInputs = () => {
  console.log(state);
  const isEmpty = (str) => str.trim() === "";
  const isFalse = (check) => check === false;
  let isValid = true;
  /*
  if (img.cid === null) {
    State.update({ error_msg: "Pic a image" });
    return false;
  }*/
  if (isEmpty(state.Dao_Contract)) {
    State.update({ error_msg: "Write the DAO contract", Submitdisable: true });

    return (isValid = false);
  }
  if (isEmpty(state.Issuer_selected)) {
    State.update({ error_msg: "Select an issuer", Submitdisable: true });

    return (isValid = false);
  }
  // the user will provide a new issuer
  if (state.Issuer_selected==="showinput") {
    if(isEmpty(state.Issuer_filled) ){
        State.update({ error_msg: "provide an issuer", Submitdisable: true });

        return (isValid = false);
    }

  }
  if (isEmpty(state.Receiver)) {
    State.update({ error_msg: "Write the receiver", Submitdisable: true });

    return (isValid = false);
  }
  if (state.ischeckselected === true) {
    console.log("se activo la meta");
    if (isEmpty(state.ClassIdSelected)) {
      console.log("select toke");

      State.update({ error_msg: "Select a token class", Submitdisable: true });

      return (isValid = false);
    }
    if (isEmpty(state.IssuedAT)) {
      State.update({ error_msg: "pic an issued date", Submitdisable: true });

      return (isValid = false);
    }
    if (isEmpty(state.ExpiresAt)) {
      State.update({ error_msg: "pic an expires date", Submitdisable: true });

      return (isValid = false);
    }
    if (!isEmpty(state.Referencelink)) {
      return (isValid = false);
    }
    if (!isEmpty(state.Referencehash)) {
      return (isValid = false);
    }
  }

  if (isEmpty(state.Memo)) {
    State.update({ error_msg: "Write the memo", Submitdisable: true });

    return (isValid = false);
  }

  State.update({ Submitdisable: false });

  return isValid;
};

const Submitform = () => {
  if (validatedInputs()) {
    console.log("es valido");
  } else {
    console.log("no es valido");
  }
};
return (
  <Theme>< div class="ModalCard">
    <div class="Header">
      <img src={NDCicon} />
      <label class="Headerlabel">FAST-SBT</label>
    </div>

    <div class="Cardstyled" name="card" >
      <div class=" BodyForm mx-auto">
        <div class="Rowcont">
          <div class="Colcont">
            <h1 class="H1styled">DAO</h1>
            <input class="InputStyled"
              type="text"
              placeholder="Input DAO contract address"
              value={state.Dao_Contract}
              onChange={(e) => {
                State.update({ Dao_Contract: e.target.value });
                validatedInputs();
              }}
            />
          </div>
          <div class="Colcont">
            <h1 class="H1styled">Issuer</h1>
            <select class="Dropdown"
              placeholder="Input DAO contract address"
              value={state.Issuer_selected}
              onChange={(e) => {
                State.update({ Issuer_selected: e.target.value });
                validatedInputs();
              }}
            >
              <option default value="">
                Select issuer
              </option>
             
              {}
              <option value="nothing">more options from fetch</option>
              <option default value="showinput">
                Other-- write down.
              </option>
            </select>
          </div>
          { state.Issuer_selected==="showinput"?
           <div class="Colcont">
           <h1 class="H1styled">Enter issuer</h1>
           <input class="InputStyled"
             type="text"
             placeholder="Input Issuer"
             value={state.Issuer_filled}
             onChange={(e) => {
               State.update({ Issuer_filled: e.target.value });
               validatedInputs();
             }}
           />
         </div>:
         <></>
          }
          <div class="Colcont">
            <h1 class="H1styled">Receiver</h1>
            <input class="InputStyled"
              type="text"
              placeholder="dokxo.near"
              value={state.Receiver}
              onChange={(e) => {
                State.update({ Receiver: e.target.value });
                validatedInputs();
              }}
            />
          </div>
        </div>

        <div className="d-flex flex-column mt-2">
          <div class="d-flex">
            <h1 class="H1styled">Metadata</h1>
            <CustomCheckbox
              onClick={() => {
                State.update({ ischeckselected: !state.ischeckselected });
                validatedInputs();
              }}
            >
              {state.ischeckselected ? (
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    "object-fit": "cover",
                    "vertical-align": " initial",
                  }}
                  src={CheckIcon}
                />
              ) : (
                <></>
              )}
            </CustomCheckbox>
          </div>
          {state.ischeckselected ? (
            <div class="MetaCard">
              <div class="row  col-sm-12  mx-0  gap-1   ">
                <div class="Metarow" name="Classid">
                  <div  class="MetaTitles">{"Class id"}</div>
                  <div>
                    <select class="Dropdown"
                      value={state.ClassIdSelected}
                      onChange={(e) => {
                        State.update({ ClassIdSelected: e.target.value });
                        validatedInputs();
                      }}
                    >
                      <option default value="">
                        Select token class id
                      </option>
                      {}
                      <option value="nothing">more options from fetch</option>
                    </select>
                  </div>
                </div>
                <div class="Metarow">
                  {" "}
                  <div  class="AFDates" name="AFdates">
                    <div  class="DateContItem">
                      <div  class="MetaTitles">{"Issued at"}</div>
                      <input class="FormInput"
                        type="date"
                        value={state.IssuedAT}
                        onChange={(e) => {
                          State.update({ IssuedAT: e.target.value });
                          validatedInputs();
                        }}
                      />
                    </div>
                    <div  class="DateContItem">
                      <div  class="MetaTitles">{"Expires at"}</div>
                      <input class="FormInput"
                        type="date"
                        value={state.ExpiresAt}
                        onChange={(e) => {
                          State.update({ ExpiresAt: e.target.value });
                          validatedInputs();
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="Metarow">
                  <div  class="MetaTitles">
                    {"Reference = link to a JSON file (eg, IPFS)."}
                  </div>

                  <div>
                    <input class="FormInput"
                      value={state.Reference}
                      placeholder="Write your reference (optional)"
                      onChange={(e) => {
                        State.update({ Reference: e.target.value });
                      }}
                    />
                  </div>
                </div>

                <div class="Metarow">
                  <div  class="MetaTitles">
                    {"Reference hash = Base64-encoded sha256 hash of JSON."}
                  </div>

                  <div style={{ "font-size": "10px" }}>
                    <input class="FormInput"
                      value={state.Reference}
                      placeholder="Write your reference hash (optional)"
                      onChange={(e) => {
                        State.update({ Reference: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div class="Separator"></div>
          )}

          <div className="d-flex flex-column mt-2">
            <h1 class="H1styled">Memo</h1>
            <input class="InputStyled"
              type="text"
              placeholder="Write a memo"
              value={state.Memo}
              onChange={(e) => {
                State.update({ Memo: e.target.value.substring(0,200) });
                validatedInputs();
              }}
            />
            <div class="row justify-enda ">
            <a>{state.Memo.length}</a>

            </div>
          </div>
        </div>
      </div>

      <div class="FooterForm" name="Footerform">
        <div class="Submitcontainer">
          <SubmitBtn
            disabled={status.Submitdisable ? true : false}
            onClick={() => {
              Submitform();
            }}
          >
            {" "}
            Submit{" "}
          </SubmitBtn>
        </div>
      </div>
    </div>
  </div>
  </Theme>
  
);
