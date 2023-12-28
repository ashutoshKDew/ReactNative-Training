//
//  RCTCalendarModule.m
//  ReactNativeModule
//
//  Created by ashutosh kailkhura on 01/10/23.
//

#import <Foundation/Foundation.h>
#import "RCTIosModule.h"

@implementation RCTIosModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(
    createIosEvent:
                  (double)random
                  callback:(RCTResponseSenderBlock)callback){
  double result = random * 10;
  callback(@[@(result)]);

}

@end // To export a module named RCTIosModule
