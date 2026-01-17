//
//  UserAPI.swift
//  visitHealth
//
//  Created by Jatin Rawat on 17/01/26.
//

import Foundation

@objc(UserAPI)
class UserAPI: NSObject {
  
  private let baseURL = "https://dummyjson.com/users"
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
  
  @objc(getUsers:skip:resolver:rejecter:)
  func getUsers(
    limit: NSNumber,
    skip: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    let urlString = "\(baseURL)?limit=\(limit)&skip=\(skip)"
    guard let url = URL(string: urlString) else {
      reject("Error in Invalid URL", "Invalid URL", nil)
      return
    }
    
    URLSession.shared.dataTask(with: url) { data, _, error in
      if let error = error {
        reject("Network Issue", error.localizedDescription, error)
        return
      }
      
      guard let data = data else {
        reject("Error","Error, No data Found", nil)
        return
      }
      
      do {
        let json = try JSONSerialization.jsonObject(with: data)
        resolve(json)
      } catch {
        reject("Error in Parsing Json", error.localizedDescription, error)
      }
    }.resume()
  }
  
  @objc(getUserById:resolver:rejecter:)
  func getUserById(
    userId: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    let urlString = "\(baseURL)/\(userId)"
    guard let url = URL(string: urlString) else {
      reject("Error in Invalid URL", "Invalid URL", nil)
      return
    }
    
    URLSession.shared.dataTask(with: url) { data, _, error in
      if let error = error {
        reject("Network Issue", error.localizedDescription, error)
        return
      }
      
      guard let data = data else {
        reject("Error", "Error, No data Found", nil)
        return
      }
      
      do {
        let json = try JSONSerialization.jsonObject(with: data)
        resolve(json)
      } catch {
        reject("Error in Pasing Json", error.localizedDescription, error)
      }
    }.resume()
  }
}

