import {useEffect, useState} from 'react';
import axios from 'axios';
import {SERVICE} from '../constants/index';
import {API_KEY} from '@env';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid} from 'react-native';
import {transformData} from './transforData';
import {ApiResponse, TransformedData} from '../model/WeatherData';

export const useWeather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<TransformedData | null>(null);
  const [error, setError] = useState<string>('');

  const askPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'SimpleWeatherApp  needs access to your Location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        getLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const fetchData = async (
    latitude: number = 44.34,
    longitude: number = 10.99,
  ) => {
    console.log(`fetch data lat ${latitude} lng ${longitude}`);
    axios
      .get(`${SERVICE.BASE_URL}`, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: API_KEY,
          units: 'metric',
        },
      })
      .then(function (response) {
        const apiResponse: ApiResponse = response.data;
        const transformedData: TransformedData = transformData(apiResponse);
        setData(transformedData);
        setIsLoading(false);
      })
      .catch(function (_error) {
        // handle error
        console.log('Error : ' + _error.message);
        setError('Error : ' + _error.message);
        setIsLoading(false);
      })
      .finally(function () {
        // always executed
        console.log('finally');
      });
  };

  const getLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(
          `position lat ${position.coords.latitude} lng ${position.coords.longitude}`,
        );
        fetchData(position.coords.latitude, position.coords.longitude);
      },
      _error => {
        // See error code charts below.
        console.log(_error.code, _error.message);
        fetchData();
        setError('Error : ' + _error.message);
        setIsLoading(false);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    askPermission();
  }, []);

  return [isLoading, data, error];
};
