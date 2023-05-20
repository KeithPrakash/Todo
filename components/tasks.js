
import React from 'react';
import { View,Text,StyleSheet} from 'react-native';


const Task = (props) => {
    return ( 
        <View style={styles.item}>
           <View style={styles.itemLeft}>
             <View style={styles.squre}></View>
             <Text styles={styles.textItem}>{props.text}</Text>
           </View>
           <View style={styles.circular}></View>
        </View>
     );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  squre: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF666",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  textItem: {
    maxWidth: "80%",
  },
  circular: {
    height: 12,
    width: 12,
    borderColor: "#55BCF6",
    borderWidth:2,
    borderRadius:12,

  },
}); 




export default Task;