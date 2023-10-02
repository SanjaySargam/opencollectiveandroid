import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from './ThemeProvider'
import { ThemeProvider } from './ThemeProvider';
import SettingCard from './SettingCard';
import { logout } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cards = [
    {
        index:1,
        icon: 'account-circle',
        title: 'Info',
        screen:'Info',
        isRight: true
    },
    {
        index:2,
        icon: 'notifications-none',
        title: 'Notifications',
        screen:'Notification',
        isRight: true
    },
    {
        index:3,
        icon: 'apps',
        title: 'Authorized Apps',
        screen:'Info',
        isRight: true
    },
    {
        index:4,
        icon: 'local-activity',
        title: 'Activity Log',
        screen:'Info',
        isRight: true
    },
    {
        index:5,
        icon: 'logout',
        title: 'Log out',
        screen:'',
        isRight: false
    }
]
type Screen1Props = {
    navigation:any
}
const SettingScreen:React.FC<Screen1Props> = ({navigation}) => {
    const { theme } = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:theme.backgroundPrimary
        },
        toolbar: {
            padding:25,
            backgroundColor:theme.mainTheme,
        },
        cardContainer: {
            flex:1,
            marginTop:16
        },
        title: {
            fontSize: 30,
            color: theme.backgroundColor,
            fontWeight: 'bold',
        }
    })

    const handleLogout = async () => {
        // Clear the access token from AsyncStorage or any other storage
        try {
          await AsyncStorage.removeItem('accessToken');
          console.log('Logout')
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
              
        } catch (error) {
          console.error('Error clearing access token:', error);
        }
      }

    return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <Text style={styles.title}>Settings</Text>
                </View>
                <View style={styles.cardContainer}>
                    {
                        cards.map(({ icon, title, isRight, index, screen }) => (
                            <SettingCard
                                key={index}
                                icon={icon}
                                title={title}
                                isRight={isRight}
                                screen={screen}
                                navigation={navigation} // Pass the navigation prop
                                handleonPress={() => {
                                    if(screen){
                                        navigation.navigate(screen as string)
                                    }
                                    else{
                                        handleLogout()
                                    }
                                }}
                            />
                        ))
                    }
                </View>
            </View>
    )
}
export default SettingScreen