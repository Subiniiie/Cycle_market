import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../src/screen/home/HomeScreen";
import SearchScreen from "../src/screen/search/SearchScreen";
import CommunityScreen from "../src/screen/community/CommunityScreen";
import SettingScreen from "../src/screen/setting/SettingScreen";
import Icon from "react-native-vector-icons/Ionicons";
import HomeStackNavigator from "./stackNavigator/HomeStackNavigator";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
                name="Home" 
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <Icon name="home-outline" size={size} color={color} />
                    )

                }}
            />
            <Tab.Screen 
                name="Search" 
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <Icon name="search-sharp" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Community" 
                component={CommunityScreen}
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <Icon name="earth-outline" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Setting" 
                component={SettingScreen}
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <Icon name="menu" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default MyTabs;