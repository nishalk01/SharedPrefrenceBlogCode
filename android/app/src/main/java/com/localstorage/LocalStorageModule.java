package com.localstorage;

import android.content.SharedPreferences;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class LocalStorageModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext context;
    LocalStorageModule(ReactApplicationContext context){
        super(context);
        this.context=context;
    }


    @NonNull
    @Override
    public String getName() {
        return "localStorage";
    }

    @ReactMethod
    public void setItem(String key,String value){
        SharedPreferences sharedPreferences = context.getSharedPreferences("StoreTokens", context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString(key,value);
        editor.commit();
    }

    @ReactMethod
    public  void getItem(String key, Promise promise) {
        SharedPreferences sharedPreferences = context.getSharedPreferences("StoreTokens", context.MODE_APPEND);
        try {
            String Value = sharedPreferences.getString(key, String.valueOf(0));
            promise.resolve(Value);
        }catch(Exception e){
            promise.reject(e);
        }
    }
    @ReactMethod
    public  void clear(){
        context.getSharedPreferences("StoreTokens",context.MODE_PRIVATE).edit().clear().commit();
    }

}
