import { Platform } from "react-native";

export const BASE_URL = Platform.select({
    web : 'http://localhost:3000/api',
    default: 'http://10.107.14.189:3000/api'
});