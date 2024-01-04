package com.reactnativemodule.androidmodule;

import static android.app.PendingIntent.getActivity;

import android.app.DatePickerDialog;
import android.widget.DatePicker;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.reactnativemodule.R;

import java.util.Calendar;
import java.util.Objects;

public class DatePickerModule extends ReactContextBaseJavaModule {

    private int mYear, mMonth, mDay, mHour, mMinute;


    public DatePickerModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "DatePickerModule";
    }

    @ReactMethod
    public void openBasicDatePicker(Callback callBack) {

        // Get Current Date
        final Calendar c = Calendar.getInstance();
        mYear = c.get(Calendar.YEAR);
        mMonth = c.get(Calendar.MONTH);
        mDay = c.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(Objects.requireNonNull(DatePickerModule.this.getCurrentActivity()),
                (view, year, monthOfYear, dayOfMonth) -> {

//                        txtDate.setText(dayOfMonth + "-" + (monthOfYear + 1) + "-" + year);
                    callBack.invoke(" "+dayOfMonth + "-" + (monthOfYear + 1) + "-" + year);

                }, mYear, mMonth, mDay);
        datePickerDialog.show();
    }


}
