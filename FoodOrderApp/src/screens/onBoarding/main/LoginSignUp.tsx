import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './LogInSignUp.Style';
import {useTranslation} from 'react-i18next';
import EnterMobileNumber from '../../../component/EnterMobileNumber';
import TextWithFormatting from '../../../component/TextWithFormatting';
import {OnBoardingStackScreenProps} from '../../../../types/navigation';

export default function LoginSignUp({
  navigation,
}: OnBoardingStackScreenProps<'LoginSignUp'>) {
  const {t, i18n} = useTranslation();

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    // i18n.changeLanguage(lang);
  };

  const onPhoneNumberSubmit = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      {/* main header */}
      <ImageBackground
        source={require('../../../assets/headerImage.jpg')}
        resizeMode="cover"
        style={styles.header}>
        {/* toolbar */}
        <View style={styles.toolbar}>
          <TouchableOpacity
            onPress={() => {
              // onChangeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
              navigation.navigate('SelectLanguageModal');
            }}>
            <View style={styles.menuImage}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AskUserLocation')}>
            <View style={styles.menuImage}></View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* loginsignup content */}
      <View style={styles.content}>
        <Text style={styles.brandDes}>{t('welcome:branding_text_1')}</Text>
        <TextWithFormatting text={t('welcome:login_or_sign')} />
        {/* enter number */}
        <EnterMobileNumber onSubmitNumber={onPhoneNumberSubmit} />
        <TextWithFormatting text="OR" />
        {/* social login */}
        <View style={styles.socialGroup}>
          <Text>Google</Text>
        </View>
        <Text style={styles.policy}>termAndCondition</Text>
      </View>
      {/* select language bottom sheet */}
    </KeyboardAvoidingView>
  );
}
