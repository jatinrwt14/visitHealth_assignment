//
//  UserAPIBridge.m
//  visitHealth
//
//  Created by Jatin Rawat on 17/01/26.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(UserAPI, NSObject)

RCT_EXTERN_METHOD(
  getUsers:(nonnull NSNumber *)limit
  skip:(nonnull NSNumber *)skip
  resolver:(RCTPromiseResolveBlock)resolve
  rejecter:(RCTPromiseRejectBlock)reject
)

RCT_EXTERN_METHOD(
  getUserById:(nonnull NSNumber *)userId
  resolver:(RCTPromiseResolveBlock)resolve
  rejecter:(RCTPromiseRejectBlock)reject
)

@end
