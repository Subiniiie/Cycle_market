import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../src/screen/home/HomeScreen";
import SearchScreen from "../src/screen/search/SearchScreen";
import CommunityScreen from "../src/screen/community/CommunityScreen";
import SettingScreen from "../src/screen/setting/SettingScreen";


const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
                <Tab.Screen name="Search" component={SearchScreen}></Tab.Screen>
                <Tab.Screen name="Community" component={CommunityScreen}></Tab.Screen>
                <Tab.Screen name="Setting" component={SettingScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MyTabs;