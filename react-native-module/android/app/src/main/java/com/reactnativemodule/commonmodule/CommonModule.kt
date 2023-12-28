package com.reactnativemodule.commonmodule

import android.util.Log
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.Locale

class CommonModule internal constructor(context: ReactApplicationContext?) :
    ReactContextBaseJavaModule(context) {

    override fun getName(): String {
        return "CommonModule"
    }

    @ReactMethod
    fun createCommonEvent(name: String, callBack: Callback) {
        callBack.invoke(name.uppercase(Locale.ROOT))
    }
}