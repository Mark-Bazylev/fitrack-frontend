import {Carousel, View} from "react-native-ui-lib";
import {carouselData} from "@/assets/data/carousel";
import {Image} from "expo-image";
import {StyleSheet} from "react-native";

export default function AuthBackground() {
    return (
        <View style={styles.carouselContainer}>
            <Carousel
                scrollEnabled={false}
                autoplay
                autoplayInterval={5000}
                loop
                initialPage={1}
            >
                {carouselData.map((item) => (
                    <View key={item.id}>
                        <Image
                            key={item.id}
                            style={styles.image}
                            contentFit={"cover"}
                            source={item.imageUrl}
                        />
                    </View>
                ))}
            </Carousel>

        </View>

    );
}

const styles = StyleSheet.create({
    carouselContainer: {
        position:'absolute',
        width: "100%",
        height:'100%',
        zIndex: -1,
    },
    image: {
        width: '100%',
        height:'100%',
    },
});
