package com.reactnativemodule.androidmodule;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AndroidModule extends ReactContextBaseJavaModule {
    public AndroidModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "AndroidModule";
    }

    @ReactMethod
    public void createAndroidEvent(Integer number, Callback callBack) {
        callBack.invoke(number * 10);
    }
}