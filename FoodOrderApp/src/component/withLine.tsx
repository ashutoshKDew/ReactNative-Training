// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// interface HocProps {
//   text: string;
// }

// const TextWrapper: React.FC<HocProps> = ({text}) => {
//   return (
//     <View style={styles.container}>
//       <Text>~~~{text}~~~</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     backgroundColor: '#e6e6e6',
//     borderRadius: 5,
//     margin: 5,
//   },
// });

// // HOC function that returns the TextWrapper component
// const withFormattedText = (WrappedComponent: React.ComponentType<HocProps>) => {
//   return (props: HocProps) => {
//     return <TextWrapper text={props.text} />;
//   };
// };

// export default withFormattedText;
