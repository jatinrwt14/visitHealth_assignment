import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { UserAPI } from "../../../Services/UserAPI";
import { User } from "../../../Services/Types/UserListResponseDTO";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../Navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

function DashboardScreen({ navigation }: Props) {
  const LIMIT = 10;

  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [skip, setSkip] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadUsers(true);
  }, []);

  const loadUsers = async (reset = false) => {
    const currentSkip = reset ? 0 : skip;

    const response = await UserAPI.getUsers(LIMIT, currentSkip);

    const newUsers = reset
      ? response.users
      : [...users, ...response.users];

    setUsers(newUsers);
    setFilteredUsers(newUsers);
    setSkip(currentSkip + LIMIT);
    setRefreshing(false);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setSearchQuery("");
    loadUsers(true);
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);

    if (!text.trim()) {
      setFilteredUsers(users);
      return;
    }

    const query = text.toLowerCase();
    const result = users.filter(user =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(query)
    );

    setFilteredUsers(result);
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={handleSearch}
        style={{
          padding: 12,
          margin: 12,
          borderWidth: 1,
          borderRadius: 8,
        }}
      />

      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => loadUsers()}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("UserDetails", { userId: item.id })
            }
          >
            <View style={{ flexDirection: "row", padding: 12 }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
              <View style={{ marginLeft: 12 }}>
                <Text>
                  {item.firstName} {item.lastName}
                </Text>
                <Text>Age: {item.age}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default DashboardScreen;
