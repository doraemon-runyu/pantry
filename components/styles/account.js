import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'Avenir-Book',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  itemsList: {
    marginBottom: 80,
  },
  item: {
    borderWidth: 0.2,
    paddingHorizontal: 25,
    paddingVertical: 14,
    backgroundColor: '#f8f9fa',
  },
  itemTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 20,
    fontFamily: 'Avenir-Book',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 10,
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  logout: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Avenir-Book',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    padding: 5,
  },
});
