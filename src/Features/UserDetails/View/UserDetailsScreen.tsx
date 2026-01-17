import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { UserAPI } from "../../../Services/UserAPI";
import { User } from "../../../Services/Types/UserListResponseDTO";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetails'>;

function UserDetailsScreen({ route }: Props) {

    const { userId } = route.params;
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        UserAPI.getUserById(userId).then(setUser);
    }, [userId]);

    if (!user) return null;


    return (
        <View style={{ padding: 16 }}>
            <Image source={{ uri: user.image }} style={{ width: 120, height: 120 }} />
            <Text>{user.firstName} {user.lastName}</Text>
            <Text>Age: {user.age}</Text>
            <Text>Gender: {user.gender}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
            <Text>
                {user.address.city}, {user.address.state}, {user.address.country}
            </Text>
            <Text>Company: {user.company.name}</Text>
        </View>
    )
}

export default UserDetailsScreen