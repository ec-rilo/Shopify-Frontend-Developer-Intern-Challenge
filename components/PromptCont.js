import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Assets
import { requestOpenAI } from '../pages/api/openAi';

// Components
import { StyledBtn2 } from './Btns';
import { StyledSelect, StyledOption } from './DropDown';

const StyledHeaderCont = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledH2 = styled.h2`
  font-family: var(--fnt-bold);
  font-size: 1.3rem;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 250px;
`;

const StyledSubmitBtnCont = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function PromptCont({ className, addCard, user }) {
  const [userRequest, setUserRequest] = useState('');
  const [engine, setEngine] = useState('text-curie-001');

  const getAIResponse = (request) => (
    new Promise((resolve, reject) => {
      requestOpenAI(engine, request)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err);
      });
    })
  );

  return (
    <div className={className}>
      <StyledHeaderCont>
        <StyledH2>Enter prompt</StyledH2>
        <StyledSelect name="engines" id="engines" onChange={(e) => setEngine(e.target.value)}>
          <StyledOption value="text-curie-001">text-curie-001</StyledOption>
          <StyledOption value="text-davinci-002">text-davinci-002</StyledOption>
          <StyledOption value="text-babbage-001">text-babbage-001</StyledOption>
          <StyledOption value="text-ada-001">text-ada-001</StyledOption>
        </StyledSelect>
      </StyledHeaderCont>
      <div>
        <StyledTextArea onChange={(e) => setUserRequest(e.target.value)}/>
      </div>
      <StyledSubmitBtnCont>
        <StyledBtn2
          clickHandler={() => {
            getAIResponse(userRequest)
              .then((response) => {
                const cardData = {
                  id: response.id,
                  userEmail: user.email,
                  prompt: userRequest,
                  aiResponse: response.choices[0].text,
                  timeStamp: response.created,
                  engineModel: response.model,
                };

                addCard(cardData);
              })
              .catch((err) => {
                console.error(err);
              });
          }}
          text="Submit"
        />
      </StyledSubmitBtnCont>
    </div>
  );
}

const StyledPromptCont = styled(PromptCont)`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export default StyledPromptCont;