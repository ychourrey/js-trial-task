import { Platform } from "react-native";

export const BASE_URL = Platform.select({
    web : 'http://localhost:3000/api',
    default: '<ACTUAL PROD IP - TODO>'
});