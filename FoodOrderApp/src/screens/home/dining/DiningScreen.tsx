import React from 'react';
import {Button, Image, Pressable, Text, View} from 'react-native';
import {useAppDispatch, useTheme} from '../../../hooks';
import Variables, {Colors, FontSize} from '../../../theme/Variables';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {ThemeState, changeTheme} from '../../../store/theme';
import RNButtons from '../../../theme/components/RNButtons';
import appStyle from '../../../theme/Common';

export function DiningScreen() {
  const {Common, Fonts, Gutters, Layout, Images, darkMode: isDark} = useTheme();

  const {t} = useTranslation();

  const dispatch = useAppDispatch();

  const onChangeTheme = ({theme, darkMode}: Partial<ThemeState>) => {
    dispatch(changeTheme({theme, darkMode}));
  };
  const onChangeLanguage = (lang: 'hi' | 'en') => {
    i18next.changeLanguage(lang);
  };

  return (
    <View style={[Layout.fill]}>
      <View
        style={[
          Layout.fill,
          Layout.relative,
          Layout.fullWidth,
          Layout.justifyContentCenter,
          Layout.alignItemsCenter,
        ]}>
        <View
          style={[
            Layout.absolute,
            {
              height: 250,
              width: 250,
              backgroundColor: isDark ? '#000000' : '#DFDFDF',
              borderRadius: 140,
            },
          ]}
        />
        <Image
          style={[
            Layout.absolute,
            {
              bottom: '-30%',
              left: 0,
            },
          ]}
          source={Images.sparkles.bottomLeft}
          resizeMode={'contain'}
        />
        <View
          style={[
            Layout.absolute,
            {
              height: 300,
              width: 300,
              transform: [{translateY: 40}],
            },
          ]}>
          <Image
            height={300}
            width={300}
            testID={'brand-img'}
            style={Layout.fullSize}
            source={Images.logo}
            resizeMode={'contain'}
          />
        </View>
        <Image
          style={[
            Layout.absolute,
            Layout.fill,
            {
              top: 0,
              left: 0,
            },
          ]}
          source={Images.sparkles.topLeft}
          resizeMode={'contain'}
        />
        <Image
          style={[
            Layout.absolute,
            {
              top: '-5%',
              right: 0,
            },
          ]}
          source={Images.sparkles.top}
          resizeMode={'contain'}
        />
        <Image
          style={[
            Layout.absolute,
            {
              top: '15%',
              right: 20,
            },
          ]}
          source={Images.sparkles.topRight}
          resizeMode={'contain'}
        />
        <Image
          style={[
            Layout.absolute,
            {
              bottom: '-10%',
              right: 0,
            },
          ]}
          source={Images.sparkles.right}
          resizeMode={'contain'}
        />

        <Image
          style={[
            Layout.absolute,
            {
              top: '75%',
              right: 0,
            },
          ]}
          source={Images.sparkles.bottom}
          resizeMode={'contain'}
        />
        <Image
          style={[
            Layout.absolute,
            {
              top: '60%',
              right: 0,
            },
          ]}
          source={Images.sparkles.bottomRight}
          resizeMode={'contain'}
        />
      </View>
      <View
        style={[
          Layout.fill,
          Layout.relative,
          Layout.fullWidth,
          Layout.justifyContentCenter,
          Layout.alignItemsCenter,
        ]}>
        <Pressable
          onPress={() => onChangeTheme({darkMode: !isDark})}
          style={{
            backgroundColor: Colors.primary,
            padding: 12,
            borderRadius: 6,
            marginVertical: 12,
          }}>
          <Text style={{color: Colors.white}}>{t('common:changeTheme')}</Text>
        </Pressable>

        <Pressable
          onPress={() =>
            onChangeLanguage(i18next.language === 'hi' ? 'en' : 'hi')
          }
          style={{
            // ...appStyle,
            backgroundColor: Colors.primary,
            padding: 12,
            borderRadius: 6,
            marginVertical: 12,
          }}>
          <Text>{t('common:changeLanguage')}</Text>
        </Pressable>
      </View>
    </View>
  );
}
