import{SubmitFeedbackUseCase}from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();//pra saber se a função foi chamada
const sendMailSpy = jest.fn();      //pra saber se a função foi chamada

const submitFeedback = new SubmitFeedbackUseCase(

  { create: createFeedbackSpy},
  { sendMail: sendMailSpy},
  );

describe ('Submit feedback', () => {


  it('should be able to submit a feedback', async () => {
  
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,hwfgwdehghdguh',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();//pra saber se a função foi chamada
    expect(sendMailSpy).toHaveBeenCalled();//pra saber se a função foi chamada


  });


  it('should not be able to submit feedback without type', async () => {
    
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,hwfgwdehghdguh',
    })).rejects.toThrow();
  });


  it('should not be able to submit feedback without comment', async () => {
  
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,hwfgwdehghdguh',
    })).rejects.toThrow();
  });

  it('should not be able to submit feedback with an invalid screenshot', async () => {
  
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'test.jpg',
    })).rejects.toThrow();
  });

});