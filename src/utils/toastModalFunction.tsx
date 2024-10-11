import { Popup } from 'react-native-popup-confirm-toast';

interface ConfirmModalProps {
    clickOnConfirm: () => void;
}

interface PlzWaitProps {
    bodyComponent: () => JSX.Element;
}

const successMessage = (message?: string): void => {
    Popup.show({
        type: 'success', // confirm, info, danger, warning, success
        title: 'Successful!',
        textBody: message ?? '---',
        buttonText: 'OK',
        callback: () => Popup.hide(),
        bounciness: 15,
        okButtonStyle: { backgroundColor: 'rgba(3, 161, 0, 1)' },
        iconHeaderStyle: {
            marginBottom: -10,
        },
    });
};

const errorMessage = (message?: string): void => {
    Popup.show({
        type: 'danger', // confirm, info, danger, warning, success
        title: 'Error!',
        textBody: message ?? 'Server Error please try again',
        buttonText: 'OK',
        callback: () => Popup.hide(),
        bounciness: 15,
        okButtonStyle: { backgroundColor: '#A7100A' },
        iconHeaderStyle: {
            marginBottom: -10,
        },
    });
};

const confirmModal = ({ clickOnConfirm }: ConfirmModalProps): void => {
    Popup.show({
        type: 'confirm',
        title: 'Confirm!',
        textBody: 'Do you want to delete users',
        buttonText: 'Delete',
        confirmText: 'Cancel',
        callback: () => {
            clickOnConfirm();
        },
        cancelCallback: () => {
            Popup.hide();
        },
        buttonContentStyle: {
            flexDirection: 'row',
            gap: 20,
        },
        iconHeaderStyle: {
            marginBottom: -10,
        },
        okButtonStyle: { backgroundColor: '#DC7331' },
        confirmButtonStyle: { borderColor: 'black', borderWidth: 1 },
    });
};

const waitingModal = (): void => {
    Popup.show({
        type: 'success', // confirm, info, danger, warning, success
        title: 'Successful!',
        textBody: 'Successfully processed.',
        buttonText: 'OK',
        callback: () => Popup.hide(),
        bounciness: 15,
        okButtonStyle: { backgroundColor: 'rgba(3, 161, 0, 1)' },
        iconHeaderStyle: {
            marginBottom: -10,
        },
    });
};

const plzWait = ({ bodyComponent }: PlzWaitProps): void => {
    Popup.show({
        bodyComponent: () => bodyComponent(),
        iconEnabled: false,
        buttonEnabled: false,
        modalContainerStyle: {
            backgroundColor: 'transparent',
            borderRadius: 10,
            padding: 20,
            alignItems: 'center',
        },
    });
};

const popUpClose = (): void => {
    Popup.hide();
};

export const popUpConfToast = {
    successMessage,
    errorMessage,
    confirmModal,
    plzWait,
    waitingModal,
    popUpClose,
};

export const showSuccess = successMessage;
export const showError = errorMessage; 