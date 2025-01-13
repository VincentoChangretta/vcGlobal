const mailto = './mail.php';

interface FetchToMailArgs {
    e: React.FormEvent<HTMLFormElement>;
    formRef: HTMLFormElement | null; // Обновлено для учета null
}

interface HandleSubmitArgs {
    e: React.FormEvent<HTMLFormElement>;
    formRef: HTMLFormElement | null; // Обновлено для учета null
    setSubmitBtn: (value: boolean) => void;
    setFetchModal?: (value: string) => void;
}

export const fetchToMail = async ({ e, formRef }: FetchToMailArgs) => {
    e.preventDefault();
    if (!formRef) return false; // Проверка на null
    const formData = new FormData(formRef);
    console.log([...formData]);

    try {
        const response = await fetch(mailto, {
            method: 'POST',
            body: formData,
        });
        if (response.ok) {
            formRef.reset();
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Ошибка:', error);
        return false;
    }
};

export const handleSubmit = async ({
    e,
    formRef,
    setSubmitBtn,
    setFetchModal,
}: HandleSubmitArgs) => {
    const formData = await fetchToMail({ e, formRef }); // Используем await
    if (formData) {
        setSubmitBtn(true);
        // setFetchModal("success");
        setTimeout(() => {
            setSubmitBtn(false);
            // setFetchModal("move close");
        }, 4500);
    } else {
        // setFetchModal("error");
        setTimeout(() => {
            // setFetchModal("move close");
        }, 4500);
    }
};
