//
//  RCTCommonModule.m
//  ReactNativeModule
//
//  Created by ashutosh kailkhura on 02/10/23.
//

#import <Foundation/Foundation.h>
#import "RCTCommonModule.h"

@implementation RCTCommonModule : NSObject 

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCommonEvent:
                  (NSString *)name
                  callback:(RCTResponseSenderBlock)callback
        )
{
  NSString *uppercaseName = [name uppercaseString];

  callback(@[uppercaseName]);
}


@end
