import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container/Container';
import Steper from '../../components/Steper/Steper';
import MainTitle from '../../components/MainTitle/MainTitle';
import CustomInput from '../../components/CustomInput/CustomInput';
import {ScrollView} from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomBtn/CustomButton';
import {useFormik} from 'formik';
import * as Yup from 'yup';
const AddUser = () => {
  const [page, SetPage] = useState(0);
  const [loading,setLoading] = useState(false)

  const nextPage = () => {
    if (page < 3) {
      SetPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      SetPage(page - 1);
    }
  };

  const initialPage = () => {
    SetPage(0);
    
  };

  //formik & yup

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
      FirstName: '',
      LastName: '',
      EmailAddress: '',
      PhoneNumber: '',
      Role: '',
      Department: '',
      JoiningDate: '',
      Package: '',
      HouseNo: '',
      AddressLine2: '',
      City: '',
      State: '',
      Country: '',
      PostalCode: '',
      AddressProof: '',
      BankName: '',
      BankAccount: '',
      SortCode: '',
      AccountNumber: '',
      BankStatement: '',
      OfferLetter:'',
    },
    validationSchema: Yup.object({
      FirstName: Yup.string().required('First Name is required'),
      LastName: Yup.string().required('Last Name Head is required'),
      EmailAddress: Yup.string().required('Email Address is required'),
      PhoneNumber: Yup.string().required('Phone Number is required'),
      Role: Yup.string().required('Role is required'),
      JoiningDate: Yup.string().required('Joining Date is required'),
      Package: Yup.string().required('Package is required'),
      HouseNo: Yup.string().required('House no is required'),
      AddressLine2: Yup.string().required('Address Line 2 is required'),
      City: Yup.string().required('City is required'),
      State: Yup.string().required('State is required'),
      Country: Yup.string().required('Country is required'),
      PostalCode: Yup.string().required('Postal Code is required'),
      AddressProof: Yup.string().required('Address Proof is required'),
      BankName: Yup.string().required('Bank Name is required'),
      BankAccount: Yup.string().required('Bank Account is required'),
      SortCode: Yup.string().required('SortCode is required'),
      AccountNumber: Yup.string().required('Account Number is required'),
      BankStatement: Yup.string().required('Bank Statement is required'),
      OfferLetter: Yup.string().required('Offer Letter is required'),
    }),
    onSubmit: values => {
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'white'}}>
      <Container
        type="hrm"
        hrm={{
          title: 'Add Employee',
          isBack: true,
        }}>
        <Steper page={page} />
        {page === 0 && (
          <>
            <MainTitle Title="PERSONAL INFORMATION" />

            <CustomInput
            name='FirstName'
              label="FirstName"
              marginBottom={20}
              placeholder="Enter Your Name"
              value={values.FirstName}
              onChangeText={handleChange('FirstName')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='LastName'
              label="Last Name"
              marginBottom={20}
              placeholder="Enter Your Last Name"
              value={values.LastName}
              onChangeText={handleChange('LastName')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='EmailAddress'
              label="EmailAddress"
              marginBottom={20}
              placeholder="Enter Your EmailAddress"
              value={values.EmailAddress}
              onChangeText={handleChange('EmailAddress')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='PhoneNumber'
              label="Phone Number"
              marginBottom={20}
              placeholder="Enter Your Phone Number"
              value={values.PhoneNumber}
              onChangeText={handleChange('PhoneNumber')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='Role'
              label="Role"
              marginBottom={20}
              placeholder="Enter Your Role"
              value={values.Role}
              onChangeText={handleChange('Role')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='Department'
              label="Department"
              marginBottom={20}
              placeholder="Enter Your Department"
              value={values.Department}
              onChangeText={handleChange('Department')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='JoiningDate'
              label="Joining Date"
              marginBottom={20}
              placeholder="Enter Your Joining Date"
              value={values.JoiningDate}
              onChangeText={handleChange('JoiningDate')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='Package'
              label="Package"
              marginBottom={30}
              placeholder="Enter Your Package"
              value={values.Package}
              onChangeText={handleChange('Package')}
              touched={touched}
              errors={errors}
            />

            <View style={styles.buttonContainer}>
              <CustomButton title="Prev" onPress={prevPage} />
              <CustomButton title="Save" onPress={handleSubmit}  />
              <CustomButton title="Next" onPress={nextPage} />
            </View>
          </>
        )}

        {page === 1 && (
          <>
            <MainTitle Title="ADDRESS INFORMATION" />

            <CustomInput
            name='HouseNo'
              label="House.no/Flat.no./Building Name"
              marginBottom={20}
              placeholder="Enter Your Address"
              value={values.HouseNo}
              onChangeText={handleChange('HouseNo')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='AddressLine2'
              label="Address Line 2"
              marginBottom={20}
              placeholder="Enter Your Address Line 2"
              value={values.AddressLine2}
              onChangeText={handleChange('AddressLine2')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='City'
              label="City"
              marginBottom={20}
              placeholder="Enter Your City"
              value={values.City}
              onChangeText={handleChange('City')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='State'
              label="State"
              marginBottom={20}
              placeholder="Enter Your State"
              value={values.State}
              onChangeText={handleChange('State')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='Country'
              label="Country"
              marginBottom={20}
              placeholder="Enter Your Country"
              value={values.Country}
              onChangeText={handleChange('Country')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='PostalCode'
              label="Postal Code"
              marginBottom={20}
              placeholder="Enter Your Postal Code"
              value={values.PostalCode}
              onChangeText={handleChange('PostalCode')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='AddressProof'
              label="Address Proof"
              marginBottom={30}
              placeholder="Upload Your Utility Document"
              value={values.AddressProof}
              onChangeText={handleChange('AddressProof')}
              touched={touched}
              errors={errors}
            />

            <View style={styles.buttonContainer}>
              <CustomButton title="Prev" onPress={prevPage} />
              <CustomButton title="Save" onPress={handleSubmit} />
              <CustomButton title="Next" onPress={nextPage} />
              
            </View>
          </>
        )}

        {page === 2 && (
          <>
            <MainTitle Title="ADDRESS INFORMATION" />

            <CustomInput
            name='BankName'
              label="Bank Name"
              marginBottom={20}
              placeholder="Enter Your Bank Name"
              value={values.BankName}
              onChangeText={handleChange('BankName')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='BankAccount'
              label="Name Of Bank Account"
              marginBottom={20}
              placeholder="Enter Your Name Of Bank Account"
              value={values.BankAccount}
              onChangeText={handleChange('BankAccount')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='SortCode'
              label="Sort Code"
              marginBottom={20}
              placeholder="Enter Your Sort Code"
              value={values.SortCode}
              onChangeText={handleChange('Sort Code')}
              touched={touched}
              errors={errors}
              
            />
            <CustomInput
            name='AccountNumber'
              label=" Account Number"
              marginBottom={20}
              placeholder="Enter Your Account Number"
              value={values.AccountNumber}
              onChangeText={handleChange('AccountNumber')}
              touched={touched}
              errors={errors}
            />
            <CustomInput
            name='BankStatement'
              label="Bank Statement"
              marginBottom={30}
              placeholder="Upload Your Bank Statement"
              value={values.BankStatement}
              onChangeText={handleChange('BankStatement')}
              touched={touched}
              errors={errors}
            />
            <View style={styles.buttonContainer}>
              <CustomButton title="Prev" onPress={prevPage} />
              <CustomButton title="Save" onPress={handleSubmit}/>
              <CustomButton title="Next" onPress={nextPage} />
            </View>
          </>
        )}

        {page === 3 && (
          <>
            <MainTitle Title="ADDRESS INFORMATION" />

            <CustomInput
            name='BankStatement'
              label="Upload Your Offer Letter"
              marginBottom={20}
              placeholder="Upload Your Bank Statement"
              value={values.OfferLetter}
              onChangeText={handleChange('OfferLetter')}
              touched={touched}
              errors={errors}
              
            />

            <View style={styles.buttonContainer}>
              <CustomButton title="Save And Next" onPress={initialPage}  />
            </View>
          </>
        )}
      </Container>
    </ScrollView>
  );
};

export default AddUser;

const styles = StyleSheet.create({
  buttonContainer: {flexDirection: 'row', justifyContent: 'space-evenly'},
});
