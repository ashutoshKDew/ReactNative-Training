package com.reactnativemodule;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.reactnativemodule.androidmodule.AndroidModule;
import com.reactnativemodule.androidmodule.DatePickerModule;
import com.reactnativemodule.commonmodule.CommonModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyAppPackage implements ReactPackage {

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new AndroidModule(reactContext));
        modules.add(new DatePickerModule(reactContext));
        modules.add(new CommonModule(reactContext));

        return modules;
    }

}