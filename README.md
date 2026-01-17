A React Native (TypeScript) iOS application that fetches user data natively in Swift and exposes it to React Native via a Native Bridge.

 -> All API calls are performed in Swift only
 -> No network calls from JavaScript
 -> Strongly typed TypeScript throughout

Installing Steps

-> git clone https://github.com/jatinrwt14/visitHealth_assignment.git
-> npm install
-> cd ios && pod install && cd ..

-> npx react-native run-ios

Bridge Explaination

    React Native (TypeScript)
            │
            │  (Bridge via NativeModules)
            ▼
    Swift Native Module (UserAPI)
            │
            │  (URLSession)
            ▼
    Remote API (dummyjson.com)

Native Module Location

ios/UserAPIBridge.m
ios/Bridge/UserAPI.swift
