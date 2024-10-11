import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookingDetail from "../../screen_CRM/Booking/BookingDetail";
import BookingList from "../../screen_CRM/Booking/BookingList";
import LeadDetails from "../../screen_CRM/Lead/LeadDetails";
import LeadForm from "../../screen_CRM/Lead/LeadForm";
import LeadList from "../../screen_CRM/Lead/LeadList";
import MeetingList from "../../screen_CRM/Meeting.tsx/MeetingList";
import MeetingForm from "../../screen_CRM/Meeting.tsx/MeetingForm";
import MeetingDetails from "../../screen_CRM/Meeting.tsx/MeetingDetails";
import { booking, lead, meeting } from "../routeName";


const Stack = createNativeStackNavigator();

// MeetingsNavigator
export const MeetingsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={meeting.MeetingList} component={MeetingList} />
            <Stack.Screen name={meeting.MeetingDetails} component={MeetingDetails} />
            <Stack.Screen name={meeting.MeetingForm} component={MeetingForm} />
        </Stack.Navigator>
    );
};

// LeadsNavigator
export const LeadsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={lead.LeadList} component={LeadList} />
            <Stack.Screen name={lead.LeadForm} component={LeadForm} />
            <Stack.Screen name={lead.LeadDetails} component={LeadDetails} />
        </Stack.Navigator>
    );
};



// BookingNavigator
export const BookingNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={booking.BookingList} component={BookingList} />
            <Stack.Screen name={booking.BookingDetail} component={BookingDetail} />
        </Stack.Navigator>
    );
};