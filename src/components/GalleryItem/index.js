import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';


const GalleryItem = ({ item }) => {
   const { uri } = item;
   return(
    <Image source={{uri}} style={styles.img}/>
   )
}

const { width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    img: {
        width: width * 0.4,
        height: height * 0.2
    }
})

export { GalleryItem }