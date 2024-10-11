import { useFormik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import Container from '../../components/Container/Container';
import CustomButton from '../../components/CustomBtn/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

const AddTeam = () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const data = [
        { _id: '1', name: 'Team A' },
        { _id: '2', name: 'Team B' },
        { _id: '3', name: 'Team C' },
    ];
    const [loading, setLoading] = useState(false);
    const {
        values,
        handleChange,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        setValues,
        setFieldValue,
        validateForm,
    } = useFormik({
        initialValues: {
            teamName: '',
            manager: '',
            teamLead: '',
            members: '',
            memberTeam: ''
        },
        validationSchema: Yup.object({
            teamName: Yup.string().required('Team Name is required'),
            manager: Yup.string().required('Manager is required'),
            teamLead: Yup.string().required('Team Lead is required'),
            members: Yup.string().required('Members selection is required'),
            memberTeam: Yup.string().required('MemberTeam selection is required'),

        }),
        onSubmit: (values) => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                console.log('Form Values:', values);
            }, 2000);
        },
        validateOnBlur: true,
        validateOnChange: true,
    });
    return (
        <Container
            type='hrm'
            hrm={{
                title: 'Create Team',
                isBack: true,
            }}
        >
            <CustomInput
                name="teamName"
                label="Team Name"
                value={values.teamName}
                placeholder="Enter Team Name"
                marginBottom={25}
                onChangeText={handleChange('teamName')}
                touched={touched}
                errors={errors}
            />



            <CustomButton
                title="Create Team"
                onPress={handleSubmit}
                isLoading={loading}
                disabled={loading}
                containerStyle={{ width: 200 }}
                isLoaderColor="#fff"
                btnType="lg"
            />
        </Container>
    );
};

export default AddTeam;

const styles = StyleSheet.create({});
