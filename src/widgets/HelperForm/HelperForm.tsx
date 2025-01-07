import { useRef, useState } from "react";

export const HelperForm = () => {
  const formRef = useRef(null);
  const [submitBtn, setSubmitBtn] = useState(false);
  const { setFetchModal } = useContext(fetchModalContext);
  return (
    <section className="help-to-choise">
      <div className="container-original">
        <div className="help-to-choise__inner">
          <div className="box">
            <h2>Мы готовы помочь с выбором!</h2>
            <p>Наши эксперты подберут самое эффективное решение</p>
            <form
              ref={formRef}
              onSubmit={(e) =>
                handleSubmit(e, formRef.current, setSubmitBtn, setFetchModal)
              }
              className="help-to-choise__form"
              method="post"
              action=""
            >
              <HiddenInputs />
              <Input
                name="number"
                type="number"
                className="help-to-choise__input"
                placeholder={
                  language == "ru" ? "Номер телефона" : "Phone number"
                }
              >
                <SubmitBtn submitBtn={submitBtn} />
              </Input>
            </form>
            <Privacy />
          </div>
        </div>
      </div>
    </section>
  );
};
