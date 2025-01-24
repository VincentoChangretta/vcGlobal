import { useRef, useState } from 'react';
import { handleSubmit } from 'shared/lib/FormSubmit/FormSubmit';
import { Button } from 'shared/ui/Button';
import { HiddenInputs } from 'shared/ui/HiddenInputs/HiddenInputs';
import { Input } from 'shared/ui/Input';

export const HelperForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [submitBtn, setSubmitBtn] = useState(false);

    return (
        <section className='text-center mb-section'>
            <div className='container'>
                <div className='help-to-choise__inner'>
                    <div className=''>
                        <h2 className='bigTitle'>
                            Мы готовы помочь с выбором!
                        </h2>
                        <p className='text-big mb-[20px]'>
                            Наши эксперты подберут самое эффективное решение
                        </p>
                        <form
                            ref={formRef}
                            onSubmit={(e) =>
                                handleSubmit({
                                    e,
                                    formRef: formRef.current,
                                    setSubmitBtn,
                                })
                            }
                            className='help-to-choise__form'
                            method='post'
                            action=''
                        >
                            <HiddenInputs />
                            <Input
                                name='number'
                                type='number'
                                placeholder='Номер телефона'
                                boxClassName='mx-auto mb-[50px] rounded-[80px]'
                                inpClassName='text-xl'
                            >
                                <Button
                                    inputButton={true}
                                    className='mx-auto'
                                    type='submit'
                                    black={true}
                                >
                                    Отправить
                                </Button>
                            </Input>
                        </form>
                        {/* <Privacy /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};
