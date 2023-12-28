import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.5,
  },
  content: {
    flex: 0.5,
    justifyContent: 'space-evenly',
  },
  toolbar: {
    // flex: 1,
    zIndex: 1,
    position: 'absolute',
    height: 60,
    width: '100%',
    // minWidth: '60%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuText: {
    borderRadius: 12,
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: 'rgba(164, 140, 152, 0.8)',
    marginHorizontal: 8,
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
    height: 33,
    width: 55,
  },
  menuImage: {
    tintColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
    borderRadius: 12,
    padding: 8,
    backgroundColor: 'rgba(164, 140, 152, 0.8)',
    marginHorizontal: 18,
    height: 33,
    width: 55,
  },
  brandDes: {
    margin: 16,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },

  socialGroup: {
    marginVertical: 4,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  policy: {
    fontSize: 12,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
