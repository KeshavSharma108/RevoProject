import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "../../screen_HRM/Users/UserList";
import AddUser from "../../screen_HRM/Users/AddUser";
import UserDetail from "../../screen_HRM/Users/UserDetail";
import AddTeam from "../../screen_HRM/Teams/AddTeam";
import TeamDetail from "../../screen_HRM/Teams/TeamDetail";
import TeamList from "../../screen_HRM/Teams/TeamList";
import AddLeave from "../../screen_HRM/Leaves/AddLeave";
import LeavesList from "../../screen_HRM/Leaves/LeavesList";
import LeaveDetail from "../../screen_HRM/Leaves/LeaveDetail";
import AttendanceList from "../../screen_HRM/Attendance/AttendanceList";
import AttendanceDetail from "../../screen_HRM/Attendance/AttendanceDetail";
import { attendance, leave, team, user } from "../routeName";


const Stack = createNativeStackNavigator();

// UsersNavigator
export const UserNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={user.UserList} component={UserList} />
            <Stack.Screen name={user.AddUser} component={AddUser} />
            <Stack.Screen name={user.UserDetail} component={UserDetail} />
        </Stack.Navigator>
    );
};

//TeamNavigator
export const TeamNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={team.TeamList} component={TeamList} />
            <Stack.Screen name={team.TeamDetail} component={TeamDetail} />
            <Stack.Screen name={team.AddTeam} component={AddTeam} />
        </Stack.Navigator>
    );
};

//TeamNavigator
export const LeaveNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={leave.LeaveList} component={LeavesList} />
            <Stack.Screen name={leave.LeaveDetail} component={LeaveDetail} />
            <Stack.Screen name={leave.AddLeave} component={AddLeave} />
        </Stack.Navigator>
    );
};

//AttendanceNavigator
export const AttendanceNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={attendance.AttendanceList} component={AttendanceList} />
            <Stack.Screen name={attendance.AttendanceDetail} component={AttendanceDetail} />
        </Stack.Navigator>
    );
};