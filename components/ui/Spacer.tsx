import { View } from "react-native";

interface ISpacer {
    height?: number,
    width?: number
}
export default function Spacer({ height, width }: ISpacer) {
    return <View style={{
        height: height ?? null,
        width: width ?? null
    }} />
}